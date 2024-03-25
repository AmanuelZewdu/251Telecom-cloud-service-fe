import axios from "axios";
const API_UR_VMS =
  "https://two51telecom-backend.onrender.com/api/vm-settings/instance-types";
const API_UR_IMAGES =
  "https://two51telecom-backend.onrender.com/api/vm-settings/machine-images";

const getInstanceType = async () => {
  return axios
    .get(API_UR_VMS)
    .then((response) => {
      if (response) {
        // console.log("Instance types==", response.data);
        return response.data;
      }
    })
    .catch((err) => {
      console.log("can't fetch instances");
    });
};

const getMachineImages = async () => {
  return axios.get(API_UR_IMAGES).then((response) => {
    if (response) {
      // console.log("IMAGES LIST = ", response.data);
      return response.data;
    }
  });
};

const services = {
  getInstanceType,
  getMachineImages,
};
export default services;
