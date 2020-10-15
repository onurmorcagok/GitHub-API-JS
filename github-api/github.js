class GitHub {
  
    constructor() {
    this.baseURL = "https://api.github.com/users/";
  }

  async getGithubData(username) {

    const responseUser = await fetch(this.baseURL + username);
    const responseRepo = await fetch(this.baseURL + username + "/repos");

    const userData = await responseUser.json();
    const repoData = await responseRepo.json();

    return {
      user: userData,
      repo: repoData,
    };

  }
}
