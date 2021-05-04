import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  loadFlightData,
  warningAlert,
  getAirportNameTo,
  loadMoreFlights
} from "../redux/actions";

export default () => {
  const dispatch = useDispatch();

  const fromAirport = useSelector((state) => state.inputs.airportCode);
  const toAirport = useSelector((state) => state.inputs.airportCodeTo);
  const arrivalDate = useSelector((state) => state.inputs.departureDate);
  const returnDate = useSelector((state) => state.inputs.arrivalDate);
  const currency = useSelector((state) => state.inputs.currency);
  const direct = useSelector((state) => state.inputs.direct);

  const loading = useSelector((state) => state.app.loading);

  const { t, i18n } = useTranslation();
  const current_locale = i18n.language;

  const getData = () => {
    dispatch(
      loadFlightData(
        fromAirport,
        toAirport,
        arrivalDate,
        returnDate,
        current_locale,
        currency,
        direct
      )
    );
    dispatch(loadMoreFlights(1));
  };

  const clickHandler = () => {
    if (fromAirport) {
      if (toAirport) {
        getData();
      } else {
        dispatch(getAirportNameTo("ANYWHERE", ""));
        getData();
      }
    } else {
      dispatch(warningAlert(true));
    }
  };

  if (loading) {
    return (
      <button className="btn btn-warning w-100 mt-1" type="disabled">
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-warning w-100 mt-1 searchButton"
        onClick={() => clickHandler()}
      >
        {t("find_button")}
      </button>
    );
  }
};
