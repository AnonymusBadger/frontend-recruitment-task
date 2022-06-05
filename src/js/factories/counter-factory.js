import makeCounter from "../utils/make-counter";
import makeDisplay from "../utils/make-display";

/**
 * @param {String | Number} id
 * @param {Boolean} isPersistent
 */
const Counter = (id = null, isPersistent = true) => {
  const counter = makeCounter(id, isPersistent);
  let display = document.querySelector(`[data-counter-id="${id}"][data-counter-type=display]`);
  const addBttn = document.querySelector(`[data-counter-id="${id}"][data-counter-type=up]`);
  const subBttn = document.querySelector(`[data-counter-id="${id}"][data-counter-type=down]`);
  const resetBttn = document.querySelector(`[data-counter-id="${id}"][data-counter-type=reset]`);


  if (addBttn) {
    addBttn.addEventListener("click", () => {
      counter.up();
    });
  }

  if (subBttn) {
    subBttn.addEventListener("click", () => {
      counter.down();
    });
  }

  if (resetBttn) {
    resetBttn.addEventListener("click", () => {
      counter.reset();
    });
  }

  if (display) {
    display = makeDisplay(display);
    counter.addObserver(display);
    counter.notify();
  }

  return {
    addButton: addBttn,
    subtractButton: subBttn,
    resetButton: resetBttn,
    notify: counter.notify,
    addObserver: counter.addObserver,
    removeObserver: counter.removeObserver,
  };
};

export default Counter;
