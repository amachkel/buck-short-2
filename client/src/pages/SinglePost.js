import React from 'react';
import BlogPost from '../components/BlogPost';

export default function SinglePost(data) {
  return (
    <>
      <BlogPost data={data} />
    </>
  );
}
