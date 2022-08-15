import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Project home</h1>
      <Link to={'./posts'}>
        <button>My Posts</button>
      </Link>
    </div>
  );
}
