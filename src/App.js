import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { payload } from "./mock/index";
import Card from "./components/card";
import "./styles.css";
import sortMoviesData from "./utils/sortMoviesData";
import asyncSimulate from "./utils/useSimulateAsync";

const functions = new Set();

const App = () => {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([])

  const increment = () => { setCounter(counter + 1) }

  var componentHasChanged = (counter) ? counter : false

  if(!componentHasChanged)
    functions.add(increment)

  const sorted_movies =  sortMoviesData(data);

  return (
    <div>
      <Wrapper>
        <Label>{counter}</Label>
        <button   onClick={increment}>Increment</button>
      </Wrapper>
      <div className="cardlist-wrapper">
        <button onClick={()=>asyncSimulate(payload, setData)}>Loadmovies</button>
        <div className="cardlist">
          {sorted_movies.map((item, i) => {
            return <Card {...item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  text-align: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: 500;
`;
