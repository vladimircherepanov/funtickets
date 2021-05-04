import { useSelector } from "react-redux";

import AirportList from "./AirportList";

export default () => {
  //const dispatch = useDispatch();
  const airportData = useSelector((state) => state.inputs.airportData);
  const inputAirportValue = useSelector((state) => state.inputs.from);
  if (airportData.locations) {
    if (airportData.locations.length > 0) {
      return <AirportList />;
    } else {
      if (inputAirportValue.length > 0) {
        return (
          <div>
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td>No suggestion</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
};
