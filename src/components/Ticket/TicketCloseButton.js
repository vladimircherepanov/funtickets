import { useSelector, useDispatch } from "react-redux";
import { ticketOpen, warningAlert } from "//src/redux/actions";

export default () => {
  const dispatch = useDispatch();

  const ticketStatus = useSelector((state) => state.inputs.ticketOpen);
  const firstName = useSelector((state) => state.inputs.firstName);

  const buttonText = () => {
    if (ticketStatus) {
      return "RETURN";
    } else {
      return "ORDER";
    }
  };

  const clickHandler = () => {
    if (firstName) {
      dispatch(ticketOpen(ticketStatus));
    } else {
      dispatch(warningAlert(true));
    }
  };

  return (
    <button className="btn btn-success" onClick={() => clickHandler()}>
      {buttonText()}
    </button>
  );
};
