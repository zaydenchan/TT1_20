import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Account Type</button>
      <div className="dropdown-content">
        <a href="#">Current</a>
        <a href="#">Multiply</a>
        <a href="#">Savings</a>
      </div>
    </div>
  );
};

export default Dropdown;

// import React from "react"

// // dropdown feature
// export default function Dropdown(props){
//     return(
//         <select className="dropdown">
//             <option value="SavingAccount">Savings Account</option>
//             <option value="CurrentAccount">Current Account</option>
//             <option selected value="MultiplierAccount">Multiplier Account</option>
//         </select>
//         // <h1> hi</h1>
        
//         )
// }