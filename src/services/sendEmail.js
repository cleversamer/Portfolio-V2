const sendEmail = (data) => {
  const URL = `https://public.herotofu.com/v1/${process.env["REACT_APP_HEROTOFU_API_KEY"]}`;
  const body = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(URL, body)
    .then(() => {})
    .catch(() => {});
};

export default sendEmail;
