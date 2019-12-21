import React from "react";

const BasePage = ({ children, className }) => {
  const classNames = className || '';
 return (
   <div className={`base-page ${classNames}`}>{ children }</div>
 )
};

export default BasePage;
