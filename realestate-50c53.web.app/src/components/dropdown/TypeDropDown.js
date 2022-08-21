// // import { Slider } from "@mui/material";
import "./dropdown.css"
import React from "react";
import "../Filter/Filter.css";
import { useTranslation } from "react-i18next";

function TypeDropdown({ handleChange, name, options }) {
  const { t } = useTranslation();

  // const types = ["apartment", "hotel"];
  // const user owner=['fadi']
  return (
    <div className="dropdown">
      <select className="dropdown1" name={name} onChange={handleChange} >
        {options.map((type) => {
          return (
            <option key={type} value={type}>
              {t(type)}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TypeDropdown;
