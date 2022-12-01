import style from './style.module.scss';
import diamond from '../../icons/diamond-svgrepo-com.png';
import { Handle, Position } from 'reactflow';

export function Diamond() {
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
        <div className={style.diamond}>
          <img src={diamond} alt='diamond' />
        </div>
        <input id='text' name='text' />

        {/* <input id='text' name='text' onChange={onChange} /> */}
      </div>
      <Handle
        type='source'
        position={Position.Right}
        id='b'
        className={style.handle}
        style={{
          right: -6,
          border: '3px solid #ebebeb',
          backgroundColor: '#ff62b5',
        }}
      />
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
