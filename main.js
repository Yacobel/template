function togglesubmeun(button) {
  button.nextElementSibling.classList.toggle("show");

  
}
function togglesubmeun(button) {
    const submenu = button.nextElementSibling;
    submenu.classList.toggle("show");

    button.classList.toggle("active");

    const icon = button.querySelector(".dropdown-icon");
    if (icon) {
      icon.classList.toggle("rotate");
    }

    const parent = button.closest("li");
    const siblings = parent.parentElement.children;
    Array.from(siblings).forEach((sibling) => {
      if (sibling !== parent) {
        const siblingSubmenu = sibling.querySelector(".sub-menu");
        const siblingButton = sibling.querySelector(".dropdown-btn");
        const siblingIcon = siblingButton?.querySelector(".dropdown-icon");

        if (siblingSubmenu) {
          siblingSubmenu.classList.remove("show");
        }
        if (siblingButton) {
          siblingButton.classList.remove("active");
        }
        if (siblingIcon) {
          siblingIcon.classList.remove("rotate");
        }
      }
    });
  }