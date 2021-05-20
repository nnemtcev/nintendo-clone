function addClickHandlerToDropdownButtons() {
  const dropdownButtons = document.getElementsByClassName("dropdown-btn");
  for (let i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].addEventListener("click", function () {
      const dropdownContent = dropdownButtons[i].nextElementSibling;
      dropdownContent.classList.toggle("show");
    });
  }
}

addClickHandlerToDropdownButtons();
