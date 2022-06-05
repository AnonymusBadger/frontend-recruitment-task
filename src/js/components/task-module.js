import Counter from "../factories/counter-factory";
import makeObserver from "../utils/make-observer";

document.addEventListener("DOMContentLoaded", () => {
  const modules = document.querySelectorAll(".task-module");

  modules.forEach(module => {
    const id = module.getAttribute("data-counter-id");
    const counter = Counter(id);

    const countObserver = makeObserver(count => {
      const toggleReset = () => {
        if (count > 5) {
          counter.resetButton.classList.remove("d-none");
        } else {
          counter.resetButton.classList.add("d-none");
        }
      };
      setTimeout(toggleReset, 200);
    });

    counter.addObserver(countObserver);
    counter.notify();
  });
});
