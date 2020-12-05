import React from "react";

const Blog = ({ match }) => {
  return (
  <div>
    <h1>Blog</h1>
    Year: { match.params.year} , Month: { match.params.month }
  </div>
  );
};

export default Blog;
