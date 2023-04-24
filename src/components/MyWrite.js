import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";

const InputText = styled.TextInput.attrs({
  autoCapitalize: "none", //자동 대문자시작
  autoCorrect: false,
})`
  border: 1px solid #eeeeee;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 20px;
`;

const SetText = styled.Text`
  font-size: 20px;
  margin: 10px;
`;

const MyWrite = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const refName = useRef(null);
  const refEmail = useRef(null);

  useEffect(() => {
    console.log("연결됨");
    refName.current.focus();
    return () => console.log("연결해제 됨");
  }, []);

  return (
    <>
      <SetText>이름 : {name}</SetText>
      <SetText>이메일 : {email} </SetText>
      <InputText
        value={name}
        onChangeText={(text) => setName(text)}
        ref={refName} //참조할 이름을 지정
        returnkeyType="next"
        onSubmitEditing={() => refEmail.current.focus()}
      ></InputText>
      <InputText
        value={email}
        onChangeText={(text) => setEmail(text)}
        ref={refEmail}
      ></InputText>
    </>
  );
};

export default MyWrite;
