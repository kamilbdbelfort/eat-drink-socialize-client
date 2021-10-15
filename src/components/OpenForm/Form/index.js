// src/components/OpenForm/Form/index.js
import React from "react";
import { useState } from "react";

export const Form = ({ onSubmit, url, setUrl }) => {
  const [image, setImage] = useState("");
  //const [url, setUrl] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tdfbxjln");
    data.append("cloud_name", "ddng6db9v");
    fetch("  https://api.cloudinary.com/v1_1/ddng6db9v/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  console.log("url:", url);
  console.log("setUrl:", setUrl);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input className="form-control" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <input className="form-control" id="comment" />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="form-control"
          id="image"
        ></input>
        <button onClick={uploadImage}>Upload</button>
        <img src={url} alt="" />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          className="form-control"
          id="rating"
          placeholder="place a rating from 1-5"
          min="1"
          max="5"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
