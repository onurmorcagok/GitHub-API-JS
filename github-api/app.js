const githubForm = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const clearLastUsers = document.querySelector("#clear-last-users");

const lastUsers = document.querySelector("#last-users");

const gitHub = new GitHub();
const ui = new UI();

eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);

  document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(event) {
  let username = nameInput.value.trim();

  if (username === "") {
    alert("Lütfen geçerli bir kullanıcı adı giriniz!");
  } else {
    gitHub
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
          ui.showError("Kullanıcı bulunamadı.");
        } else {
          ui.showUserInfos(response.user);
          ui.showRepoInfo(response.repo);
        }
      })
      .catch((error) => ui.showError(error));
  }

  ui.clearInput();
  event.preventDefault();
}

function clearAllSearched() {}

function getAllSearched() {}
