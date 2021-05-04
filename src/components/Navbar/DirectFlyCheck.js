import { directFly } from "//src/redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const direct = useSelector((state) => state.inputs.direct);
  const dispatch = useDispatch();
  return (
    <div className="form-check mt-2">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onChange={() => dispatch(directFly(direct))}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Only direct
      </label>
    </div>
  );
};
