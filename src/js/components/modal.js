/**
 * @param {HTMLElement} el
*/
const makeModal = (el) => {
  const trigger = document.querySelector(`[data-target="#${el.id}"]`);
  const closeBttn = el.querySelector(".modal__close-btn");
  const content = el.querySelector(".modal__content");

  /**
   * @param {Event} event
   */
  const clickOutside = (event) => {
    if (!content.contains(event.target)) hide();
  };

  const show = () => {
    el.style.display = "block";
    document.addEventListener("click", clickOutside);
    el.focus();
  };

  const hide = () => {
    el.style.display = "none";
    document.removeEventListener("click", clickOutside);
    trigger.focus();
  };

  const toggle = () => {
    if (el.offsetWidth > 0 && el.offsetHeight > 0) {
      hide();
    } else {
      show();
    }
  };

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    show();
  });

  closeBttn.addEventListener("click", () => {
    hide();
  });

  return {
    show: show,
    hide: hide,
    toggle: toggle,
    trigger: trigger,
    closeBttn: closeBttn,
  };
};


document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");

  modals.forEach(m => {
    makeModal(m);
  });
});
