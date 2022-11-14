import React from "react";

function Toggle() {
  // đây là funtion Stateless: ko sử dụng State
  return <div className="toggle"></div>;
}
function Toggle2() {
  return (
    // đây là funtion Statefull: sử dụng State
    //conts [count, setCount]=useState(); đây là vd sd State
    <div className="toggle"></div>
  );
}

export default Toggle;
