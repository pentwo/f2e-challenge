const END_POINT = "https://www.thef2e.com/api";

const checkSignUpBtn = document.getElementById("btn-submit");
const checkSignUpTotalBtn = document.getElementById("btn-signuptotal");
const cancelBtn = document.getElementById("btn-cancel");
const modalDiv = document.getElementById("modal");
const emailValidation = document.getElementById("email-valid");

document.querySelector(".modal-close").addEventListener("click", () => {
  modalDiv.classList.remove("is-active");
});
document.querySelector(".modal-background").addEventListener("click", () => {
  modalDiv.classList.remove("is-active");
});

checkSignUpBtn.addEventListener("click", e => {
  e.preventDefault();
  checkSignUpBtn.classList.add("is-loading");
  checkSignUpFunc();
});
checkSignUpTotalBtn.addEventListener("click", e => {
  console.log(document.getElementById("input-email"));
  e.preventDefault();
  checkSignUpTotalBtn.classList.add("is-loading");
  checkSignUpTotalFunc();
});

cancelBtn.addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("input-email").value = "";
});

document.getElementById("input-email").addEventListener("blur", e => {
  console.table(e.target.validity);
  if (!e.target.validity.valid) {
    e.target.classList.add("is-danger");
    // emailValidation.classList.remove('is-invisible')
    toggleEmailValidText(false);
  } else if (e.target.value === "") {
  } else if (e.target.value !== "" && e.target.validity.valid) {
    console.log(e.target.value);
    e.target.classList.remove("is-danger");
    e.target.classList.add("is-success");

    // emailValidation.classList.add('is-invisible')
    toggleEmailValidText(true);
  }
});

function toggleEmailValidText(bool) {
  emailValidation.classList.remove("is-invisible");
  if (bool) {
    emailValidation.classList.add("is-success");
    emailValidation.classList.remove("is-danger");
    emailValidation.innerHTML = `
		<span class="icon is-small">
			<i class="fas fa-check"></i>
		</span>
		This email is valid.
		`;
  } else {
    emailValidation.classList.add("is-danger");
    emailValidation.classList.remove("is-success");
    emailValidation.innerHTML = `
		<span class="icon is-small">
			<i class="fas fa-times"></i>
		</span>
		This email is invalid.
		`;
  }
}

function checkSignUpTotalFunc() {
  fetch(`${END_POINT}/signUpTotal`, { method: "get" })
    .then(result => result.json())
    .then(data => {
      checkSignUpTotalBtn.classList.remove("is-loading");
      const message = `
			There are
			<strong class="has-text-success">${data.total}</strong>
			people sign-up for F2E Challenge`;
      handleModalDisplay(message);
    });
}

function checkSignUpFunc() {
  const inputEle = document.getElementById("input-email");
  const userInput = inputEle.value;
  if (!userInput || inputEle.validity.typeMismatch) {
    checkSignUpBtn.classList.remove("is-loading");
    inputEle.classList.add("is-danger");
    return;
  }
  fetch(`${END_POINT}/isSignUp`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    CORS: true,
    body: JSON.stringify({
      email: userInput
    })
  })
    .then(result => result.json())
    .then(data => {
      checkSignUpBtn.classList.remove("is-loading");
      console.log(document.getElementById("input-email"));

      const regoDate = moment(data.timeStamp).format("YYYY-MM-DD");
      const timeFromNow = moment(data.timeStamp).fromNow();

      const message =
        data.success === true
          ? `
			<h1 class="has-text-success title">Success</h1>
			<p>E-mail is <strong>${userInput}</strong>.<p>
			<p><strong>${
        data.nickName
      }</strong> is signed up for F2E Challenge ${timeFromNow} (${regoDate}).</p>

		`
          : `
			<h1 class="has-text-danger title">Query Error</h1>
			<p>E-mail is <strong>${userInput}</strong>.<p>
			<p>This E-mail isn't signed up for F2E Challenge</p>
		`;
      handleModalDisplay(message);
    });
}

function handleModalDisplay(content) {
  modalDiv.classList.add("is-active");
  document.getElementById("queryResult").innerHTML = content;
}

function calculateTime() {
  const { days, hours, minutes, seconds, milliseconds } = moment.duration(
    moment("2018-06-04 12:00+08").diff(moment())
  )._data;
  let html = "";
  if (seconds < 0 || minutes < 0) {
    html = `Challenge already started.`;
  } else {
    html = `${days} Days and ${hours}:${minutes}:${seconds}`;
  }
  console.log("html: ", html);
  document.getElementById("countdown").innerHTML = html;
  // console.log("timeLeft: ", timeLeft._data);
}

setInterval(() => {
  calculateTime();
}, 1000);
