import 'reactflow/dist/style.css';
import style from './style.module.scss';
import Sidebar from './sidebar';
import ReactFlow, {
  Background,
  Node,
  Controls,
  BackgroundVariant,
  ReactFlowProvider,
  useNodesState,
  addEdge,
  useEdgesState,
} from 'reactflow';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Diamond } from './components/diamond';

export function Flow() {
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'if',
      data: { label: 'Node 1' },
      position: { x: 100, y: 100 },
    },
    {
      id: '2',
      type: 'else',
      data: { label: 'Node 1' },
      position: { x: 400, y: 600 },
    },
  ];
  const nodeTypes = useMemo(() => ({ if: Diamond, else: Diamond }), []);
  const variant = BackgroundVariant.Lines;
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null as any);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const reactFlowWrapper = useRef(null);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  let id = 0;
  const getId = () => `dndnode_${id++}`;

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      if (reactFlowWrapper.current === null) return;

      const element = reactFlowWrapper.current as HTMLDivElement;

      const reactFlowBounds = element.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type: 'if',
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <>
      <ReactFlowProvider>
        <div className={style.container} ref={reactFlowWrapper}>
          <div className={style.components}>
            <Sidebar />
          </div>
          <div className={style.flow}>
            <ReactFlow
              onNodesChange={onNodesChange}
              onInit={setReactFlowInstance}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              nodes={nodes}
              onDrop={onDrop}
              onDragOver={onDragOver}
            >
              <Background variant={variant} />
              <Controls />
            </ReactFlow>
          </div>
        </div>
      </ReactFlowProvider>
    </>
  );
}
