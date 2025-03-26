import React from "react";
import "./LanguageSelector.css";

function LanguageSelector ({selectedValue,handleChange,setSelectedValue}) {
  const options = [
    { label: "Tamil", value: 1 },
    { label: "Hindi", value: 2 },
    { label: "Telugu", value: 3 },
    { label: "Malayalam", value: 4 },
  ];

return (
    
    <div className="lang">
    <div className="btn"><select className="minimal" value={selectedValue} onChange={handleChange}>
    <option value="">Select Language</option>
    {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

  </select>
  </div>
  </div>

);

}

export default LanguageSelector;