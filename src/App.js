import DateSelection from "./components/DatePicker/DateSelection";
import FindAirport from "./components/AirportFrom/FindAirport";
import FindAirportTo from "./components/AirportTo/FindAirportTo";
import SearchButton from "./components/SearchButton";
import FlightTable from "./components/Flights/FlightTable";
import Ticket from "./components/Ticket/Ticket";
import { useSelector } from "react-redux";

import "./styles.css";
import DirectFlyCheck from "./components/Navbar/DirectFlyCheck";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const ticket_id = useSelector((state) => state.inputs.ticket_id);

  if (ticket_id) {
    return <Ticket />;
  } else {
    return (
      <div className="container">
        <div className="App">
          <Navbar />
          <div className="mainPanel">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <FindAirport />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <FindAirportTo />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4">
                <DateSelection />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-2">
                <DirectFlyCheck />
              </div>
              <div className="col-xs-12 col-sm-12 col-lg-6">
                <SearchButton />
              </div>
            </div>
          </div>
          <FlightTable />
        </div>
      </div>
    );
  }
}
