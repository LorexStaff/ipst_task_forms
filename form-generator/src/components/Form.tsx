import React, { useState } from "react";
import Field from "./Field";
import Button from "./Button";
import { FormProps } from "../types/FormProps";

const Form: React.FC<FormProps> = ({ title, description, fields, buttons }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name: string, value: string | boolean | string[]) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = () => {
    setFormData({});
  };

  return (
    <div className="container">
      <h2 className="text-center mb-3">{title}</h2>
      {description && <p className="text-center mb-4">{description}</p>}
      <form>
        {fields.map((field, index) => (
          <Field
            key={index}
            label={field.label}
            attrs={field.attrs}
            onChange={handleChange}
          />
        ))}
        <div
          className="d-flex justify-content-center mt-4"
          style={{ gap: "30px", margin: "20px" }}
        >
          {buttons.map((button, index) => (
            <Button
              key={index}
              type={button === "submit" ? "button" : "reset"}
              onClick={button === "reset" ? handleClear : undefined}
            >
              {button}
            </Button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Form;
