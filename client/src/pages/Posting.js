import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticles,
  createArticles,
  deleteArticles,
  updateArticles,
  detailArticles
} from "../actions/articleAction";
import Loading from "../helper/Loading";

const Posting = () => {
  const dispatch = useDispatch();


  const [form, setForm] = useState({
    title: "",
    content: "",
  
  });
  const refresh = () => {
    window.location.href = "/posting";
  };

  const { updateResult,createArticlesResult ,deleteArticlesResult,getArticlesResult, getArticlesLoading, getArticlesError } =
    useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

const handleUpdate = (id)=>{
  const updatedData = {
    posting: 1
  }
  dispatch(updateArticles(id,updatedData))
  refresh()
}

  const handleSubmit = () => {
    if (form.title === "" || form.content === "") {
      alert("Please fill all fields");
    } else {
      dispatch(createArticles(form));
    }
  };

  useEffect(() => {
    if (createArticlesResult) {
      refresh();
    }
  }, [createArticlesResult, dispatch]);

  useEffect(() => {
    if (deleteArticlesResult) {
      refresh();
    }
  }, [deleteArticlesResult, dispatch]);
  useEffect(() => {
   if(updateResult){
   refresh()
   }
  
   
  }, [updateResult,dispatch])
  
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Content
          </label>
          <input
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="button"
          onClick={() => {handleSubmit()}}
          className="btn btn-primary"
        >
          Submit to draft
        </button>
      </form>
      <div className="row" style={{ paddingTop: "50px" }}>
        {getArticlesResult ? (
          getArticlesResult.articles.map((e) => {
            if (e.posting === 1) {
              return null;
            } else {
              return (
                <div class="col-sm-6 mb-3 mb-sm-0" style={{ padding: "20px" }}>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">{e.title}</h5>
                      <p class="card-text">{e.content}</p>
                      <p class="card-text">{e.posting}</p>
                      <a onClick={()=> handleUpdate(e.id,1)} href="#" class="btn btn-primary">
                        Post
                      </a>
                      <a
                        onClick={() => dispatch(deleteArticles(e.id))}
                        href="#"
                        class="btn btn-danger"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : getArticlesLoading ? (
          <Loading></Loading>
        ) : (
          <p>{getArticlesError ? getArticlesError : "data kosong"}</p>
        )}
      </div>
    </div>
  );
};

export default Posting;
