import { Block, CreateParameters, NotionDocument, UpdateDocumentBlocksParameters, UpdateDocumentTitleParameters } from "@react-types/notion"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useAppDispatch } from "@store/hooks"

interface NotionStateInterface {
  documents: any[],
  document: any | null
  children: any,
  loading: 'idle' | 'pending' | 'failed'
}

const initialState: NotionStateInterface = {
  documents: [],
  document: null,
  children: null,
  loading: 'idle'
}

export const loadDocuments = createAsyncThunk('[NOTION Api Action] load documents', async (_, { rejectWithValue }) => {
  const response = await fetch('http://localhost:8000/api/v1/page')
    .then(response => response.json())
  return response
})

export const loadDocument = createAsyncThunk('[NOTION Api Action] load document', async (documentId: string, { dispatch }) => {
  const response = await fetch('http://localhost:8000/api/v1/page/' + documentId)
    .then(response => response.json())

  dispatch(loadDocumentChildren(documentId))
  return response
})

export const loadDocumentChildren = createAsyncThunk('[NOTION Api Action] load document children', async (documentId: string, _) => {
  const response = await fetch('http://localhost:8000/api/v1/page/' + documentId + '/children')
    .then(response => response.json())
  return response
})

export const createDocument = createAsyncThunk('[NOTION Api Action] create document', async (createParameters: CreateParameters, { rejectWithValue }) => {
  const response = await fetch('http://localhost:8000/api/v1/page/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createParameters)
  })
    .then(response => response.json())

  return response
})

export const updateDocumentTitle = createAsyncThunk('[NOTION Api Action] update document title', async (updateParameters: UpdateDocumentTitleParameters, { rejectWithValue }) => {
  const response = await fetch('http://localhost:8000/api/v1/page/update-title', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateParameters)
  })
    .then(response => response.json())

  return response
})

export const updateDocumentBlock = createAsyncThunk('[NOTION Api Action] update document block', async (updateParameters: UpdateDocumentBlocksParameters, { rejectWithValue, getState }) => {
  const state: any = getState()
  const block = state.notion.children.results.find((x: any) => x.id === updateParameters.children.id)
  if (block === undefined) return

  const request: UpdateDocumentBlocksParameters = {
    pageId: state.notion.document.id,
    children: {
      ...updateParameters.children,
      id: block.notionBlockId ? block.notionBlockId : block.id
    }
  }
  console.log(request);

  const response = await fetch('http://localhost:8000/api/v1/page/save-transaction', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })
    .then(response => response.json())

  return { clientId: request.children.id, ...response }
})

export const notionSlice = createSlice({
  name: 'notion',
  initialState,
  reducers: {
    updateEditorContent: (state, { payload }: PayloadAction<Block>) => {
      const index = state.children.results.findIndex((x: any) => x.id === payload.id)
      if (index === -1) {
        state.children.results.push(payload)
      }
      else {
        state.children.results[index].paragraph = payload.paragraph
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadDocuments.fulfilled, (state, { payload }) => ({ ...state, loading: 'idle', documents: payload }))
    builder.addCase(loadDocuments.rejected, (state) => ({ ...state, loading: 'failed' }))

    builder.addCase(loadDocument.pending, state => ({ ...state, loading: 'pending' }))
    builder.addCase(loadDocument.fulfilled, (state, { payload }) => ({ ...state, document: payload }))
    builder.addCase(loadDocument.rejected, (state) => ({ ...state, loading: 'failed' }))

    builder.addCase(loadDocumentChildren.fulfilled, (state, { payload }) => {
      state.loading = 'idle'

      state.children = payload
    })
    builder.addCase(loadDocumentChildren.rejected, (state) => ({ ...state, loading: 'failed' }))

    builder.addCase(createDocument.fulfilled, (state, { payload }) => ({ ...state, loading: 'idle', documents: [payload, ...state.documents] }))
    builder.addCase(createDocument.rejected, (state) => ({ ...state, loading: 'failed' }))

    builder.addCase(updateDocumentTitle.fulfilled, (state, { payload }) => {
      const document = state.documents.findIndex(document => document.id === payload.id)
      if (document !== -1) {
        state.documents[document].title = payload.properties.title.title[0].plain_text
      }
      state.document = payload
    })
    builder.addCase(updateDocumentTitle.rejected, (state) => ({ ...state, loading: 'failed' }))

    builder.addCase(updateDocumentBlock.fulfilled, (state, { payload }) => {
      const blockToUpdate = state.children.results.findIndex((x: any) => x.id === payload.clientId)

      if (blockToUpdate === -1) return
      if (payload.results === undefined || payload.results[0] === undefined) return
      
      state.children.results[blockToUpdate].notionBlockId = payload.results[0].id
    })
  }
})
export const { updateEditorContent } = notionSlice.actions
export default notionSlice.reducer