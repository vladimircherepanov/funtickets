import { useDispatch, useSelector } from "react-redux";
import {
  getFromInputValueTo,
  clearAirportNameTo,
  clickTo
} from "//src/redux/actions";

export default () => {
  const dispatch = useDispatch();
  const airportName = useSelector((state) => state.inputs.airportNameTo);

  if (airportName.length < 3) {
    return (
      <div>
        <div className="form-group">
          <input
            defaultValue={airportName}
            placeholder="City or airport"
            type="text"
            className="form-control"
            onClick={() => dispatch(clickTo())}
            onChange={(event) =>
              dispatch(getFromInputValueTo(event.target.value))
            }
          ></input>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            value={airportName}
            className="form-control"
            onClick={() => dispatch(clearAirportNameTo())}
          ></input>
        </div>
      </div>
    );
  }
};
