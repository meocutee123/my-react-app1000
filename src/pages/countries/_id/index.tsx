import { useParams } from 'react-router-dom';

export function Country() {
  const { id } = useParams();
  return <>{id} works</>;
}
