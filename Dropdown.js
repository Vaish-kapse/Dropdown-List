import React from "react";

export const Dropdown = () => {
  const [selectedState, setSelectedState] = React.useState("");
  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };
  return (
    <>
      <select value={selectedState} onChange={handleChange}>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Kerala">kerala</option>
        <option value="J&K">J&K</option>
        <option value="Punjab">Punjab</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
      </select>
      {selectedState !== "" && <h2>You have selected {selectedState}</h2>}
    </>
  );
};
// export default Dropdown;
