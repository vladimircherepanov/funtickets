import { useDispatch, useSelector } from "react-redux";
import { clearDates } from "//src/redux/actions";

export default () => {
  const dispatch = useDispatch();
  const departureDate = useSelector((state) => state.inputs.departureDate);
  if (departureDate) {
    return (
      <button className="btn" onClick={() => dispatch(clearDates())}>
        CLEAR
      </button>
    );
  } else {
    return <div></div>;
  }
};
