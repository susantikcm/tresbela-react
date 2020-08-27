import React from "react";
import styles from "./form-button.module.scss";

const FormButton = ({ type, text, handleClick, buttonType }) => (
    <button type={type} onClick={handleClick} className={`${styles.button} ${styles[buttonType]}`}>
        {text}
    </button>
);
export default FormButton;

