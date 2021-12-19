import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

interface ModalProps {
  onBackDropClick: () => void;
}
const Overlay = styled.div`
  background-color: rgba(0 0 0 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal: React.FC<ModalProps> = ({ onBackDropClick, children }) => {
  return ReactDom.createPortal(
    <div onClick={(e) => e.stopPropagation()}>
      <Overlay onClick={onBackDropClick}>{children}</Overlay>
    </div>,
    document.getElementById("root-modal")!
  );
};

export default Modal;
