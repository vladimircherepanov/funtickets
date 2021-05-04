import { useSelector } from "react-redux";
import QRCode from "qrcode.react";

import jsPDF from "jspdf";
import { renderToString, renderToStaticMarkup } from "react-dom/server";

import TicketCloseButton from "./TicketCloseButton";

export default (props) => {
  const firstName = useSelector((state) => state.inputs.firstName);
  const secondName = useSelector((state) => state.inputs.secondName);
  const passportNumber = useSelector((state) => state.inputs.passportNumber);

  const qrValue = firstName + secondName + passportNumber;

  const qrcode = new QRCode("qr_code", {
    text: "https://cravecookie.com/",
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
      <h3>Time & Materials Statement of Work (SOW)</h3>
      <h4>General Information</h4>

      <table id="tab_customers" class="table table-striped" style={tableStyle}>
        <colgroup>
          <col span="1" style={colstyle} />
          <col span="1" style={colstyle} />
        </colgroup>
        <thead>
          <tr class="warning">
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
        "Dec 31, 2018"
      ]
    ];
    //pdf.addImage(img, "jpeg", 15, 40, 180, 160);
    pdf.fromHTML(string);
    pdf.save(qrValue);
  };

  console.log(props.flight);
  return (
    <div>
      <div id="qr_code"></div>
      <nav>
        <TicketCloseButton />
      </nav>
      <div>TICKET</div>
      <h2>
        from <strong>{props.flight.cityFrom}</strong> to{" "}
        <strong>{props.flight.cityTo}</strong>
      </h2>
      <h6>{firstName || "First Name"}</h6>
      <h6>{secondName || "Second Name"}</h6>
      <h6>{passportNumber || "Passport Number"}</h6>
      <button onClick={print}>print</button>

      <nav class="navbar fixed-bottom navbar-light bg-light align-center">
        <QRCode value={qrValue} renderAs="svg" />
      </nav>
    </div>
  );
};
