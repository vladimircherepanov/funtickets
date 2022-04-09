import {useDispatch, useSelector} from "react-redux";
import QRCode from "qrcode.react";
import TicketDetails from "./TicketDetails";
import randomTicketNo from "../../utils/randomTicketNo";
import randomBookingNo from "../../utils/randomBookingNo";
import {convertDate} from "../../utils/convertDate";

import jsPDF from "jspdf";
import { renderToString, renderToStaticMarkup } from "react-dom/server";

import TicketCloseButton from "./TicketCloseButton";

export default (props) => {
  const firstName = useSelector((state) => state.inputs.firstName);
  const secondName = useSelector((state) => state.inputs.secondName);
  const passportNumber = useSelector((state) => state.inputs.passportNumber);
  const dispatch = useDispatch();
  const flightData = useSelector((state) => state.flightData.flightData);
  const ticket_id = useSelector((state) => state.inputs.ticket_id);
  const ticketStatus = useSelector((state) => state.inputs.ticketOpen);

  const qrValue = firstName + secondName + passportNumber;

  const qrcode = new QRCode("qr_code", {
    text: qrValue,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff"
  });

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const colstyle = {
    width: "30%"
  };
  const tableStyle = {
    width: "100%"
  };

  const Prints = () => (
    <div style={styles}>
      <h3>E-TICKET ITINERARY RECEIPT</h3>
      <table>
        <tbody>
        <tr>
          <td>SELLING DATE</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>

      <table id="tab_customers" className="table table-striped" style={tableStyle}>
        <colgroup>
          <col span="1" style={colstyle} />
          <col span="1" style={colstyle} />
        </colgroup>
        <thead>
          <tr className="warning">
            <th>SOW Creation Date</th>
            <th>SOW Start Date</th>
            <th>Project</th>
            <th>Last Updated</th>
            <th>SOW End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dec 13, 2017</td>
            <td>Jan 1, 2018</td>
            <td>NM Connect - NMETNMCM</td>
            <td>Dec 13, 2017</td>
            <td>Dec 31, 2018</td>
          </tr>
        </tbody>
      </table>
      <p>
        This is a Time and Materials Statement of Work between Northwestern
        Mutual Life Insurance Company and Infosys with all general terms and
        conditions as described in the current Master Agreement and its related
        documents
      </p>
    </div>
  );

  const print = () => {
    const string = renderToString(<Prints />);
    const img = renderToStaticMarkup(<QRCode value={qrValue} />);
    const pdf = new jsPDF("p", "mm", "a4");
    const columns = [
      "SOW Creation Date",
      "SOW Start Date",
      "Project",
      "Last Updated",
      "SOW End Date"
    ];
    var rows = [
      [
        "Dec 13, 2017",
        "Jan 1, 2018",
        "ABC Connect - ABCXYZ",
        "Dec 13, 2017",
        "Dec 31, 2010"
      ]
    ];
    //pdf.addImage(img, "jpeg", 15, 40, 180, 160);
    pdf.fromHTML(string);
    pdf.save(qrValue);
  };

  console.log(props.flight);

  const flight = flightData.find((item) => item.id === ticket_id);

  return (
    <div>

      <nav>
        <TicketCloseButton />
      </nav>
      <div>TICKET</div>
      <h2>
        from <strong>{props.flight.cityFrom}</strong> to{" "}
        <strong>{props.flight.cityTo}</strong>
      </h2>
      <h6>{props.flight.airline}-{props.flight.flight_no}</h6>
      <h6>{firstName || "First Name"}</h6>
      <h6>{secondName || "Second Name"}</h6>
      <h6>{passportNumber || "Passport Number"}</h6>
      SELLING DATE
      <h5>{convertDate(Date.now())}</h5>
      TICKET NUMBER
      <h5>{randomTicketNo()}</h5>
      PNR LOCATOR
      <h5>{randomBookingNo().toUpperCase()}</h5>
      AIRLINE LOCATOR
      <h5>{randomBookingNo().toUpperCase()}</h5>


      <button onClick={print}>print</button>
      <div>
        <TicketDetails
            route={flight.route}
            destination={flight.cityTo}
        />
      </div>
      <nav className="">
        <QRCode value={qrValue} renderAs="svg" />
      </nav>
    </div>
  );
};
