import { useSelector, useDispatch } from "react-redux";
import { passenger } from "//src/redux/actions";
export default () => {
  const firstName = useSelector((state) => state.inputs.firstName);

  const secondName = useSelector((state) => state.inputs.secondName);
  const warning = useSelector((state) => state.inputs.warning);

  const passportNumber = useSelector((state) => state.inputs.passportNumber);
  const dispatch = useDispatch();

  const alertText = () => {
    if (warning) {
      return "ЕБАНИ КА ПАСПОРТ ДРУГ";
    } else {
      return "";
    }
  };

  if (!firstName) {
    return (
      <div>
        <h1>{alertText()}</h1>

        <button
          className="btn btn-success"
          onClick={() => dispatch(passenger())}
        >
          ADD PASSENGER
        </button>
        <h1>{alertText()}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>{firstName}</div>
        <div>{secondName}</div>
        <div>{passportNumber}</div>
        <button
          className="btn btn-success"
          onClick={() => dispatch(passenger())}
        >
          CHANGE
        </button>
      </div>
    );
  }
};
