// Function responsible for going to the next step
function nextStep(elem) {
  switch (elem.dataset.step) {
    case "1":
      elem.parentNode.classList.add("hidden");
      elem.parentNode.nextElementSibling.classList.remove("hidden");
      document
        .querySelector('[data-step="1"]')
        .classList.remove("current-step");
      document.querySelector('[data-step="2"]').classList.add("current-step");
      break;
    case "2":
      elem.parentNode.classList.add("hidden");
      elem.parentNode.nextElementSibling.classList.remove("hidden");
      document
        .querySelector('[data-step="2"]')
        .classList.remove("current-step");
      document.querySelector('[data-step="3"]').classList.add("current-step");
      break;
    case "3":
      elem.parentNode.classList.add("hidden");
      elem.parentNode.nextElementSibling.classList.remove("hidden");
      document
        .querySelector('[data-step="3"]')
        .classList.remove("current-step");
      document.querySelector('[data-step="4"]').classList.add("current-step");
      break;
    case "4":
      elem.parentNode.classList.add("hidden");
      elem.parentNode.nextElementSibling.classList.remove("hidden");
      document
        .querySelector('[data-step="4"]')
        .classList.remove("current-step");
      break;
    default:
      break;
  }
}
// Function responsible for going back to the previous step
function backStep(elem) {
  switch (elem.dataset.back) {
    case "2":
      elem.parentNode.classList.add("hidden");
      elem.parentNode.previousElementSibling.classList.remove("hidden");
      document
        .querySelector('[data-step="2"]')
        .classList.remove("current-step");
      document.querySelector('[data-step="1"]').classList.add("current-step");
      break;
    case "3":
      elem.parentNode.classList.add("hidden");
      elem.parentNode.previousElementSibling.classList.remove("hidden");
      document
        .querySelector('[data-step="3"]')
        .classList.remove("current-step");
      document.querySelector('[data-step="2"]').classList.add("current-step");
      break;
    case "4":
      elem.parentNode.classList.add("hidden");
      elem.parentNode.previousElementSibling.classList.remove("hidden");
      document
        .querySelector('[data-step="4"]')
        .classList.remove("current-step");
      document.querySelector('[data-step="3"]').classList.add("current-step");
      break;
    default:
      break;
  }
}
