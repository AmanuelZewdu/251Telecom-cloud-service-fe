import axios from "axios";
const API_URL_VMS =
  "https://two51telecom-backend.onrender.com/api/vm-settings/instance-types";
const API_URL_IMAGES =
  "https://two51telecom-backend.onrender.com/api/vm-settings/machine-images";
const API_URL_SIGN_UP =
  "https://two51telecom-backend.onrender.com/api/auth/signup";
const API_URL_CREATE_ORDER =
  "https://two51telecom-backend.onrender.com/api/order/";
const API_URL_LOGIN =
  "https://two51telecom-backend.onrender.com/api/auth/signin";

const getInstanceType = async () => {
  return axios
    .get(API_URL_VMS)
    .then((response) => {
      if (response) {
        // console.log("Instance types==", response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log("can't fetch instances");
      throw error;
    });
};

const getMachineImages = async () => {
  return axios.get(API_URL_IMAGES).then((response) => {
    if (response) {
      // console.log("IMAGES LIST = ", response.data);
      return response.data;
    }
  });
};

const postSignUp = async (userDetail) => {
  return axios
    .post(API_URL_SIGN_UP, userDetail)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("can't create user");
    });
};

const postCreateOrder = async (orderDetail, access_token) => {
  return axios
    .post(API_URL_CREATE_ORDER, orderDetail, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("can't create order");
    });
};

const postLogin = async (userCredential) => {
  try {
    const response = await axios.post(API_URL_LOGIN, userCredential);
    return { data: response.data, statusCode: response.status };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data, statusCode: error.response.status };
    } else {
      throw new Error("Network error occurred.");
    }
  }
};

const services = {
  getInstanceType,
  getMachineImages,
  postSignUp,
  postCreateOrder,
  postLogin,
};
export default services;
