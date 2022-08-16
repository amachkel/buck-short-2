import React from 'react';
import BlogPost from '../components/BlogPost';
import { useFetch } from '../utils/hooks';
export default function Blog() {
  const [data] = useFetch('http://localhost:3001/api/posts');
  console.log(data);
  return (
    <div>
      <h1>A Buck Short Blog</h1>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <BlogPost data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
