import request from "../utils/request";


const UserApi = (() => {
  const url = "https://jsonplaceholder.typicode.com/users";

  /**
   * @param {String} url
   * @param {Object} fn
   * @param {function=} fn.success
   * @param {function=} fn.error
   */
  const get = (_url, fn) => {
    const success = fn["success"];
    const error = fn["error"];

    request({
      url: _url,
      success: (data) => {
        if (typeof success == "function") success(data);
      },
      error: (err) => {
        if (typeof success == "function") error(err);
      },
    });
  };

  /**
   * @param {Object} fn
   * @param {function=} fn.success
   * @param {function=} fn.error
   */
  const getAll = (fn) => {
    get(url, fn);
  };

  /**
   * @param {Number} id
   * @param {Object} fn
   * @param {function=} fn.success
   * @param {function=} fn.error
   */
  const getById = (id, fn) => {
    get(`${url}/${id}`, fn);
  };

  return {
    getAll: getAll,
    getById: getById,
  };
})();

export default UserApi;
