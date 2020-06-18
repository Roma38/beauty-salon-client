import axios from "axios";
import { API_HOST } from "../../config";

export const SERVICES_LOADING = "SERVICES_LOADING";
export const SERVICES_LOAD_SUCCEED = "SERVICES_LOAD_SUCCEED";
export const SERVICES_LOAD_FAILED = "SERVICES_LOAD_FAILED";

export const servicesLoadStart = () => ({ type: SERVICES_LOADING });

export const servicesLoadSucceed = payload => ({
  type: SERVICES_LOAD_SUCCEED,
  payload
});

export const servicesLoadFailed = error => ({
  type: SERVICES_LOAD_FAILED,
  payload: error
});

export const getServices = () => dispatch => {
  dispatch(servicesLoadStart());
  axios
    .get(`${API_HOST}/services`)
    .then(({ data }) => dispatch(servicesLoadSucceed(data)))
    .catch(error => dispatch(servicesLoadFailed(error)));
};
