import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { createPost } from "../../actions/actionCreator";
import classes from "./newPost.module.css";

const NewPost = (props) => {
  const renderField = (field) => {
    const errorAppeard =
      field.meta.error && field.meta.touched
        ? { border: "1px solid red" }
        : null;
    return (
      <div className={classes.titleForm}>
        <label>
          {field.fieldTitle}
          <input
            className='title-form__input'
            style={errorAppeard}
            type='text'
            {...field.input}
            autoComplete='off'
          />
        </label>
        <div style={{ color: "red" }}>
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  };
  const renderTextArea = (field) => {
    const errorAppeard =
      field.meta.error && field.meta.touched
        ? { border: "1px solid red" }
        : null;
    return (
      <div className={classes.titleForm}>
        <label>
          {field.fieldTitle}
          <textarea
            style={errorAppeard}
            className='title-form__area'
            type='text'
            {...field.input}
            autoComplete='off'
          />
        </label>
        <div style={{ color: "red" }}>
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  };
  const clearAllInputs = (values) => {
    values.title = "";
    values.categories = "";
    values.content = "";
  };
  const onFormSubmit = (values) => {
    props.createPost(values, () => {
      props.history.push("/");
    });
    clearAllInputs(values);
  };
  const { handleSubmit } = props;
  return (
    <div className={classes.newPostContainer}>
      <h1 className={classes.newPostTitle}>Create new post !</h1>
      <form
        className={classes.formToSubmit}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Field fieldTitle='Title' name='title' component={renderField} />
        <Field
          fieldTitle='Categories'
          name='categories'
          component={renderField}
        />
        <Field
          fieldTitle='Post Content'
          name='content'
          component={renderTextArea}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
const validate = (values) => {
  const error = {};

  if (!values.title || values.title.length < 3) {
    error.title = "Enter a title, it must have at least 3 characters";
  }
  if (!values.categories) {
    error.categories = "Enter a category name";
  }
  if (!values.content) {
    error.content = "Enter a post summary";
  }

  return error;
};

export default reduxForm({ validate, form: "Post Adding" })(
  connect(null, { createPost })(NewPost)
);
