import fetchData from "./fetchDataBase";
export const FETCH_DATA = "FETCH_DATA";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

export const getDataFromApi = () => async (dispatch) => {
  const response = await fetchData.get("/api/posts");
  dispatch({ type: FETCH_DATA, payload: response.data });
};

export const createPost = (values, callback) => {
  const request = fetchData.post("/api/posts", values).then(() => callback());
  return {
    type: CREATE_POST,
    payload: request,
  };
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await fetchData.get(`/api/posts/${id}`);
  dispatch({ type: FETCH_POST, payload: response.data });
};

export const deletePost = (id, callback) => {
  fetchData.delete(`/api/posts/${id}`).then(() => callback());
  return { type: DELETE_POST, payload: id };
};
