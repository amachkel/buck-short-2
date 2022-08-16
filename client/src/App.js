import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
