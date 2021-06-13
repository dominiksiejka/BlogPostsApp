import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getDataFromApi } from "../../actions/actionCreator";
import SinglePost from "./SinglePost";
import "./List.css";
const DeletePost = ({ getDataFromApi, blogs }) => {
  useEffect(() => {
    getDataFromApi();
  }, [getDataFromApi]);

  const render = blogs.map((post) => <SinglePost key={post.id} {...post} />);
  const isFetched = blogs.length !== 0 ? render : null;
  return (
    <div>
      <h1 className='list-title'>List of Posts: </h1>
      <ul className='posts-list'>{isFetched}</ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { blogs: state.blogs };
};
export default connect(mapStateToProps, { getDataFromApi })(DeletePost);
