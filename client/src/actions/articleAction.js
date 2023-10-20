import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";
export const CREATE_ARTICLES = "CREATE_ARTICLES";
export const DELETE_ARTICLES = "DELETE_ARTICLES"
export const UPDATE_ARTICLES = "UPDATE_ARTICLES"
export const DETAIL_ARTICLES = "DETAIL_ARTICLES"

export const getArticles = () => {
  const user = JSON.parse(localStorage.getItem("id"));
  return async (dispatch) => {
    dispatch({
      type: GET_ARTICLES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    try {
      const result = await axios({
        method: "GET",
        url: "http://localhost:3000/users/" + user,
      });
      dispatch({
        type: GET_ARTICLES,
        payload: {
          loading: false,
          data: result.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_ARTICLES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

export const createArticles = (datas) => {
  const user = JSON.parse(localStorage.getItem("id"));
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const result = await axios({
        method: "POST", 
        url : `http://localhost:3000/articles/${user}/create`,
        data: datas
      })
      dispatch({
        type: CREATE_ARTICLES,
        payload: {
          loading: false,
          data: result.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: CREATE_ARTICLES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};
export const deleteArticles = (id) =>{
  return async (dispatch) => {
    dispatch({
      type: DELETE_ARTICLES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    try {
      const result = await axios({
        method: "DELETE",
        url : `http://localhost:3000/articles/delete/${id}`
      })

      dispatch({
        type: DELETE_ARTICLES,
        payload: {
          loading: false,
          data: result.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: DELETE_ARTICLES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  }
}
export const detailArticles = (datas) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_ARTICLES,
      payload: {
        data: datas,
      },
    });
  };
};
export const updateArticles = (id,datas) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_ARTICLES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    try {
      const result = await axios.put(
       
        `http://localhost:3000/articles/update/${id}`,datas
      
      )

      dispatch({
        type: UPDATE_ARTICLES,
        payload: {
          loading: false,
          data: result.data,
          errorMessage: false,
        },
      });
      console.log(datas,id)
    } catch (error) {
      dispatch({
        type: UPDATE_ARTICLES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  }
}