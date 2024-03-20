import axios from "axios";
const API_UR_VMS =
  "https://two51telecom-backend.onrender.com/api/vm-settings/instance-types";

const getInstanceType = async () => {
  return axios
    .get(API_UR_VMS)
    .then((response) => {
      if (response) {
        console.log("Instance types==", response.data);
        return response.data;
      }
    })
    .catch((err) => {
      console.log("can't fetch instances");
    });
};
const services = {
  getInstanceType,
};
export default services;
