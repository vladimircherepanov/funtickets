import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "//src/redux/actions";

export default (props) => {
  const dispatch = useDispatch();
  const detailsId = useSelector((state) => state.inputs.detailsId);
  if (props.route[0].id === detailsId) {
    return (
      <button className="btn btn-info" onClick={() => dispatch(getDetails(""))}>
        HIDE DETAILS
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-info"
        onClick={() => dispatch(getDetails(props.route[0].id))}
      >
        OPEN DETAILS
      </button>
    );
  }
};
