function validateEmail(email) {
  //email must end with vitstudent.ac.in
  if (email.endsWith("@vitstudent.ac.in")) {
    return true;
  } else {
    return false;
  }
}

export default validateEmail;
