import React from 'react';
import { useFetch } from '../utils/hooks';

export default function Posts() {
  const [data] = useFetch('http://localhost:3001/api/posts');
  console.log(data);
  return (
    <div>
      <h1>List from server{'\n'}</h1>
      <ul>
        {' '}
        {data.map((item) => {
          return <li key={data.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
