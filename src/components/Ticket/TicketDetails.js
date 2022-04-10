import { useDispatch, useSelector } from "react-redux";

import { convertDate, convertTime } from "../../utils/convertDate";

import { carriers } from "../../sources/carriers";

export default (props) => {

  const dispatch = useDispatch();

  const currency = useSelector((state) => state.inputs.currency);


  const nnn = props.route.indexOf(
    props.route.find((el) => el.cityTo === props.destination)
  );

  const flyArrayTo = props.route.slice(0, nnn + 1);
  const flyArrayReturn = props.route.slice(nnn + 1, props.route.length);
  const price = props.price;
  const tarif = Math.round(price * 0.7)

  console.log("to", flyArrayTo);
  console.log("return", flyArrayReturn);
  console.log("price", price);


  const flyToId = flyArrayTo[0].id;

  const flyTo = flyArrayTo[flyArrayTo.length - 1].cityTo;
  //const dateTo = convertDate(flyArrayTo[flyArrayTo.length - 1].local_arrival);
  //const dateReturn = convertDate(flyArrayReturn[flyArrayReturn.length - 1].local_arrival);



  const airlineName = (IATA) => {
    const carr = carriers.find((item) => item.id === IATA);
    return carr.name;
  };


  const flyReturn = () => {
    if (flyArrayReturn.length > 0) {
      return <h5>Return from {flyArrayReturn[0].cityFrom}</h5>;
    } else {return  <div></div>}
  };

  const stopOver = () => {if(flyArrayTo[1]) {
    return (Math.abs(flyArrayTo[1].utc_departure - flyArrayTo[0].utc_arrival)) }
    else {return ""}
  };
  console.log("stop", stopOver(), flyArrayTo[1].utc_departure, flyArrayTo[0].utc_arrival)

  const flightTo = flyArrayTo.map((elem) => {
    return (
      <div className="flightDetailRow" key={elem}>
        <h1>{stopOver()}</h1>
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
          <div className="col">
            {elem.fare_basis}
          </div>
          <div className="col">
            {elem.fare_category}
          </div>
          <div className="col">
            {elem.fare_classes}
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
              <div className="col">
                {elem.fare_basis}
              </div>
              <div className="col">
                {elem.fare_category}
              </div>
              <div className="col">
                {elem.fare_classes}
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
      <div className="flightTitle">
        <h5>{flyReturn()}</h5>
      </div>
      <div>{returnFlight()}</div>
      <div>{price}</div>
      <div>{tarif}</div>
      <div>{currency}</div>

    </div>
  );
};
