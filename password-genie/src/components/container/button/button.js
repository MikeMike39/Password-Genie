import React from "react";
import PropTypes from "prop-types";
// Takes a props object that consists of a label, className, iconClass, and handleClick method
const Button = (props) => {
  const { label, className, iconClass, handleClick } = props;
  return (
    <>
      <button className={className} label={label} onClick={handleClick}>
        <i className={iconClass}></i> {label}
      </button>
    </>
  );
};
// PropTypes validation to make sure the right props are passed to the button
Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  handleClick: PropTypes.func,
};
export default Button;