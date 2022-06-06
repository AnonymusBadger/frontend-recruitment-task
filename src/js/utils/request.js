/**
 * @param {Object} params
 * @param {String} params.url
 * @param {Function} params.success
 * @param {Function} params.error
 * */
const request = (params) => {
  const url = params["url"];
  const successCallback = params["success"];
  const errorCallback = params["error"];

  fetch(params["url"])
    .then(res => {
      if (!res.ok) {
        throw new Error(`Network response from ${url} returned code: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      successCallback(data);
      return data;
    })
    .catch(error => {
      errorCallback(error);
    });
};

export default request;
