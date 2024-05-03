import axios from "axios";
const API_URL_VMS = "https://api.cloud251.com/vm-settings/instance-types";
const API_URL_IMAGES = "https://api.cloud251.com/vm-settings/machine-images";
const API_URL_SIGN_UP = "https://api.cloud251.com/auth/signup";
const API_URL_CREATE_ORDER = "https://api.cloud251.com/order/";
const API_URL_LOGIN = "https://api.cloud251.com/auth/signin";
const API_URL_CONTACTUS = "https://api.cloud251.com/miscallaneous/contact";

const getInstanceType = async () => {
  return axios
    .get(API_URL_VMS)
    .then((response) => {
      if (response) {
        // console.log("Instance types==", response.data);
        return { data: response.data, statusCode: response.status };
      }
    })
    .catch((error) => {
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
      throw new Error(err.message);
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
      throw new Error(err);
    });
};

const getOrderById = async (orderId) => {
  return axios
    .get(API_URL_CREATE_ORDER + orderId)
    .then((response) => {
      if (response) {
        return response.data;
      }
    })
    .catch((error) => {
      throw error;
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

const postContactUs = async (userMessage) => {
  try {
    const response = await axios.post(API_URL_CONTACTUS);
    return { data: response.data, statusCode: response.status };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data, statusCode: error.response.status };
    }
  }
};

const services = {
  getInstanceType,
  getMachineImages,
  postSignUp,
  postCreateOrder,
  postLogin,
  getOrderById,
  postContactUs,
};
export default services;
