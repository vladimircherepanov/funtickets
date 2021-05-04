import DetailsButton from "./DetailsButton";
import Flight from "./Flight";
import FlightHeader from "./FlightHeader";

export default (props) => {
  const nnn = props.route.indexOf(
    props.route.find((el) => el.cityTo === props.destination)
  );

  const flyArrayTo = props.route.slice(0, nnn + 1);
  const flyArrayReturn = props.route.slice(nnn + 1, props.route.length);

  const flyToId = flyArrayTo[0].id;

  const flyTo = flyArrayTo[flyArrayTo.length - 1].cityTo;

  const flyReturn = () => {
    if (flyArrayReturn) {
      return flyArrayReturn[0].cityFrom;
    }
  };

  if (flyArrayReturn.length > 0) {
    return (
      <div className="flyHeaderReturn">
        <div>
          <h5>To {flyTo}</h5>

          <FlightHeader route={flyArrayTo} />
          <Flight route={flyArrayTo} />
          <DetailsButton route={flyArrayTo} />
        </div>
        <div>
          <h5>
            RETURN FROM <strong>{flyReturn()}</strong>
          </h5>
          <FlightHeader route={flyArrayReturn} />
          <Flight route={flyArrayReturn} />
          <DetailsButton route={flyArrayReturn} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flyHeader">
        <div>
          <h5>To {flyTo}</h5>
          <div>{props.price}</div>
          <FlightHeader route={flyArrayTo} />
          <Flight route={flyArrayTo} flyToId={flyToId} />
          <DetailsButton route={flyArrayTo} />
        </div>
      </div>
    );
  }
};
