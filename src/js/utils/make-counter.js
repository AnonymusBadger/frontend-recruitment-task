import sessionManager from "./../utils/session-manager";

/**
 * @param {Boolean=} isPersistent
 * @param {String | Number} id
 */
const makeCounter = (id = null, isPersistent = true) => {
  // if no ID data could be overriten
  if (id == null && isPersistent) throw new Error("Missing ID for Count data persistence! Set persistence to false or add ID");

  let count = isPersistent ? (sessionManager.getValue(`count-${id}`) || 0) : 0;
  const observers = [];


  // Observer logic
  const addObserver = (observer) => {
    observers.push(observer);
  };

  const removeObserver = (observer) => {
    const index = observers.indexOf(observer);
    if (index > -1) {
      observers.splice(index, 1);
    }
  };

  const notify = () => {
    observers.forEach(observer => {
      observer.notify(count);
    });
  };

  // Session logic
  const saveSession = () => {
    if (isPersistent) sessionManager.saveValue(`count-${id}`, count);
  };

  // Counter logic
  const up = () => {
    count++;
    notify();
    saveSession();
  };

  const down = () => {
    count--;
    notify();
    saveSession();
  };

  const reset = () => {
    count = 0;
    notify();
    saveSession();
  };

  return {
    up: up,
    down: down,
    reset: reset,
    addObserver: addObserver,
    removeObserver: removeObserver,
    notify: notify,
    get count() {
      return count;
    },
  };
};

export default makeCounter;
