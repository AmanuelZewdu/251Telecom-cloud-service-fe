import axios from "axios";

const APP_BASE_URL = process.env.REACT_APP_BASE_API_URL_ORIGINAL;
const API_URL_VMS = APP_BASE_URL + "vm-settings/instance-types";
const API_URL_IMAGES = APP_BASE_URL + "vm-settings/machine-images";
const API_URL_SIGN_UP = APP_BASE_URL + "auth/signup";
const API_URL_CREATE_ORDER = APP_BASE_URL + "order/";
const API_URL_LOGIN = APP_BASE_URL + "auth/signin";
const API_URL_CONTACTUS = APP_BASE_URL + "miscallaneous/contact";
const API_URL_EXCHANGE = APP_BASE_URL + "rate";

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
      return { data: response.data, statusCode: response.status };
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
    // console.log("login===>", response);
    return { data: response.data, statusCode: response.status };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data, statusCode: error.response.status };
    } else {
      throw new Error("Network error occurred.");
    }
  }
};
const getDollarExchange = async (dollar) => {
  try {
    const response = await axios.post(API_URL_EXCHANGE, dollar);
    return response;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data, statusCode: error.response.status };
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
  getDollarExchange,
};
export default services;
