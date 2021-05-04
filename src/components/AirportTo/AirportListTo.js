import { useSelector, useDispatch } from "react-redux";
import ReactCountryFlag from "react-country-flag";

import { getAirportNameTo } from "//src/redux/actions";

export default () => {
  const dispatch = useDispatch();
  const airportData = useSelector((state) => state.inputs.airportDataTo);

  return (
    <div className="selectAirport">
      <table className="table table-hover">
        {airportData.locations.map((e, key) => {
          if (e.country) {
            return (
              <tbody key={e.id}>
                <tr
                  onClick={(event) =>
                    dispatch(
                      getAirportNameTo(
                        event.currentTarget.getAttribute("data-details"),
                        event.currentTarget.getAttribute("data-item")
                      )
                    )
                  }
                  data-item={e.id}
                  data-details={e.name + "(" + e.id + ")"}
                >
                  <td className="airport">
                    {e.name} ({e.id})
                  </td>
                  <td className="country">
                    {e.city.name}, {e.country.id}
                  </td>

                  <td className="flag">
                    <ReactCountryFlag
                      svg
                      countryCode={e.country.id}
                      style={{
                        fontSize: "1.3em"
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            );
          } else {
            return (
              <tbody key={e.id}>
                <tr
                  onClick={(event) =>
                    dispatch(
                      getAirportNameTo(
                        event.currentTarget.getAttribute("data-details"),
                        event.currentTarget.getAttribute("data-item")
                      )
                    )
                  }
                  data-item={e.id}
                  data-details={e.name + "(" + e.id + ")"}
                >
                  <td className="airport">
                    {e.name} ({e.id})
                  </td>
                  <td className="country">
                    {e.city.name}, {e.city.country.id}
                  </td>

                  <td className="flag">
                    <ReactCountryFlag
                      svg
                      countryCode={e.city.country.code}
                      style={{
                        fontSize: "1.3em"
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            );
          }
        })}
        <tbody>
          <tr onClick={() => dispatch(getAirportNameTo("ANYWHERE", ""))}>
            POH KUDA
          </tr>
        </tbody>
      </table>
    </div>
  );
};
