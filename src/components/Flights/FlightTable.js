import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader";
import FlightTableItem from "./FlightTableItem";
//import FlightsPagination from "./FlightsPagination";
import { sortFlightData, sortFlightDataByDuration } from "//src/redux/actions";
import LoadMoreButton from "./LoadMoreButton";
import * as Icon from "react-bootstrap-icons";

export default () => {
  const dispatch = useDispatch();

  const flightData = useSelector((state) => state.flightData.flightData);
  const loading = useSelector((state) => state.app.loading);
  const currentPage = useSelector((state) => state.inputs.currentPage);
  const postPerPage = useSelector((state) => state.inputs.flightsPerPage);
  const sortDecreased = useSelector((state) => state.flightData.sortDecreased);
  const indexOfLastPost = currentPage * postPerPage;

  const indexOfFirstPost = 1; //indexOfLastPost - postPerPage;
  //const currentData = flightData;

  //window.addEventListener("scroll", function () {
  //let x = window.scrollY;

  const sortByDurationDecr = useSelector(
    (state) => state.flightData.sortByDurationDecr
  );

  const sortPic = () => {
    if (!sortDecreased) {
      return <Icon.ArrowUp />;
    } else {
      return <Icon.ArrowDown />;
    }
  };

  const sortByDurationPic = () => {
    if (sortByDurationDecr) {
      return <Icon.ArrowUp />;
    } else {
      return <Icon.ArrowDown />;
    }
  };

  const resultsQTY = () => {
    if (flightData.length === 0) {
      return 0;
    } else {
      return flightData.length - 1;
    }
  };

  //});

  if (loading) {
    return <Loader />;
  }

  if (flightData.length === 0) {
    return <div></div>;
  } else {
    //console.log(
    // "currData",
    // currentData.data.slice(indexOfFirstPost, indexOfLastPost)
    //);
    //console.log("indexOfLastPost", indexOfLastPost);

    return (
      <div>
        <div className="mb-1">{resultsQTY()} results </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-success"
              onClick={() =>
                dispatch(sortFlightData(sortDecreased, flightData))
              }
            >
              SORT BY PRICE {sortPic()}
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-success"
              onClick={() =>
                dispatch(
                  sortFlightDataByDuration(sortByDurationDecr, flightData)
                )
              }
            >
              SORT BY DURATION {sortByDurationPic()}
            </button>
          </div>
        </div>

        <FlightTableItem
          data={flightData.slice(indexOfFirstPost, indexOfLastPost)}
        />
        <LoadMoreButton />
      </div>
    );
  }
};
