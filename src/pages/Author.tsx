import { useParams } from 'react-router-dom';

export function Author() {
  const { id } = useParams();
  return <>Author {id} works</>;
}
