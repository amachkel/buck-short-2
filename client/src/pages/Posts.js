import React from 'react';
import { useFetch } from '../utils/hooks';

export default function Posts() {
  const [data] = useFetch('http://localhost:3000/api/posts');
  return (
    <div>
      <h1>List from server{'\n'}</h1>
      {data.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
