import { useSelector, useDispatch } from "react-redux";
import { clearTicket, passenger, ticketOpen } from "//src/redux/actions";

import InputPassenger from "//src/components/Ticket/InputPassenger";
import TicketFinished from "./TicketFinished";
import TicketCloseButton from "./TicketCloseButton";
import FlightRoutes from "../Flights/FlightRoutes";
import TicketDetails from "./TicketDetails";

export default () => {
  const dispatch = useDispatch();
  const flightData = useSelector((state) => state.flightData.flightData);
  const ticket_id = useSelector((state) => state.inputs.ticket_id);
  const firstName = useSelector((state) => state.inputs.firstName);
  const secondName = useSelector((state) => state.inputs.secondName);
  const passportNumber = useSelector((state) => state.inputs.passportNumber);
  const ticketStatus = useSelector((state) => state.inputs.ticketOpen);

  const passengerPanelOpen = useSelector(
    (state) => state.inputs.passengerPanelOpen
  );

  const price = flightData.price;

  const warning = useSelector((state) => state.inputs.warning);

  const alertText = () => {
    if (warning) {
      return "ЕБАНИ КА ПАСПОРТ ДРУГ";
    } else {
      return "";
    }
  };

  const passengerPanel = () => {
    if (!firstName) {
      return (
        <div className="container">
          <h1>{alertText()}</h1>
          <button
            className="btn btn-success"
            onClick={() => dispatch(passenger())}
          >
            ADD PASSENGER
          </button>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div>{firstName}</div>
          <div>{secondName}</div>
          <div>{passportNumber}</div>
          <button
            className="btn btn-success"
            onClick={() => dispatch(passenger())}
          >
            CHANGE
          </button>
        </div>
      );
    }
  };

  const flight = flightData.find((item) => item.id === ticket_id);

  //////////////////////////////////

  if (ticketStatus) {
    return <TicketFinished flight={flight} />;
  } else {
    if (passengerPanelOpen) {
      return (
        <div className="headerTicketForm">
          <InputPassenger />
          <div className="row">
            <div className="col" onClick={() => dispatch(clearTicket())}>
              <button className="btn btn-secondary">Back to results</button>
            </div>
            <hr />
          </div>
        </div>
      );
    } else {
      return (
        <div className="ticketA">
          <div className="ticketForm">
            <div className="headerTicketForm">
              <div className="row">
                <div className="col" onClick={() => dispatch(clearTicket())}>
                  <button className="btn btn-secondary">Back to results</button>
                </div>
                <div className="col"></div>
              </div>
              <hr />
            </div>
            <div>{passengerPanel()}</div>
            <div className="ticketDetails">
              {price}
              <div className="row">
                <div className="col col-md-12">
                  <TicketDetails
                    route={flight.route}
                    destination={flight.cityTo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ticketOrderButton">
            <TicketCloseButton />
          </div>
        </div>
      );
    }
  }
};
