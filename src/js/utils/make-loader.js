const makeLoader = () => {
  const loader = (() => {
    const l = document.createElement("div");

    l.classList.add("loader");
    l.innerHTML = "Loading...";

    return l;
  })();

  /** @param {HTMLElement} el */
  const add = (el) => {
    el.append(loader);
  };

  const remove = () => {
    loader.remove();
  };

  return {
    add: add,
    remove: remove,
  };
};

export default makeLoader;
