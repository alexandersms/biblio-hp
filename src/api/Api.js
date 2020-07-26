import axios from "axios";

const Api = axios.create({
  baseURL: "http://henri-potier.xebia.fr/"
});

export default Api;
