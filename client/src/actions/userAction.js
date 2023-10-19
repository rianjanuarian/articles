import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER"


export const loginUser = (datas) => {
  return async (dispatch) => {
    //loading
    dispatch({
      type: LOGIN_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      let result = await axios({
        method: "POST",
        url: "http://localhost:3000/users/login",
        data: datas,
      });

      const access_token = result.data.access_token;
      const id = result.data.id;
      const username = result.data.username;
      if (access_token === undefined) {
        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: false,
          },
        });
      } else {
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("id", id);
        localStorage.setItem("username", username);
        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: result.data,
            errorMessage: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_USER,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

export const registerUser = (datas) => {
  return async (dispatch) => {
    //loading
    dispatch({
      type: REGISTER_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //create API
    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:3000/users/create",
        timeout: 120000,
        data: datas,
      });

      dispatch({
        type: REGISTER_USER,
        payload: {
          loading: false,
          data: result.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_USER,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
}
