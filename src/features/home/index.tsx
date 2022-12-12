import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './style.module.scss';

export function Home() {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(({ data }) => setPost(data));
  }, []);

  const createPost = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Hello World!',
        body: 'This is a new post.',
      })
      .then((response) => {
        setPost(response.data);
      });
  };

  if (post === null) return <></>;
  return (
    <>
      <div className={styles.container}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={createPost}>Create Post</button>
      </div>
    </>
  );
}
