import axios from "axios";

const url = "https://ieee-registrations-page-backend.vercel.app/";

export function checkEmail(email, callback, errorcallback) {
  axios
    .post(url + "check_user", {
      email: email,
    })
    .then((response) => {
      console.log("Success");
      callback(response.data);
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        errorcallback("Not Found");
      } else if (error.response && error.response.status === 500) {
        errorcallback("Server Error");
      } else {
        console.error(error);
        errorcallback("An error occurred");
      }
    });
}
