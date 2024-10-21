import { useState } from "react";
import "./Country.css"

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = ()=>{
        handleVisitedCountries(name)
    }
    return (
        <div className={`country ${visited && "visited-style"}`}>
            <h3 style={{ color: visited && "red" }} >Name: {name.common}</h3>
            <p>Flag:</p>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={passWithParams} >Mark Visited</button>
            <button onClick={()=>handleVisitedFlag(flags)}>Flag</button>
            <br />
            <button onClick={handleVisited}> {visited ? "Visited" : "Going"}</button>
            {/* <p>
                {visited ? "Visited" : "I will visit"}
            </p> */}
        </div>
    );
    };

    export default Country;