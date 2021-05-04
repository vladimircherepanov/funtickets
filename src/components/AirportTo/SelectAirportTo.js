import { useSelector } from "react-redux";

import AirportListTo from "./AirportListTo";

export default () => {
  //const dispatch = useDispatch();
  const airportData = useSelector((state) => state.inputs.airportDataTo);
  const inputAirportValue = useSelector((state) => state.inputs.to);
  if (airportData.locations) {
    if (airportData.locations.length > 0) {
      return <AirportListTo />;
    } else {
      if (inputAirportValue.length > 0) {
        return (
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>
                  <h6>No suggestion</h6>
                </td>
              </tr>
            </tbody>
          </table>
        );
      }
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
};
