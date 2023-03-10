// All Elements used in the code below
let plan1 = document.querySelector(".plan1");
let plan2 = document.querySelector(".plan2");
let plan3 = document.querySelector(".plan3");
let plans = document.querySelectorAll(".plan-card-wrapper");
let yearlyPlan = false;
let selectedPlan;

let nameInp = document.querySelector(".name-input");
let emailInp = document.querySelector(".email-input");
let phoneInp = document.querySelector(".phone-input");

let validation = document.querySelector(".validation");
let planValidation = document.querySelector(".plan-validation");
let circle = document.querySelector(".circle");

let checkbox = document.querySelector(".checkbox");

let services = document.querySelectorAll(".service-price");
let selectedServices = [];
let service1 = document.querySelector(".service1");
let service2 = document.querySelector(".service2");
let service3 = document.querySelector(".service3");

let summaryPlan = document.querySelector(".summary-plan-title");
let summaryPlanPrice = document.querySelector(".summary-plan-price");
let summaryTotalPrice = document.querySelector(".total-price");

let totalPrice = 0;
// Function responsible for going to the next step
function nextStep(elem) {
  if (checkInput(elem)) {
    clearError();
    switch (elem.dataset.step) {
      case "1":
        elem.parentNode.parentNode.classList.add("hidden");
        elem.parentNode.parentNode.nextElementSibling.classList.remove(
          "hidden"
        );
        document
          .querySelector('[data-step="1"]')
          .classList.remove("current-step");
        document.querySelector('[data-step="2"]').classList.add("current-step");
        break;
      case "2":
        selectedPlan = plan1.classList.contains("blue-border")
          ? plan1
          : plan2.classList.contains("blue-border")
          ? plan2
          : plan3.classList.contains("blue-border")
          ? plan3
          : false;
        if (selectedPlan) {
          planValidation.classList.add("hidden");
          elem.parentNode.parentNode.classList.add("hidden");
          elem.parentNode.parentNode.nextElementSibling.classList.remove(
            "hidden"
          );
          document
            .querySelector('[data-step="2"]')
            .classList.remove("current-step");
          document
            .querySelector('[data-step="3"]')
            .classList.add("current-step");

          // Change price to yearly for next step (Addons)
          if (yearlyPlan) {
            services[0].textContent = "+$10/yr";
            services[1].textContent = "+$20/yr";
            services[2].textContent = "+$20/yr";
          } else {
            services[0].textContent = "+$1/mo";
            services[1].textContent = "+$2/mo";
            services[2].textContent = "+$2/mo";
          }
        } else {
          planValidation.textContent = "Must select a plan";
          planValidation.classList.remove("hidden");
          planValidation.classList.add("validation");
        }
        break;
      case "3":
        elem.parentNode.parentNode.classList.add("hidden");
        elem.parentNode.parentNode.nextElementSibling.classList.remove(
          "hidden"
        );
        document
          .querySelector('[data-step="3"]')
          .classList.remove("current-step");
        document.querySelector('[data-step="4"]').classList.add("current-step");

        summaryPlan.textContent =
          selectedPlan.children[1].children[0].textContent +
          (yearlyPlan ? " (Yearly)" : " (Monthly)");
        summaryPlanPrice.textContent =
          selectedPlan.children[1].children[1].textContent;

        if (!yearlyPlan) {
          switch (selectedPlan) {
            case plan1:
              totalPrice = 9;
              break;
            case plan2:
              totalPrice = 12;
              break;
            case plan3:
              totalPrice = 15;
              break;
            default:
              break;
          }
        } else {
          switch (selectedPlan) {
            case plan1:
              totalPrice = 90;
              break;
            case plan2:
              totalPrice = 120;
              break;
            case plan3:
              totalPrice = 150;
              break;
            default:
              break;
          }
        }
        let summaryServices = document.querySelector(".summary-services");
        summaryServices.replaceChildren();
        if (selectedServices.length > 0) {
          selectedServices.forEach((elem) => {
            let divServ = document.createElement("div");
            divServ.classList.add("serv");
            let h4Serv = document.createElement("h4");
            let h4Content = document.createTextNode(
              elem.children[1].children[0].textContent
            );
            h4Serv.appendChild(h4Content);
            let pServ = document.createElement("p");
            let pContent = document.createTextNode(
              elem.children[2].textContent
            );
            pServ.classList.add("serv-price");
            pServ.appendChild(pContent);
            divServ.appendChild(h4Serv);
            divServ.append(pServ);
            summaryServices.appendChild(divServ);
            if (!yearlyPlan) {
              switch (elem) {
                case service1:
                  totalPrice += 1;
                  summaryTotalPrice.textContent = `$${totalPrice}/mo`;
                  break;
                case service2:
                  totalPrice += 2;
                  summaryTotalPrice.textContent = `$${totalPrice}/mo`;
                  break;
                case service3:
                  totalPrice += 2;
                  summaryTotalPrice.textContent = `$${totalPrice}/mo`;
                  break;
                default:
                  break;
              }
            } else {
              switch (elem) {
                case service1:
                  totalPrice += 10;
                  summaryTotalPrice.textContent = `$${totalPrice}/yr`;
                  break;
                case service2:
                  totalPrice += 20;
                  summaryTotalPrice.textContent = `$${totalPrice}/yr`;
                  break;
                case service3:
                  totalPrice += 20;
                  summaryTotalPrice.textContent = `$${totalPrice}/yr`;
                  break;
                default:
                  break;
              }
            }
          });
        } else {
          if (!yearlyPlan) {
            summaryTotalPrice.textContent = `$${totalPrice}/mo`;
          } else {
            summaryTotalPrice.textContent = `$${totalPrice}/yr`;
          }
        }

        break;
      case "4":
        elem.parentNode.parentNode.classList.add("hidden");
        elem.parentNode.parentNode.nextElementSibling.classList.remove(
          "hidden"
        );

        break;
      default:
        break;
    }
  }
}
// Function responsible for going back to the previous step
function backStep(elem) {
  switch (elem.dataset.back) {
    case "2":
      elem.parentNode.parentNode.classList.add("hidden");
      elem.parentNode.parentNode.previousElementSibling.classList.remove(
        "hidden"
      );
      document
        .querySelector('[data-step="2"]')
        .classList.remove("current-step");
      document.querySelector('[data-step="1"]').classList.add("current-step");
      break;
    case "3":
      elem.parentNode.parentNode.classList.add("hidden");
      elem.parentNode.parentNode.previousElementSibling.classList.remove(
        "hidden"
      );
      document
        .querySelector('[data-step="3"]')
        .classList.remove("current-step");
      document.querySelector('[data-step="2"]').classList.add("current-step");
      break;
    case "4":
      elem.parentNode.parentNode.classList.add("hidden");
      elem.parentNode.parentNode.previousElementSibling.classList.remove(
        "hidden"
      );
      document
        .querySelector('[data-step="4"]')
        .classList.remove("current-step");
      document.querySelector('[data-step="3"]').classList.add("current-step");
      break;
    default:
      break;
  }
}
// Function for regex
function checkInput() {
  // Regex provided by chatGPT (I added this comment to let you know in case you need any regex)
  // Just go and get it from chatgpt
  let regexName = /^[A-Za-z]+$/;
  let regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  let regexPhone = /^\+[1-9]{1}[0-9]{1,14}$/;
  if (!regexName.test(nameInp.value)) {
    validation.textContent = "Name must be letters only";
    validation.classList.remove("hidden");
    return 0;
  }
  if (!regexEmail.test(emailInp.value)) {
    validation.textContent = "Wrong email format";
    validation.classList.remove("hidden");
    return 0;
  }
  if (!regexPhone.test(phoneInp.value)) {
    validation.textContent =
      "Wrong phone, must be numerical, with country code";
    validation.classList.remove("hidden");
    return 0;
  }
  return 1;
}

// Function responsible for clearing errors
function clearError() {
  validation.classList.add("hidden");
}

// Function responsible for changing circle (Left: Month plan, right: Year plan)
function changePlan() {
  // Changing from Monthly to Yearly Plan
  if (circle.classList.contains("circle-left")) {
    yearlyPlan = true;
    circle.classList.remove("circle-left");
    circle.classList.add("circle-right");
    plan1.children[1].children[1].textContent = "$90/yr";
    plan2.children[1].children[1].textContent = "$120/yr";
    plan3.children[1].children[1].textContent = "$150/yr";
    plans.forEach((elem) => {
      let node = document.createElement("p");
      let textNode = document.createTextNode("2 months free");
      node.appendChild(textNode);
      node.classList.add("months-free");
      elem.appendChild(node);
    });
  } // Changing from Yearly to Monthly Plan
  else if (circle.classList.contains("circle-right")) {
    yearlyPlan = false;
    circle.classList.remove("circle-right");
    circle.classList.add("circle-left");
    plan1.children[1].children[1].textContent = "$9/mo";
    plan2.children[1].children[1].textContent = "$12/mo";
    plan3.children[1].children[1].textContent = "$15/mo";
    plans.forEach((elem) => {
      elem.removeChild(elem.lastChild);
    });
  }
}

// Function responsible for selecting plan
function selectPlan(elem) {
  elem.classList.toggle("blue-border");
  if (elem != plan1 && plan1.classList.contains("blue-border")) {
    plan1.classList.remove("blue-border");
  }
  if (elem != plan2 && plan2.classList.contains("blue-border")) {
    plan2.classList.remove("blue-border");
  }
  if (elem != plan3 && plan3.classList.contains("blue-border")) {
    plan3.classList.remove("blue-border");
  }
}

// Function responsible for selecting service
function addService(elem) {
  if (elem.hasChildNodes()) {
    if (elem.children[0].checked == false) {
      elem.children[0].checked = true;
      selectedServices.push(elem);
    } else {
      elem.children[0].checked = false;
      selectedServices = selectedServices.filter((data) => {
        if (data != elem) return data;
      });
    }
  } else {
    if (elem.checked == false) {
      elem.checked = true;
      selectedServices.push(elem.parentNode);
    } else {
      elem.checked = false;
      selectedServices = selectedServices.filter((data) => {
        if (data != elem.parentNode) return data;
      });
    }
  }
}

// Function responsible for editing plan from summary page
function editPlan(elem) {
  elem.parentNode.parentNode.parentNode.parentNode.classList.add("hidden");
  elem.parentNode.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.classList.remove(
    "hidden"
  );
  document.querySelector('[data-step="4"]').classList.remove("current-step");
  document.querySelector('[data-step="2"]').classList.add("current-step");
}
