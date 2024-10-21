import React, { useState } from "react";

const Practice = () => {
  const myname = "Rahul Kushwaha";
  const mypass = "Rahul Kushwaha";
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handelUserPassChange = (e) => {
    setUserPassword(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(userName, userPassword);
    if (userName === myname && userPassword === mypass) {
      return <h1>Thank you for Login</h1>;
    }
  };
  return (
    <>
      <h1>Hello Now I code here</h1>
      <h2>And here I will create a login form</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={handleUserNameChange}
        />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          placeholder="Enter here your Password"
          value={userPassword}
          onChange={handelUserPassChange}
          autoComplete="current-password" // or "new-password" if it's for a new password
        />
        <button type="submit">Submit the Form</button>
      </form>
    </>
  );
};

export default Practice;

// import "./App.css";
// import { React, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>Hello this is my Counter increment and decrement app</h1>
//       <h2>Currunt count: {count}</h2>
//       <button onClick={() => setCount(count > 9 ? 10 : count + 1)}>
//         increment
//       </button>
//       <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
//         Decrement
//       </button>

//       {count === 5 ? (
//         <h1>Hello User, You are winner of 5 coins!</h1>
//       ) : count === 0 ? (
//         <h1>Hello User, You reached the minimum value!</h1>
//       ) : count === 10 ? (
//         <h1>Hello User, You reached the maximum value!</h1>
//       ) : (
//         <h1>Hello User, You are still playing</h1>
//       )}
//     </>
//   );
// }
// export default App;

// function Welcome(props) {
//   return <h1>Hello, Bro {props.name}</h1>;
// }

// function App() {
//   const name = "Rahul";
//   return (
//     <>
//       <h1>Hello {name}</h1>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Welcome name="Rahul"></Welcome>
//     </>
//   );
// }

// import React, { useState } from "react";

// function App() {
//   const [ncount, setNcount] = useState(0);
//   const message = () => {
//     if (ncount === 0) {
//       return <h1>You reaced the minimum Point!</h1>;
//     } else if (ncount % 2 === 0) {
//       return <h1>Even Number</h1>;
//     } else if (ncount % 2 !== 0) {
//       return <h1>Odd Number</h1>;
//     } else if (ncount === 10) {
//       return <h1>You reached the maximum point!</h1>;
//     }
//   };
//   return (
//     <>
//       <h1>Hello yara, I am tring the second way by self</h1>
//       <h2>This is Counter {ncount}</h2>
//       <button onClick={() => setNcount(ncount < 10 ? ncount + 1 : 10)}>
//         increase The Number
//       </button>
//       <button onClick={() => setNcount(ncount > 0 ? ncount - 1 : 0)}>
//         Decrease the Number
//       </button>
//       <button onClick={() => setNcount(0)}>Reset Button</button>
//       {message()}
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Hello ${inputValue} Baby`);
//   };
//   return (
//     <>
//       <h1>This is my form </h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// }

// export default App;
