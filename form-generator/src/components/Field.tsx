import React from "react";

interface FieldProps {
  label: string;
  attrs: {
    name: string;
    type: string;
    variants?: { value: string; label: string }[];
  };
  onChange: (name: string, value: string | boolean | string[]) => void;
}

const Field: React.FC<FieldProps> = ({ label, attrs, onChange }) => {
  const { name, type, variants } = attrs;

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (type === "checkbox") {
      onChange(name, (event.target as HTMLInputElement).checked);
    } else {
      onChange(name, event.target.value);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.value);
  };

  if (type === "radio") {
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        {variants?.map((variant, index) => (
          <div key={index} className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id={`${name}-${variant.value}`}
              name={name}
              value={variant.value}
              onChange={handleRadioChange}
            />
            <label
              className="form-check-label"
              htmlFor={`${name}-${variant.value}`}
            >
              {variant.label}
            </label>
          </div>
        ))}
      </div>
    );
  } else if (type === "select") {
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <select
          className="form-select"
          id={name}
          name={name}
          onChange={handleInputChange}
        >
          {variants?.map((variant, index) => (
            <option key={index} value={variant.value}>
              {variant.label}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        {variants?.map((variant, index) => (
          <div key={index} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`${name}-${index}`}
              name={name}
              value={variant.value}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor={`${name}-${index}`}>
              {variant.label}
            </label>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="form-control"
          id={name}
          name={name}
          onChange={handleInputChange}
        />
      ) : (
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default Field;
