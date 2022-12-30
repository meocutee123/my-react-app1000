import 'reactflow/dist/style.css';
import style from './style.module.scss';
import MyCustomEdge from './components/Edge';
import ReactFlow, {
  Background,
  Node,
  BackgroundVariant,
  ReactFlowProvider,
  useNodesState,
  updateEdge,
  addEdge,
  useEdgesState,
  Edge,
  Connection,
  ReactFlowInstance,
  ConnectionLineType,
} from 'reactflow';

import { useCallback, useRef, useState } from 'react';
import { Process } from './symbols/process';
import { Data } from './symbols/data';
import { Document } from './symbols/document';
import Decision from './symbols/decision';

const nodeTypes = {
  decision: Decision,
  document: Document,
  data: Data,
  process: Process,
};

const edgeTypes = {
  custom: MyCustomEdge,
};
export function Flow() {
  const initialNodes: Node[] = [];
  const initialEdges: Edge[] = [];

  const reactFlowWrapper = useRef(null);
  const symbolsFlowWrapper = useRef(null);
  const edgeUpdateSuccessful = useRef(true);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<
    any,
    any
  > | null>(null);

  const generateIdentifier = (length: number) => {
    let uniqueIdentifier = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      uniqueIdentifier += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return uniqueIdentifier;
  };

  const onDelete = useCallback(
    (nodeIdentifier: string) =>
      setNodes((nodes) => nodes.filter((node) => node.id !== nodeIdentifier)),
    [setNodes]
  );

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      if (
        reactFlowWrapper.current === null ||
        symbolsFlowWrapper.current === null
      )
        return;
      const flowWrapper = reactFlowWrapper.current as HTMLDivElement;
      const symbolsWrapper = symbolsFlowWrapper.current as HTMLDivElement;

      const reactFlowBounds = flowWrapper.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) return;
      if (reactFlowInstance === null) return;
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left - symbolsWrapper.offsetWidth,
        y: event.clientY - reactFlowBounds.top,
      });

      const node: Node = {
        id: generateIdentifier(6),
        type: type,
        position: position,
        dragHandle: '.custom-drag-handle',
        data: { label: `Em chưa ăn cơm?`, onDelete: onDelete },
      };
      setNodes((nodes) => nodes.concat(node));
    },
    [reactFlowInstance, onDelete, setNodes]
  );

  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onEdgeUpdate = useCallback(
    (oldEdge: Edge<any>, connection: Connection) => {
      edgeUpdateSuccessful.current = true;
      setEdges((edges) => updateEdge(oldEdge, connection, edges));
    },
    [setEdges]
  );

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, [edgeUpdateSuccessful]);

  const onEdgeUpdateEnd = useCallback(
    (_: any, edge: Edge) => {
      if (edgeUpdateSuccessful.current === false) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }

      edgeUpdateSuccessful.current = true;
    },
    [edgeUpdateSuccessful, setEdges]
  );

  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((edges) => addEdge({ ...connection, type: 'step' }, edges)),
    [setEdges]
  );

  return (
    <>
      <ReactFlowProvider>
        <div className={style.container} ref={reactFlowWrapper}>
          <div className={style.symbols} ref={symbolsFlowWrapper}>
            <div className={style.conditions}>
              <h3 style={{ fontSize: 20, marginBottom: 24 }}>
                Start conditions
              </h3>
              <div className='flex-2'>
                <div
                  className='d-flex mb-3'
                  style={{ height: 50, outline: '2px solid limegreen' }}
                  onDragStart={(event) => onDragStart(event, 'decision')}
                  draggable
                >
                  <div
                    style={{ width: 50, backgroundColor: '#b87fd9', flex: 1 }}
                  ></div>
                  <div
                    style={{
                      flex: 2,
                      height: 50,
                      textAlign: 'center',
                      lineHeight: '50px',
                      fontSize: '16px',
                      cursor: 'default',
                    }}
                  >
                    Journey Event
                  </div>
                </div>

                <div
                  className='d-flex mb-3'
                  style={{ height: 50, outline: '2px solid limegreen' }}
                  onDragStart={(event) => onDragStart(event, 'data')}
                  draggable
                >
                  <div
                    style={{ width: 50, backgroundColor: '#51e5b1', flex: 1 }}
                  ></div>
                  <div
                    style={{
                      flex: 2,
                      height: 50,
                      textAlign: 'center',
                      lineHeight: '50px',
                      fontSize: '16px',
                      cursor: 'default',
                    }}
                  >
                    System Event
                  </div>
                </div>

                <div
                  className='d-flex mb-3'
                  style={{ height: 50, outline: '2px solid limegreen' }}
                  onDragStart={(event) => onDragStart(event, 'process')}
                  draggable
                >
                  <div
                    style={{ width: 50, backgroundColor: '#e5c551', flex: 1 }}
                  ></div>
                  <div
                    style={{
                      flex: 2,
                      height: 50,
                      textAlign: 'center',
                      lineHeight: '50px',
                      fontSize: '16px',
                      cursor: 'default',
                    }}
                  >
                    Birthday Event
                  </div>
                </div>

                <div
                  className='d-flex mb-3'
                  style={{ height: 50, outline: '2px solid limegreen' }}
                  onDragStart={(event) => onDragStart(event, 'document')}
                  draggable
                >
                  <div
                    style={{ width: 50, backgroundColor: '#5180e5', flex: 1 }}
                  ></div>
                  <div
                    style={{
                      flex: 2,
                      height: 50,
                      textAlign: 'center',
                      lineHeight: '50px',
                      fontSize: '16px',
                      cursor: 'default',
                    }}
                  >
                    Submit Form
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.flow}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onDrop={onDrop}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              connectionLineType={ConnectionLineType.Step}
              onConnect={onConnect}
              onDragOver={onDragOver}
              onEdgeUpdate={onEdgeUpdate}
              onInit={setReactFlowInstance}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onEdgeUpdateEnd={onEdgeUpdateEnd}
              onEdgeUpdateStart={onEdgeUpdateStart}
            >
              <Background variant={BackgroundVariant.Lines} />
            </ReactFlow>
          </div>
        </div>
      </ReactFlowProvider>
    </>
  );
}
