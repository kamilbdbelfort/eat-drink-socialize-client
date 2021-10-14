// src/components/OpenForm/Form/index.js
import React from "react";

export const Form = ({ onSubmit }) => {
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
        <input type="image" alt="image" className="form-control" id="image" />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <input type="rating" className="form-control" id="rating" />
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
