import {getCurrency} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

export default () => {
    const dispatch = useDispatch();
    const currentCurr = [useSelector((state) => state.inputs.currency)];
    const currencyList = ["USD", "EUR", "RUB"];

    const finalCurrencyList = currencyList.filter(
        (el) => !currentCurr.includes(el)
    );
    return(
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
    )
}