import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import form1 from "./data/form1.json";
import form2 from "./data/form2.json";
import form3 from "./data/form3.json";
import { FormProps } from "./types/FormProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<FormProps>(form1);

  const handleFormSelect = (form: FormProps) => {
    setCurrentForm(form);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="d-flex justify-content-center mb-4">
          <button
            className="btn btn-secondary mx-2"
            onClick={() => handleFormSelect(form1)}
          >
            Форма 1
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => handleFormSelect(form2)}
          >
            Форма 2
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => handleFormSelect(form3)}
          >
            Форма 3
          </button>
        </div>
        <div className="form-area">
          <Form {...currentForm} />
        </div>
      </div>
    </div>
  );
};

export default App;
