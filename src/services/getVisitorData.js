import axios from "axios";

const getVisitorData = (callBack) => {
  axios
    .get("https://geolocation-db.com/json/")
    .then((res) => {
      callBack(res);
    })
    .catch(() => {});
};

export default getVisitorData;
