import makeCounter from "../utils/make-counter";
import makeDisplay from "../utils/make-display";

/**
 * @param {HTMLElement[]} buttons
 * @param {function} action
 */
const addButtons = (buttons, action) => {
  if (buttons.length > 0) {
    buttons.forEach(bttn => {
      bttn.addEventListener("click", () => {
        action();
      });
    });
  }
};

/**
 * @param {HTMLElement[]} displays
 */
const addDisplays = (displays, counter) => {
  const arr = [];
  if (displays.length > 0) {
    displays.forEach(display => {
      const d = makeDisplay(display);
      arr.push(d);
      counter.addObserver(d);
    });
    counter.notify();
  }
  return arr;
};

/**
 * @param {String | Number} id
 * @param {Boolean} isPersistent
 */
const Counter = (id = null, isPersistent = true) => {
  const counter = makeCounter(id, isPersistent);
  let displays = document.querySelectorAll(`[data-counter-id="${id}"][data-counter-type=display]`);
  const addBttns = document.querySelectorAll(`[data-counter-id="${id}"][data-counter-type=up]`);
  const subBttns = document.querySelectorAll(`[data-counter-id="${id}"][data-counter-type=down]`);
  const resetBttns = document.querySelectorAll(`[data-counter-id="${id}"][data-counter-type=reset]`);

  addButtons(addBttns, counter.up);
  addButtons(subBttns, counter.down);
  addButtons(resetBttns, counter.reset);

  displays = addDisplays(displays, counter);

  return {
    addButtons: addBttns,
    subtractButtons: subBttns,
    resetButtons: resetBttns,
    displays: displays,
    notify: counter.notify,
    addObserver: counter.addObserver,
    removeObserver: counter.removeObserver,
  };
};

export default Counter;
