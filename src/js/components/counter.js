import sessionManager from "./../utils/session-manager";

const makeCounter = () => {
  let count = sessionManager.getValue("count") || 0;

  const up = () => {
    count++;
    sessionManager.saveValue("count", count);
  };

  const down = () => {
    count--;
    sessionManager.saveValue("count", count);
  };

  const reset = () => {
    count = 0;
    sessionManager.saveValue("count", count);
  };

  return {
    up: up,
    down: down,
    reset: reset,
    get count() {
      return count;
    },
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const c = makeCounter();
  const btn = document.querySelector("[data-counter-type=up]");
  const reset = document.querySelector("[data-counter-type=reset]");
  const disp = document.querySelector("[data-counter-type=display]");

  btn.addEventListener("click", () => {
    c.up();
    disp.innerHTML = c.count;
  });

  reset.addEventListener("click", () => {
    c.reset();
    disp.innerHTML = c.count;
  });
});
