import { CreateParameters, NotionDocument, UpdateDocumentTitleParameters } from "@react-types/notion"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useAppDispatch } from "@store/hooks"

interface NotionStateInterface {
  documents: NotionDocument[],
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
  const response = await fetch('http://localhost:8000/api/v1/page/update', {
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

export const notionSlice = createSlice({
  name: 'notion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadDocuments.fulfilled, (state, { payload }) => ({ ...state, loading: 'idle', documents: payload }))
    builder.addCase(loadDocuments.rejected, (state) => ({ ...state, loading: 'failed' }))

    builder.addCase(loadDocument.pending, state => ({ ...state, loading: 'pending' }))
    builder.addCase(loadDocument.fulfilled, (state, { payload }) => ({ ...state, document: payload }))
    builder.addCase(loadDocument.rejected, (state) => ({ ...state, loading: 'failed' }))

    builder.addCase(loadDocumentChildren.fulfilled, (state, { payload }) => ({ ...state, loading: 'idle', children: payload }))
    builder.addCase(loadDocumentChildren.rejected, (state) => ({ ...state, loading: 'failed' }))

    builder.addCase(createDocument.fulfilled, (state, { payload }) => ({ ...state, loading: 'idle', documents: [payload, ...state.documents] }))
    builder.addCase(createDocument.rejected, (state) => ({ ...state, loading: 'failed' }))

    builder.addCase(updateDocumentTitle.fulfilled, (state, { payload }) => ({ ...state, document: Object.assign(state.document, payload) }))
    builder.addCase(updateDocumentTitle.rejected, (state) => ({ ...state, loading: 'failed' }))


  }
})

export default notionSlice.reducer