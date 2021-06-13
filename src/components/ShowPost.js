import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/actionCreator";
import "./posts.css";

const ShowPost = (props) => {
  useEffect(() => {
    props.fetchPost(props.match.params.id);
  }, [props]);
  setTimeout(() => {}, 100);
  if (!props.post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='delete-section-container'>
      <div className='single-post-info-container'>
        <h1>Single Post Info</h1>
        <h3>
          Post title: <span>{props.post.title}</span>
        </h3>
        <h6>
          Categories: <span>{props.post.categories}</span>
        </h6>
        <p>
          Content:
          <br />
          <span>{props.post.content}</span>
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = ({ singlePost }) => {
  return { post: singlePost };
};
export default connect(mapStateToProps, { fetchPost })(ShowPost);
