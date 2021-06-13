import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ id, title, content }) => {
  return (
    <li className='posts-lists__item'>
      <h3 className='posts-lists__title'>{title}</h3>
      <p id='post-content'>{content}</p>
      <Link to={`/posts/${id}`}> More info </Link>
    </li>
  );
};

export default SinglePost;
