/**
 * @param {HTMLElement} el
*/
const makeModal = (el) => {
  const trigger = document.querySelector(`[data-target="#${el.id}"]`);
  const closeBttn = el.querySelector(".modal__close-btn");

  const show = () => {
    el.style.display = "block";
    el.focus();
  };

  const hide = () => {
    el.style.display = "none";
  };

  const toggle = () => {
    if (el.offsetWidth > 0 && el.offsetHeight > 0) {
      hide();
    } else {
      show();
    }
  };

  trigger.addEventListener("click", () => {
    show();
  });

  closeBttn.addEventListener("click", () => {
    hide();
    trigger.focus();
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
