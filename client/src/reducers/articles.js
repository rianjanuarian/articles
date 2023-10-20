import { DETAIL_ARTICLES,GET_ARTICLES,CREATE_ARTICLES,DELETE_ARTICLES,UPDATE_ARTICLES } from "../actions/articleAction";

const initialState = {
    getArticlesResult :false,
    getArticlesLoading :false,
    getArticlesError :false,

    createArticlesResult :false,
    createArticlesLoading :false,
    createArticlesError :false,

    deleteArticlesResult :false,
    deleteArticlesLoading :false,
    deleteArticlesError :false,

    updateResult: false,
    updateLoading: false,
    updateError: false,

    detailResult : false
}
const articles = (state = initialState,action) => {
    switch(action.type){
        case GET_ARTICLES:
            return{
                ...state,
                getArticlesResult : action.payload.data,
                getArticlesLoading : action.payload.loading,
                getArticlesError : action.payload.errorMessage
            };
            case CREATE_ARTICLES:
            return{
                ...state,
                createArticlesResult : action.payload.data,
                createArticlesLoading : action.payload.loading,
                createArticlesError : action.payload.errorMessage
            };
            case DELETE_ARTICLES:
            return{
                ...state,
                deleteArticlesResult : action.payload.data,
                deleteArticlesLoading : action.payload.loading,
                deleteArticlesError : action.payload.errorMessage
            };
            case UPDATE_ARTICLES:
            return{
                ...state,
                updateArticlesResult : action.payload.data,
                updateArticlesLoading : action.payload.loading,
                updateArticlesError : action.payload.errorMessage
            };
            case DETAIL_ARTICLES:
                return{
                    ...state,
                    detailResult : action.payload.data,
                   
                };
            default:
                return state
    }
};

export default articles;
