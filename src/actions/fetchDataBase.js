import axios from "axios";
const fetchData = axios.create({
  baseURL: "http://reduxblog.herokuapp.com",
  params: {
    key: "dominik12345",
  },
});
export default fetchData;
