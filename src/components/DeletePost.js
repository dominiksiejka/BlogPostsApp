import React from "react";
import { connect } from "react-redux";
import "./posts.css";
import { deletePost } from "../actions/actionCreator";
let lastPost;
const DeletePost = (props) => {
  if (!props.singlePost) {
    return (
      <div className='delete-section-container'>
        <p>You need first to pick up a post</p>
      </div>
    );
  } else if (lastPost === props.singlePost.id) {
    return (
      <div className='delete-section-container'>
        <p>pick different post, last already deleted</p>
      </div>
    );
  }
  lastPost = props.singlePost.id;

  const handlePostDeletion = () => {
    props.deletePost(props.singlePost.id, () => {
      props.history.push("/");
    });
  };
  return (
    <div className='delete-section-container'>
      <div className='single-post-info-container'>
        <h1>Sigle post deletion</h1>
        <h3>
          Title of the post : " <span>{props.singlePost.title} </span>"
        </h3>
        <p>Are you sure you want to delete this post ?</p>
        <button className='delete-btn' onClick={handlePostDeletion}>
          Delete
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ singlePost }) => {
  return { singlePost };
};
export default connect(mapStateToProps, { deletePost })(DeletePost);
