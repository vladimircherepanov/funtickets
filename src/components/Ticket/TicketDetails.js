import { convertDate, convertTime } from "//src/utils/convertDate";

import { carriers } from "//src/sources/carriers";

export default (props) => {
  const nnn = props.route.indexOf(
    props.route.find((el) => el.cityTo === props.destination)
  );

  const flyArrayTo = props.route.slice(0, nnn + 1);
  const flyArrayReturn = props.route.slice(nnn + 1, props.route.length);

  console.log("to", flyArrayTo);
  console.log("return", flyArrayReturn);

  const flyToId = flyArrayTo[0].id;

  const flyTo = flyArrayTo[flyArrayTo.length - 1].cityTo;

  const airlineName = (IATA) => {
    const carr = carriers.find((item) => item.id === IATA);
    return carr.name;
  };

  const flyReturn = () => {
    if (flyArrayReturn) {
      return <h5>Return from {flyArrayReturn[0].cityFrom}</h5>;
    }
  };

  const flightTo = flyArrayTo.map((elem) => {
    return (
      <div className="flightDetailRow" key={elem}>
        <div className="row">
          <div className="col">
            <h6>{airlineName(elem.airline)}</h6>
          </div>
          <div className="col">
            <h6>{elem.airline + "-" + elem.flight_no}</h6>
          </div>
          <div className="col">
            <div className="row">
              <h6>
                {elem.cityFrom}
                {" ("}
                {elem.flyFrom}
                {")"}
              </h6>
            </div>
            <div className="row">
              <h6>{convertTime(elem.local_departure)}</h6>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h6>
                {elem.cityTo}
                {" ("}
                {elem.flyTo}
                {")"}
              </h6>
            </div>
            <div className="row">
              <h6>{convertTime(elem.local_arrival)}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const returnFlight = () => {
    if (flyArrayReturn) {
      return flyArrayReturn.map((elem) => {
        return (
          <div className="flightDetailRow" key={elem}>
            <div className="row">
              <div className="col">
                <h6>{airlineName(elem.airline)}</h6>
              </div>
              <div className="col">
                <h6>{elem.airline + "-" + elem.flight_no}</h6>
              </div>
              <div className="col">
                <div className="row">
                  <h6>
                    {elem.cityFrom}
                    {" ("}
                    {elem.flyFrom}
                    {")"}
                  </h6>
                </div>
                <div className="row">
                  <h6>{convertTime(elem.local_departure)}</h6>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <h6>
                    {elem.cityTo}
                    {" ("}
                    {elem.flyTo}
                    {")"}
                  </h6>
                </div>
                <div className="row">
                  <h6>{convertTime(elem.local_arrival)}</h6>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <div className="flightTitle">
        <h5>Flight to {flyTo}</h5>
      </div>
      <div>{flightTo}</div>
      <div className="flightTitle">{flyReturn()}</div>
      <div>{returnFlight()}</div>
    </div>
  );
};
