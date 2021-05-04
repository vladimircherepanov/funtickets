import { useDispatch, useSelector } from "react-redux";
import {
  getFromInputValue,
  clearAirportName,
  clickFrom
} from "//src/redux/actions";

export default () => {
  const dispatch = useDispatch();
  const airportName = useSelector((state) => state.inputs.airportName);
  const warning = useSelector((state) => state.inputs.warning);
  const clicked = useSelector((state) => state.inputs.clickedInput);

  if (airportName.length < 3) {
    return (
      <div className="">
        <div className="form-group">
          <input
            defaultValue={airportName}
            placeholder="City or airport"
            className={!warning ? "form-control" : "form-control is-invalid"}
            type="text"
            onClick={() => dispatch(clickFrom(clicked))}
            onChange={(event) =>
              dispatch(getFromInputValue(event.target.value))
            }
          ></input>
        </div>
      </div>
    );
  } else {
    return (
      <div className="inputAirport">
        <div className="form-group">
          <div>
            <div className="form-group">
              <input
                type="text"
                defaultValue={airportName}
                className="form-control"
                onClick={() => dispatch(clearAirportName())}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
