import { useSelector, useDispatch } from "react-redux";
import { paginateByPage } from "//src/redux/actions";

export default () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.inputs.currentPage);

  const flightData = useSelector((state) => state.flightData.flightData);

  const postPerPage = useSelector((state) => state.inputs.flightsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(flightData.data.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumbersFor10 = Math.ceil(pageNumbers.length / postPerPage);
  const indexOfLast = currentPage;
  const indexOfFirst = indexOfLast - 10;
  const slicedPageNumbers = pageNumbers.slice(indexOfFirst, indexOfLast);

  const previous = () => {
    if (currentPage === 1) {
      return <div></div>;
    } else {
      return (
        <li class="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() => dispatch(paginateByPage(currentPage - 1))}
          >
            PREVIOUS
          </a>
        </li>
      );
    }
  };

  const next = () => {
    if (currentPage === pageNumbers.length) {
      return <div></div>;
    } else {
      return (
        <li class="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() => dispatch(paginateByPage(currentPage + 1))}
          >
            NEXT
          </a>
        </li>
      );
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {previous()}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage ? "page-item active" : "page-item"
            }
          >
            <a
              href="!#"
              className="page-link"
              onClick={() => dispatch(paginateByPage(number))}
            >
              {number}
            </a>
          </li>
        ))}
        {next()}
      </ul>
    </nav>
  );
};
