import { useDispatch, useSelector } from "react-redux";

import { getCurrency } from "//src/redux/actions";

import LanguageSwitcher from "./LanguageSwitcher";

export default () => {
  const dispatch = useDispatch();
  const currentCurr = [useSelector((state) => state.inputs.currency)];

  const currencyList = ["USD", "EUR", "RUB"];

  const finalCurrencyList = currencyList.filter(
    (el) => !currentCurr.includes(el)
  );

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="!#">
          FAKE<strong>T</strong>ICKETS
        </a>
        <div className="row">
          <div className="col">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="!#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentCurr}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {finalCurrencyList.map((elem, id) => {
                    return (
                      <li key={id}>
                        <div
                          className="dropdown-item"
                          onClick={() => dispatch(getCurrency(elem))}
                        >
                          {elem}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div className="col">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
