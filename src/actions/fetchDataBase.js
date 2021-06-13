import axios from "axios";
const fetchData = axios.create({
  baseURL: "https://reduxblog.herokuapp.com",
  params: {
    key: "dominik12345",
  },
});
export default fetchData;
