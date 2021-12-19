import MediaQuery from "react-responsive";

interface RWDModalProps {}

const RWDModal = ({}) => {
  return (
    <MediaQuery minWidth={580}>
      {(matches: any) =>
        matches ? <div>Something here</div> : <div>Another Thing here</div>
      }
    </MediaQuery>
  );
};

export default RWDModal;
