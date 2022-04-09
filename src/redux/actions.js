import i18n from "../i18n";
import { formatDate } from "../utils/formatDate";

import {
  HIDE_LOADER,
  SHOW_LOADER,
  GET_FROM,
  GET_TO,
  LOAD_AIRPORT_DATA,
  LOAD_AIRPORT_TO_DATA,
  LOAD_FLIGHT_DATA,
  GET_AIRPORT_NAME,
  GET_AIRPORT_TO_NAME,
  CLEAR_AIRPORT_NAME,
  CLEAR_AIRPORT_DATA,
  CLEAR_AIRPORT_TO_NAME,
  CLEAR_AIRPORT_TO_DATA,
  TOGGLE_CALENDAR,
  SELECT_ARRIVAL_DAY,
  SELECT_DEPARTURE_DAY,
  SELECT_ONE_WAY,
  CLEAR_DATES,
  GET_CURRENCY,
  GET_TICKET,
  CLEAR_TICKET,
  CLICK_TO,
  CLICK_FROM,
  GET_PASSENGER,
  PASSENGER_PANEL,
  PAGINATE_BY_PAGE,
  SORT_FLIGHT_DATA,
  TICKET_OPEN,
  WARNING,
  LOAD_MORE_FLIGHTS,
  DIRECT_FLY,
  FLY_DETAILS_PANEL_TOGGLE,
  GET_DETAILS,
  GET_SORT_DIRECTION,
  SORT_BY_DURATION,
  SORT_BY_DURATION_DESR
} from "./types";

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function flyDetailsPanelToggle(flyDetailsOpen) {
  return { type: FLY_DETAILS_PANEL_TOGGLE, payload: { flyDetailsOpen } };
}

export function warningAlert(warning) {
  return { type: WARNING, payload: { warning } };
}

export function ticketOpen(ticketOpen) {
  return { type: TICKET_OPEN, payload: { ticketOpen } };
}

export function getDetails(detailsId) {
  return { type: GET_DETAILS, payload: { detailsId } };
}

export function getFromInputValue(from) {
  return async (dispatch) => {
    //dispatch(showLoader());
    const current_locale = i18n.language;

    const response = await fetch(
      "https://api.skypicker.com/locations?term=" +
        from +
        "&locale=" +
        current_locale +
        "-" +
        current_locale.toUpperCase() +
        "&location_types=airport&limit=10&active_only=true&sort=name"
    );
    const json = await response.json();
    setTimeout(() => {
      dispatch({ type: LOAD_AIRPORT_DATA, payload: json });
      dispatch({ type: GET_FROM, payload: from });
      //dispatch(hideLoader());
    }, 15);
  };
}

export function getFromInputValueTo(to) {
  return async (dispatch) => {
    //dispatch(showLoader());
    const current_locale = i18n.language;

    const response = await fetch(
      "https://api.skypicker.com/locations?term=" +
        to +
        "&locale=" +
        current_locale +
        "-" +
        current_locale.toUpperCase() +
        "&location_types=airport&limit=10&active_only=true&sort=name"
    );

    const json = await response.json();
    setTimeout(() => {
      dispatch({ type: LOAD_AIRPORT_TO_DATA, payload: json });
      dispatch({ type: GET_TO, payload: to });
      //dispatch(hideLoader());
    }, 15);
  };
}

export function getAirportName(airportName, airportCode) {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: GET_AIRPORT_NAME,
        payload: { airportName, airportCode }
      });
      dispatch({ type: CLEAR_AIRPORT_DATA });
    }, 15);
  };
}

export function getAirportNameTo(airportNameTo, airportCodeTo) {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: GET_AIRPORT_TO_NAME,
        payload: { airportNameTo, airportCodeTo }
      });
      dispatch({ type: CLEAR_AIRPORT_TO_DATA });
    }, 15);
  };
}

export function clearAirportName() {
  return { type: CLEAR_AIRPORT_NAME };
}

export function clearAirportData() {
  return { type: CLEAR_AIRPORT_DATA };
}

export function clearAirportNameTo() {
  return { type: CLEAR_AIRPORT_TO_NAME };
}

export function clearAirportDataTo() {
  return { type: CLEAR_AIRPORT_TO_DATA };
}

export function toggleCalendar(calendarOpen) {
  return { type: TOGGLE_CALENDAR, payload: { calendarOpen } };
}

export function selectArrivalDate(arrivalDate) {
  return { type: SELECT_ARRIVAL_DAY, payload: { arrivalDate } };
}

export function selectDepartureDate(departureDate) {
  return { type: SELECT_DEPARTURE_DAY, payload: { departureDate } };
}

export function selectOneWay() {
  return { type: SELECT_ONE_WAY };
}

export function clearDates() {
  return { type: CLEAR_DATES };
}

export function loadMoreFlights(page) {
  return { type: LOAD_MORE_FLIGHTS, payload: { page } };
}

export function getCurrency(currency) {
  return { type: GET_CURRENCY, payload: currency };
}

export function directFly(direct) {
  return { type: DIRECT_FLY, payload: { direct } };
}

export function getTicket(ticket_id) {
  return { type: GET_TICKET, payload: ticket_id };
}

export function clearTicket() {
  return { type: CLEAR_TICKET };
}

export function clickTo() {
  return { type: CLICK_TO };
}

export function clickFrom(clickedInput) {
  return { type: CLICK_FROM, payload: clickedInput };
}

export function getPassenger(firstName, secondName, passportNumber) {
  return {
    type: GET_PASSENGER,
    payload: { firstName, secondName, passportNumber }
  };
}

export function passenger(passengerPanelOpen) {
  return {
    type: PASSENGER_PANEL,
    payload: { passengerPanelOpen }
  };
}

export function sortFlightData(sortDirection, flightData) {
  if (!sortDirection) {
    const sortedData = flightData.sort(function (a, b) {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    });

    return async (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: SORT_FLIGHT_DATA,
          payload: { sortedData }
        });

        dispatch({ type: GET_SORT_DIRECTION, payload: { sortDirection } });
      }, 15);
    };
  } else {
    const sortedData = flightData.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });

    return async (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: SORT_FLIGHT_DATA,
          payload: { sortedData }
        });
        dispatch({ type: GET_SORT_DIRECTION, payload: { sortDirection } });
      }, 15);
    };
  }
}

export function sortFlightDataByDuration(sortDirection, flightData) {
  if (!sortDirection) {
    const sorted = flightData.sort(function (a, b) {
      if (a.duration.total < b.duration.total) {
        return 1;
      }
      if (a.duration.total > b.duration.total) {
        return -1;
      }
      return 0;
    });

    return async (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: SORT_BY_DURATION,
          payload: { sorted }
        });

        dispatch({ type: SORT_BY_DURATION_DESR, payload: { sortDirection } });
      }, 15);
    };
  } else {
    const sorted = flightData.sort(function (a, b) {
      if (a.duration.total > b.duration.total) {
        return 1;
      }
      if (a.duration.total < b.duration.total) {
        return -1;
      }
      return 0;
    });

    return async (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: SORT_BY_DURATION,
          payload: { sorted }
        });
        dispatch({ type: SORT_BY_DURATION_DESR, payload: { sortDirection } });
      }, 15);
    };
  }
}

export function paginateByPage(pageNumber) {
  return {
    type: PAGINATE_BY_PAGE,
    payload: { pageNumber }
  };
}

export function loadFlightData(
  fromAirport,
  toAirport,
  arrivalDate,
  returnDate,
  current_locale,
  currency,
  direct
) {
  const returnDateCalc = (returnDate) => {
    if (returnDate) {
      return (
        "&return_from=" +
        formatDate(returnDate).toString() +
        "&return_to=" +
        formatDate(returnDate).toString()
      );
    } else {
      return "";
    }
  };

  const arrivalDateCalc = (arrivalDate) => {
    if (arrivalDate) {
      return (
        "&date_from=" +
        formatDate(arrivalDate).toString() +
        "&date_to=" +
        formatDate(arrivalDate).toString()
      );
    } else {
      return (
        "&date_from=" +
        formatDate(new Date()) +
        "&date_to=" +
        formatDate(new Date())
      );
    }
  };

  const oneWaySelect = (returnDate) => {
    if (returnDate) {
      return "&flight_type=round";
    } else {
      return "&flight_type=oneway";
    }
  };

  const directSelect = (direct) => {
    if (direct) {
      return "&max_stopovers=0";
    } else {
      return "";
    }
  };

  return async (dispatch) => {
    dispatch(showLoader());

    const url =
      "https://tequila-api.kiwi.com/v2/search?flyFrom=" +
      fromAirport +
      "&to=" +
      toAirport +
      arrivalDateCalc(arrivalDate) +
      returnDateCalc(returnDate) +
      oneWaySelect(returnDate) +
      directSelect(direct) +
      "&partner=picky&v=3&locale=" +
      current_locale +
      "&curr=" +
      currency;

    try {
      const response = await fetch(url, {
        headers: {
          accept: "application/json",
          apikey: "74eRO0iVMRjO2-AlQsYE3xUQIhu63qJ0"
        }
      });
      const json = await response.json();
      setTimeout(() => {
        dispatch({ type: LOAD_FLIGHT_DATA, payload: json });
        dispatch(hideLoader());
        console.log(json);
      }, 15);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
}
