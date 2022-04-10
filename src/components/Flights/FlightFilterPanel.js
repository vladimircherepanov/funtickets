import { useSelector, useDispatch } from "react-redux";
import { carriers } from "../../sources/carriers";
import { selectAirline } from "../../redux/actions";

export  default () => {
    const dispatch = useDispatch();
    const flightData = useSelector((state) => state.flightData.flightData);

    const filteredData = flightData.map((e)=> {
        return (e.airlines[0])
    })


    const uniqueAirlines =_.union(filteredData)
/*
    console.log("unique", uniqueAirlines)
    console.log("sorted", _.filter(flightData, {airlines: ['VB']}))
    console.log("sorted1", flightData.filter((function (e) {
        return e.airlines = 'VB';
    })));

*/
    const airlineName = (IATA) => {
        const carr = carriers.find((item) => item.id === IATA);
        return carr.name;
    };

    const checkedInput = () => {

    }


    return (
    uniqueAirlines.map((e)=> {
        return (
            <div>
                <input type="checkbox" id={e} name={e}/>
                <label htmlFor={e}>{airlineName(e)}</label>

            </div>
        )
    }))
}