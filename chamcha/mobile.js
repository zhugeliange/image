function sendToken(token) {
  if (token) {
    document.cookie = "token=" + token + "; path=/";
    window.localStorage.setItem("token", token);
    return token;
  } else {
    return "";
  }
}
