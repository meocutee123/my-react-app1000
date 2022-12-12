import style from './style.module.scss';
type Props = {
  caption: string;
  theme?: string;
};
export default function Button({ caption, theme }: Props) {
  let background = 'default';

  if (theme === 'white') background = style.white;

  return (
    <>
      <button type='submit' className={`${style.button} ${background}`}>
        {caption}
      </button>
    </>
  );
}
