import DateSelection from "../DatePicker/DateSelection";
import FindAirport from "../AirportFrom/FindAirport";
import FindAirportTo from "../AirportTo/FindAirportTo";
import SearchButton from "../SearchButton";
import DirectFlyCheck from "../Navbar/DirectFlyCheck";

export default () => {
    return (
        <div className="searchWrapper">
            <div className="row">
                <div className="col-xs-12 col-sm-4 col-lg-3">
                    <FindAirport />
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-3">
                    <FindAirportTo />
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-3">
                    <DateSelection />
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-1">
                    <DirectFlyCheck />
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-2">
                    <SearchButton />
                </div>
            </div>
        </div>
    )
}