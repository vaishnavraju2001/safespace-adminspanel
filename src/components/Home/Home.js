import axios from "axios";
import React, { useEffect, useState } from "react";
import Ques from "../Ques/Ques";
import "./Home.css";
const Home = () => {
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("Unanswered");
  const getQuestions = async () => {
    const res = await axios.get(
      "https://safespace-backend-webapp.herokuapp.com/"
    );
    const datains = Object.values(res.data);
    setDatas(datains);
  };
  const getFilteredQuestions = () => {
    const unanswered = datas.filter((d) => d.answered === true);
    const answered = datas.filter((ds) => ds.answered === false);
    console.log(unanswered);
    console.log(answered);
    // console.log(datas);
    if (filter === "Unanswered") {
      setData(unanswered);
    } else if (filter === "Answered") {
      setData(answered);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);
  const filterFunction = (e) => {
    setFilter(e.target.value);
    getFilteredQuestions();
  };
  return (
    <div className="home">
      <select name="filter" onChange={(e) => filterFunction(e)} value={filter}>
        <option value="Answered">Answered</option>
        <option value="Unanswered">Not Answered</option>
      </select>
      {data.map((d) => {
        return <Ques key={d.number} props={d} />;
      })}
    </div>
  );
};

export default Home;
