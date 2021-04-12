import axios from "axios";
import { API_HOST } from "../../config";

export const STAFF_LOADING = "STAFF_LOADING";
export const STAFF_LOAD_SUCCEED = "STAFF_LOAD_SUCCEED";
export const STAFF_LOAD_FAILED = "STAFF_LOAD_FAILED";

export const staffLoadStart = () => ({ type: STAFF_LOADING });

export const staffLoadSucceed = payload => ({
  type: STAFF_LOAD_SUCCEED,
  payload
});

export const staffLoadFailed = error => ({
  type: STAFF_LOAD_FAILED,
  payload: error
});

export const getStaff = () => dispatch => {
  dispatch(staffLoadStart());
  axios
    .get(`${API_HOST}/staff`)
    .then(({ data }) => dispatch(staffLoadSucceed(data)))
    .catch(error => dispatch(staffLoadFailed(error.message)));
};
