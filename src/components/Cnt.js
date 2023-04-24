import React, { useState } from "react";
import styled from "styled-components/native";
import Btn from "./Btn";

const CntText = styled.Text`
  font-size: 25px;
  margin: 10px;
`;

const Cnt = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CntText>count : {count}</CntText>
      <Btn
        title="Up"
        onPress={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
          console.log(`${count}`);
        }}
      ></Btn>
      <Btn title="Down" onPress={() => setCount(count - 1)}></Btn>
    </>
  );
};

export default Cnt;
