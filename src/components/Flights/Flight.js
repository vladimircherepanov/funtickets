import { useSelector } from "react-redux";
import { convertDate, convertTime } from "//src/utils/convertDate";

import { carriers } from "//src/sources/carriers";

export default (props) => {
  const detailsId = useSelector((state) => state.inputs.detailsId);

  const airlineName = (IATA) => {
    const carr = carriers.find((item) => item.id === IATA);
    return carr.name;
  };

  const xxx = props.route.map((elem) => {
    return (
      <div className="flightDetailRow" key={elem}>
        <hr />
        <div className="row">
          <div className="col">
            <h6>{airlineName(elem.airline)}</h6>
          </div>
          <div className="col">
            <h6>{elem.airline + "-" + elem.flight_no}</h6>
          </div>
          <div className="col">
            <div className="row">
              <h6>{elem.cityFrom}</h6>
            </div>
            <div className="row">
              <h6>{convertTime(elem.local_departure)}</h6>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h6>{elem.cityTo}</h6>
            </div>
            <div className="row">
              <h6>{convertTime(elem.local_arrival)}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  });
  if (props.route[0].id === detailsId) {
    return <h1>{xxx}</h1>;
  } else {
    return <div></div>;
  }
};
