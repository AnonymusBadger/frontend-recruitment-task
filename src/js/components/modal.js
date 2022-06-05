/**
 * @param {HTMLElement} el
*/
const makeModal = (el) => {
  const trigger = document.querySelector(`[data-target="#${el.id}"]`);
  const closeBttns = el.querySelectorAll("[data-dismiss=modal]");
  const content = el.querySelector(".modal__content");

  /**
   * @param {Event} event
   */
  const clickOutside = (event) => {
    if (!content.contains(event.target)) hide();
  };

  const show = () => {
    el.style.display = "block";
    setTimeout(() => {
      el.classList.add("show");
    }, 150);
    document.body.classList.add("stop-scroll");
    document.addEventListener("click", clickOutside);
    el.focus();
  };

  const hide = () => {
    el.classList.remove("show");
    setTimeout(() => {
      el.style.display = "none";
    }, 150);
    document.body.classList.remove("stop-scroll");
    document.removeEventListener("click", clickOutside);
    trigger.focus();
  };

  const toggle = () => {
    if (el.classList.contains("show")) {
      hide();
    } else {
      show();
    }
  };

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    show();
  });

  closeBttns.forEach(bttn => {
    bttn.addEventListener("click", () => {
      hide();
    });
  });

  return {
    show: show,
    hide: hide,
    toggle: toggle,
    trigger: trigger,
    closeBttns: closeBttns,
  };
};


// auto mount
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");

  modals.forEach(m => {
    makeModal(m);
  });
});
