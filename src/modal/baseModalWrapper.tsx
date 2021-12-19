import React from "react";
import Modal from "./modal";
import { DesktopModalContainer, Header } from "./modalPopUp.styled";
interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackDropClick: () => void;
}
const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackDropClick,
  isModalVisible,
}) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackDropClick={onBackDropClick}>
      <DesktopModalContainer>
        <Header>Modal Info</Header>
      </DesktopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
