import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "react-native/";
import styled from "styled-components/native";

const InputText = styled.TextInput.attrs({
  autoCapitalize: "none",
  autoCorrect: false,
})`
  border: 1px solid #eeeeee;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 20px;
`;

const LabelText = styled.Text`
  font-size: 20px;
  margin: 10px;
`;

const SetText = styled.Text`
  font-size: 20px;
  margin: 10px;
`;

const AreaView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const getAverage = (numbers) => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Score = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const insert = (e) => {
    const next = list.concat(parseInt(number));
    setList(next);
    setNumber("");
  };

  const refKor = useRef(null);

  useEffect(() => {}, []);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      {/* <AreaView>
        <SetText>국어</SetText>
        <InputText
          onChangeText={(text) => {
            _insert(text);
          }}
          keyboardType="numeric"
        ></InputText>
      </AreaView>
      <AreaView>
        <SetText>수학 </SetText>
        <InputText
          onChangeText={(text) => {
            _insert(text);
          }}
          keyboardType="numeric"
        ></InputText>
      </AreaView>
      <AreaView>
        <SetText>음악 </SetText>
        <InputText
          onChangeText={(text) => {
            _insert(text);
          }}
          keyboardType="numeric"
        ></InputText>
      </AreaView>
      <SetText>평균 : {getAverage(list)}</SetText> */}
      <InputText value={number} onChangeText={(text) => setNumber(text)} />
      <Button title="등록" onPress={insert}></Button>

      {list.map((value, index) => (
        <LabelText key={index}>{value}</LabelText>
      ))}

      <LabelText> 평균 : {avg} </LabelText>
    </>
  );
};

export default Score;
