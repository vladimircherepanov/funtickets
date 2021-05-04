import Calendar from "./Calendar";
import { toggleCalendar } from "//src/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "//src/utils/formatDate";

export default () => {
  const dispatch = useDispatch();
  const calendarOpen = useSelector((state) => state.inputs.calendarOpen);
  const arrivalDate = useSelector((state) => state.inputs.arrivalDate);
  const departureDate = useSelector((state) => state.inputs.departureDate);
  function xxx() {
    if (arrivalDate) {
      return " - ";
    }
  }

  return (
    <div className="form-group">
      <button
        type="text"
        value={arrivalDate}
        className="form-control mt-1"
        onClick={() => dispatch(toggleCalendar(calendarOpen))}
      >
        {formatDate(departureDate) || formatDate(new Date())}
        {xxx()}
        {formatDate(arrivalDate) || ""}
      </button>
      <Calendar />
    </div>
  );
};
