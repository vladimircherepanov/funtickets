import { useTranslation } from "react-i18next";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { DateUtils } from "react-day-picker";
import { selectArrivalDate, selectDepartureDate } from "//src/redux/actions";

import { useDispatch, useSelector } from "react-redux";
import CalendarButton from "./CalendarButton";
import ClearDatesButton from "./ClearDatesButton";

const WEEKDAYS_SHORT = {
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
};
const MONTHS = {
  ru: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};

const WEEKDAYS_LONG = {
  ru: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ],
  en: ["Sunday", "Monday", "Tuesday", "Wed", "Giovedì", "Friday", "Saturday"]
};

const FIRST_DAY_OF_WEEK = {
  ru: 1,
  en: 0
};
// Translate aria-labels
const LABELS = {
  ru: { nextMonth: "следующий месяц", previousMonth: "предыдущий месяц" },
  en: { nextMonth: "next month", previousMonth: "previous month" }
};

export default () => {
  const dispatch = useDispatch();
  const calendarOpen = useSelector((state) => state.inputs.calendarOpen);
  const departureDate = useSelector((state) => state.inputs.departureDate);
  const arrivalDate = useSelector((state) => state.inputs.arrivalDate);
  const { i18n } = useTranslation(["translation", "text"]);
  const current_locale = i18n.language;

  const selectedDays = [];

  const handleDayClick = (day, { selected }) => {
    if (departureDate) {
      if (departureDate > day) {
        dispatch(selectDepartureDate(day));
      } else {
        dispatch(selectArrivalDate(day));
      }
    } else {
      dispatch(selectDepartureDate(day));
    }
  };

  if (calendarOpen === true) {
    return (
      <div className="calendarStyle">
        <DayPicker
          locale={current_locale}
          months={MONTHS[current_locale]}
          weekdaysLong={WEEKDAYS_LONG[current_locale]}
          weekdaysShort={WEEKDAYS_SHORT[current_locale]}
          firstDayOfWeek={FIRST_DAY_OF_WEEK[current_locale]}
          labels={LABELS[current_locale]}
          onDayClick={handleDayClick}
          selectedDays={[arrivalDate, departureDate]}
          disabledDays={[{ before: new Date() }]}
        />
        <div className="row calendarButtons">
          <div className="col-4">
            <ClearDatesButton />
          </div>
          <div className="col-8">
            <CalendarButton />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
