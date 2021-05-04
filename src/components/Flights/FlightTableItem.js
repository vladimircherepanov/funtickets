import { useDispatch, useSelector } from "react-redux";
import FlightRoutes from "./FlightRoutes";
import { getTicket } from "//src/redux/actions";

export default (props) => {
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.inputs.currency);

  const con = props.data.map((e) => {
    return (
      <div className="flightTableItem" key={e.id}>
        <div key={e.id} className="row vertical-center">
          <div className="col-sm-12 col-md-10">
            <FlightRoutes route={e.route} destination={e.cityTo} />
          </div>
          <div className="col-sm-12 col-md-2  price">
            <div className="row">
              <h2>
                {e.price} {currency}
              </h2>
            </div>
            <button
              className="btn btn-warning"
              onClick={() => dispatch(getTicket(e.id))}
            >
              SELECT
            </button>
          </div>
        </div>
      </div>
    );
  });
  return con;
};
