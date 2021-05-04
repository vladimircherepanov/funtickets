import { useSelector, useDispatch } from "react-redux";
import { loadMoreFlights } from "//src/redux/actions";

export default () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.inputs.currentPage);
  const flightData = useSelector((state) => state.flightData.flightData);

  const postPerPage = useSelector((state) => state.inputs.flightsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(flightData.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  if (flightData.length !== 0) {
    if (current !== pageNumbers.length) {
      return (
        <div
          className="btn btn-warning mt-2 mb-3"
          onClick={() => dispatch(loadMoreFlights(current + 1))}
        >
          LOAD MORE
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
};
