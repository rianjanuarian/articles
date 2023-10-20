import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../actions/articleAction";
import Loading from "../helper/Loading";
const HomeUser = () => {
  const dispatch = useDispatch();

  const { getArticlesResult, getArticlesLoading, getArticlesError } =
    useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div className="container" style={{paddingTop: "50px"}}>
      <div className="row">
      {getArticlesResult ? (
        getArticlesResult.articles.map((e) => {
          if (e.posting === 0) {
            return null;
          } else {
            return (
              <div class="col-sm-6 mb-3 mb-sm-0" style={{ padding: "20px" }}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{e.title}</h5>
                  <p class="card-text">{e.content}</p>
                 
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

export default HomeUser;
