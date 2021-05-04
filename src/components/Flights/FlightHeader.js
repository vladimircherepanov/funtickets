import _ from "lodash";

import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "//src/redux/actions";
import { carriers } from "//src/sources/carriers";
import { convertDate, convertTime } from "//src/utils/convertDate";

export default (props) => {
  const utc_departure = props.route[0].utc_departure;
  const local_departure = props.route[0].local_departure;

  const utc_arrival = props.route[props.route.length - 1].utc_arrival;
  const local_arrival = props.route[props.route.length - 1].local_arrival;

  //const uniqueSet = Array.from(new Set(props.route));

  //function getUnique(data) {
  //  return Array.from(new Set(data.airline));
  //}

  //console.log("dep", utc_departure);
  //console.log("arr", utc_arrival);
  //console.log("unique", uniqueSet);

  //console.log("props.route", props.route);
  //console.log("props.route.lenght", props.route.length);

  const airlineLogo = (IATA) => {
    const url = (IATA) =>
      "https://images.kiwi.com/airlines/32/" + IATA + ".png";
    return (
      <div>
        <img alt="" src={url(IATA)} />
      </div>
    );
  };

  const airlineName = (IATA) => {
    const carr = carriers.find((item) => item.id === IATA);

    return <div> {carr.name}</div>;
  };

  const duration = (minutes) => {
    const fullHours = Math.floor(minutes / 60000 / 60);
    const hoursText = () => {
      if (fullHours > 1) {
        return " hours ";
      } else {
        return " hour ";
      }
    };
    const mins = minutes / 60000 - fullHours * 60;
    const minutesText = () => {
      if (mins > 1 || mins === 0) {
        return " minutes";
      } else {
        return " minute";
      }
    };
    const total = fullHours + hoursText() + mins + minutesText();
    return total;
  };

  return (
    <div className="flightHeader">
      <div className="row">
        <div className="col-1">
          {_.uniqBy(props.route, "airline").map((e, id) => {
            return <div key={id}>{airlineLogo(e.airline)}</div>;
          })}
        </div>
        <div className="col-3">
          {_.uniqBy(props.route, "airline").map((e, id) => {
            return <div key={id}>{airlineName(e.airline)}</div>;
          })}
        </div>
        <div className="col-2">
          <div className="row">
            <h4>{convertTime(local_departure)}</h4>
          </div>
          <div className="row">{convertDate(local_departure)}</div>
        </div>
        <div className="col-3">
          <div className="row">
            {duration(new Date(utc_arrival) - new Date(utc_departure))}
          </div>
          <div className="row">
            {props.route.length === 1 ? "" : props.route.length - 1 + " stop"}
          </div>
        </div>
        <div className="col-2 text-center">
          <div className="row">
            <h4>{convertTime(local_arrival)}</h4>
          </div>
          <div className="row">{convertDate(local_arrival)}</div>
        </div>
      </div>
    </div>
  );
};
