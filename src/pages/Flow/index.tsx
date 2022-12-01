import 'reactflow/dist/style.css';
import style from './style.module.scss';

import ReactFlow, {
  Background,
  Node,
  Controls,
  BackgroundVariant,
} from 'reactflow';
import { useMemo } from 'react';
import { Diamond } from './components/diamond';

export function Flow() {
  const nodeTypes = useMemo(() => ({ diamond: Diamond }), []);
  const variant = BackgroundVariant.Lines;
  const nodes: Node[] = [
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

  return (
    <>
      <div className={style.container}>
        <div className={style.components}></div>
        <div className={style.flow}>
          <ReactFlow nodeTypes={nodeTypes} nodes={nodes}>
            <Background variant={variant} />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </>
  );
}
