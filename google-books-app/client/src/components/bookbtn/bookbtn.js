import React from "react";
import "./bookbtn.css";

const BookBtn = props => (
  <button className={`book-btn btn btn-${props.btntype} btn-sm`} {...props}>
    {props.children}
  </button>
);

export default BookBtn;