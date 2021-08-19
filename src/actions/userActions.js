import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "../constants/userConstants";
import { auth } from "../firebase";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { user } = await auth.signInWithEmailAndPassword(email, password);
    console.log(user.displayName);
    const data = { email: user.email, name: user.displayName };

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.message,
    });
  }
};

export const register = (displayName, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await user.updateProfile({ displayName });

    const data = { email: user.email, name: user.displayName };

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: error.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
