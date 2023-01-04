import axios from "axios";

axios.interceptors.request.use(function (config) {
  // Here we can add any additional info/headers to the data or headers
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {

  // Here before getting the response can add check headers for user authentication
  return response.data;
}, function (error) {
  // Do something with response error
  // Here if request fails can add notification
  return Promise.reject(error);
});