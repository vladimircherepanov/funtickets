import {
  GET_FROM,
  GET_TO,
  GET_AIRPORT_NAME,
  CLEAR_AIRPORT_NAME,
  GET_AIRPORT_TO_NAME,
  CLEAR_AIRPORT_TO_NAME,
  TOGGLE_CALENDAR,
  SELECT_ARRIVAL_DAY,
  SELECT_DEPARTURE_DAY,
  SELECT_ONE_WAY,
  CLEAR_DATES,
  GET_CURRENCY,
  GET_TICKET,
  CLEAR_TICKET,
  LOAD_AIRPORT_DATA,
  CLEAR_AIRPORT_DATA,
  LOAD_AIRPORT_TO_DATA,
  CLEAR_AIRPORT_TO_DATA,
  CLICK_TO,
  CLICK_FROM,
  GET_PASSENGER,
  PASSENGER_PANEL,
  PAGINATE_BY_PAGE,
  TICKET_OPEN,
  WARNING,
  LOAD_MORE_FLIGHTS,
  DIRECT_FLY,
  FLY_DETAILS_PANEL_TOGGLE,
  GET_DETAILS
} from "./types";

const initialState = {
  from: "",
  to: "",
  airportName: "",
  airportCode: "",
  airportNameTo: "",
  airportCodeTo: "",
  currency: "USD",
  ticket_id: "",
  calendarOpen: false,
  departureDate: "",
  arrivalDate: "",
  oneWay: false,
  airportData: [],
  airportDataTo: [],
  firstName: "",
  secondName: "",
  passportNumber: "",
  passengerPanelOpen: false,
  currentPage: 1,
  flightsPerPage: 10,
  ticketOpen: false,
  warning: false,
  clickedInput: false,
  direct: false,
  flyDetailsOpen: false,
  detailsId: ""
};

export const inputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FROM:
      return {
        ...state,
        from: action.payload,
        warning: false
      };
    case GET_TO:
      return {
        ...state,
        to: action.payload
      };

    case CLICK_TO:
      return {
        ...state,
        airportData: [],
        calendarOpen: false
      };

    case CLICK_FROM:
      return {
        ...state,
        airportDataTo: [],
        calendarOpen: false
      };
    case GET_AIRPORT_NAME:
      return {
        ...state,
        airportName: action.payload.airportName,
        airportCode: action.payload.airportCode
      };
    case GET_AIRPORT_TO_NAME:
      return {
        ...state,
        airportNameTo: action.payload.airportNameTo,
        airportCodeTo: action.payload.airportCodeTo
      };

    case CLEAR_AIRPORT_NAME:
      return {
        ...state,
        airportName: ""
      };
    case CLEAR_AIRPORT_TO_NAME:
      return {
        ...state,
        airportNameTo: ""
      };
    case TOGGLE_CALENDAR:
      return {
        ...state,
        calendarOpen: !action.payload.calendarOpen,
        airportDataTo: [],
        airportData: []
      };
    case SELECT_ARRIVAL_DAY:
      return {
        ...state,
        arrivalDate: action.payload.arrivalDate,
        oneWay: false
      };
    case SELECT_DEPARTURE_DAY:
      return {
        ...state,
        departureDate: action.payload.departureDate
      };
    case SELECT_ONE_WAY:
      return {
        ...state,
        oneWay: true,
        calendarOpen: false
      };
    case CLEAR_DATES:
      return {
        ...state,
        arrivalDate: "",
        departureDate: "",
        oneWay: false
      };
    case GET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    case GET_TICKET:
      return {
        ...state,
        ticket_id: action.payload
      };

    case CLEAR_TICKET:
      return {
        ...state,
        ticket_id: null,
        warning: false
      };

    case LOAD_AIRPORT_DATA:
      return {
        ...state,
        airportData: action.payload
      };
    case CLEAR_AIRPORT_DATA:
      return {
        ...state,
        airportData: []
      };
    case LOAD_AIRPORT_TO_DATA:
      return {
        ...state,
        airportDataTo: action.payload
      };
    case CLEAR_AIRPORT_TO_DATA:
      return {
        ...state,
        airportDataTo: []
      };
    case GET_PASSENGER:
      return {
        ...state,
        firstName: action.payload.firstName,
        secondName: action.payload.secondName,
        passportNumber: action.payload.passportNumber,
        passengerPanelOpen: false
      };
    case WARNING:
      return { ...state, warning: action.payload.warning };
    case PASSENGER_PANEL:
      return {
        ...state,
        passengerPanelOpen: !action.payload.passengerPanelOpen
      };
    case PAGINATE_BY_PAGE:
      return {
        ...state,
        currentPage: action.payload.pageNumber
      };
    case TICKET_OPEN:
      return {
        ...state,
        ticketOpen: !action.payload.ticketOpen
      };
    case LOAD_MORE_FLIGHTS:
      return {
        ...state,
        currentPage: action.payload.page
      };
    case DIRECT_FLY:
      return {
        ...state,
        direct: !action.payload.direct
      };
    case GET_DETAILS:
      return {
        ...state,
        detailsId: action.payload.detailsId
      };

    default:
      return state;
  }
};
