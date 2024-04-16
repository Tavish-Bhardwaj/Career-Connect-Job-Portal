import React from "react";
import Button from "./Button";
import Inputfield from "../components/Inputfield";
const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="test" value="" onChange={handleChange} />
          <span className=""></span>All
        </label>
        
        <Inputfield
          handleChange={handleChange}
          value={30}
          title="<3000k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
