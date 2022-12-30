import style from './style.module.scss';
import { Handle, NodeProps, Position } from 'reactflow';
import { ReactComponent as Trash } from '../../icons/trash-svgrepo-com.svg';

type Props = {
  label: string;
  onDelete: (nodeIdentifier: string) => void;
};
export function Process({ id, data: { label, onDelete } }: NodeProps<Props>) {
  return (
    <>
      <Handle
        type='target'
        position={Position.Top}
        className={style.handle}
        style={{
          top: -8,
          border: '3px solid #ebebeb',
          backgroundColor: '#fff',
        }}
      />
      <div className={style.container}>
        <Trash
          style={{
            position: 'absolute',
            top: 0,
            right: -20,
            width: 16,
            cursor: 'pointer',
          }}
          onClick={() => onDelete(id)}
        />
        <div
          className={`${style.diamond} custom-drag-handle`}
          style={{ cursor: 'move' }}
        ></div>
        <div
          style={{
            paddingLeft: 40,
            paddingRight: 10,
            display: 'flex',
            height: '100%',
          }}
        >
          <input id='text' name='text' placeholder={label} />
        </div>
      </div>
      <Handle
        type='source'
        position={Position.Bottom}
        id='a'
        className={style.handle}
        style={{
          bottom: -6,
          border: '3px solid #ebebeb',
          backgroundColor: 'limegreen',
        }}
      />
    </>
  );
}
