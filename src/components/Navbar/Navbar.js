import CurrencySwitcher from "./CurrencySwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

export default () => {
  return (
    <nav className="navbar navbar-light">
        <a className="navbar-brand" href="!#">FAKE<strong>T</strong>ICKETS</a>
        <div className="row">
          <div className="col">
            <CurrencySwitcher/>
          </div>
          <div className="col">
            <LanguageSwitcher />
          </div>
        </div>
    </nav>
  );
};
