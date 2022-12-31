import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Here we can add any additional info/headers to the data or headers
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // Here before getting the response can add check headers for user authentication
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // Here if request fails can add notification
    return Promise.reject(error);
});