import { useDispatch, useSelector } from "react-redux";
import { selectOneWay, toggleCalendar } from "//src/redux/actions";

export default () => {
  const dispatch = useDispatch();

  const departureDate = useSelector((state) => state.inputs.departureDate);
  const arrivalDate = useSelector((state) => state.inputs.arrivalDate);

  if (departureDate) {
    if (arrivalDate) {
      return (
        <div>
          <button
            className="btn btn-success"
            onClick={() => dispatch(toggleCalendar(true))}
          >
            SELECT
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="btn btn-warning"
            onClick={() => dispatch(selectOneWay())}
          >
            ONE WAY
          </button>
        </div>
      );
    }
  } else {
    return <div></div>;
  }
};
