import React, { useState } from "react";
import axios from "axios";
import "./Ques.css";
const Ques = ({ props }) => {
  console.log(props);
  const [ans, setAns] = useState("");
  function handleChange(e) {
    setAns(e.target.value);
  }
  const handleSubmit = async (e) => {
    const url = `https://safespace-backend-webapp.herokuapp.com/${props._id}`;
    console.log(props._id);
    await axios.patch(`${url}`, { ...props, answer: ans, answered: true });
  };
  return (
    <div className="ques">
      <h1>Q</h1>
      <p>{props.question}</p>
      <form action={`mailto:${props.email}`} method="POST">
        <input
          type="text"
          name="Question"
          value={props.question}
          hidden
          required
        />
        <input
          type="text"
          name="Answer"
          placeholder="Answer"
          onChange={handleChange}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Ques;
