import Navbar from "./components/Navbar/Navbar";
import FlightTable from "./components/Flights/FlightTable";
import SearchWrapper from "./components/SearchWrapper/SearchWrapper";
import Ticket from "./components/Ticket/Ticket";
import { useSelector } from "react-redux";

import "./styles/styles.css";

export default function App() {
  const ticket_id = useSelector((state) => state.inputs.ticket_id);

  if (ticket_id) {
    return <Ticket />;
  } else {
    return (
        <div>
          <Navbar />
          <SearchWrapper/>
          <FlightTable />
        </div>
    );
  }
}
