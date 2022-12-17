import React, { useState } from "react";
import people from "../data";

const Employees = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { image, name, job, text } = people[currentIndex];

  return (
    <div className="container">
      <h1 className="title">Employees</h1>
      <div className="card">
        <img src={image} />
        <h3 className="name">{name}</h3>
        <h4 className="job">{job}</h4>
        <p>{text}</p>
        <div className="carousel-btn">
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? people.length - 1 : currentIndex - 1
              )
            }
          >
            {"<"}
          </button>
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === people.length - 1 ? 0 : currentIndex + 1
              )
            }
          >
            {">"}
          </button>
        </div>
        <button
          className="rand-btn"
          onClick={() => {
            let randNum;
            do {
              randNum = Math.floor(Math.random() * people.length - 1) + 1;
            } while (randNum === currentIndex);
            setCurrentIndex(randNum);
          }}
        >
          Random Employee
        </button>
      </div>
    </div>
  );
};

export default Employees;
