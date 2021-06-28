const LoginPage = require("../pageobjects/login.page");

describe("Logging in with credentials", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
  });
  // it("Should select product container", () => {

  //
});
