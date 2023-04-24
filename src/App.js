import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import Cnt from "./components/Cnt";
import MyWrite from "./components/MyWrite";
import Btn from "./components/Btn";
import Score from "./components/Score";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [isShow, setIsShow] = useState(true);
  const [isShow1, setIsShow1] = useState(true);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {/* <Cnt></Cnt> */}
      <Btn
        title={isShow ? "hide" : "MyWrite show"}
        onPress={() => setIsShow((prev) => !prev)}
      />
      {isShow && <MyWrite />}
      <Btn
        title={isShow1 ? "hide" : "Score show"}
        onPress={() => setIsShow1((prev) => !prev)}
      />
      {isShow1 && <Score />}
    </Container>
  );
};

export default App;
