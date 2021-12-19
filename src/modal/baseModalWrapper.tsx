import React from "react";
import Modal from "./modal";
import {
  DesktopModalContainer,
  Header,
  Message,
  DesktopCloseButton,
  CloseSign,
} from "./modalPopUp.styled";
interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackDropClick: () => void;
  header: string;
  message?: string;
}
const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackDropClick,
  isModalVisible,
  header,
  message,
}) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackDropClick={onBackDropClick}>
      <DesktopModalContainer>
        <DesktopCloseButton onClick={onBackDropClick}>
          <CloseSign />
        </DesktopCloseButton>
        <Header>{header}</Header>
        {message && <Message>{message}</Message>}
      </DesktopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
