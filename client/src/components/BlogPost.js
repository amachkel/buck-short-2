import React from 'react';

export default function BlogPost(item) {
  console.log(item.data);
  return (
    <div key={item.data.id}>
      {item.data.title}
      <br />
      {item.data.date_created}
    </div>
  );
}
