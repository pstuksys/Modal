import React, { useState } from "react";
import "./App.css";
import BaseModalWrapper from "./modal/baseModalWrapper";

const App = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };

  return (
    <div className="container">
      <button onClick={toggleModal}>Click Modal</button>
      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackDropClick={toggleModal}
      />
    </div>
  );
};

export default App;
