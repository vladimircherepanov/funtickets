import { useSelector, useDispatch } from "react-redux";
import * as Icon from "react-bootstrap-icons";

import { sortFlightData } from "//src/redux/actions";

export default () => {
  const dispatch = useDispatch();

  const flightData = useSelector((state) => state.flightData.flightData);
  const sortByDurationDecr = useSelector(
    (state) => state.flightData.sortDecreased
  );
  const sortDecreased = useSelector((state) => state.flightData.sortDecreased);

  const sortPic = () => {
    if (!sortDecreased) {
      return <Icon.ArrowUp />;
    } else {
      return <Icon.ArrowDown />;
    }
  };
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
        <button
          className="btn btn-success"
          onClick={() => dispatch(sortFlightData(sortDecreased, flightData))}
        >
          SORT BY PRICE {sortPic()}
        </button>
      </div>
    );
  }
};
