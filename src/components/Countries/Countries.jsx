import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = country => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedFlag = flag => {
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h3>Visited Country: {visitedCountries.length} </h3>
            <div className="flag-container">
                {
                    visitedFlag.map((flag,idx )=> <img className="flag" key={idx} src={flag.png} alt="" />
                    )
                }
            </div>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3} >{country}</li>)
                }
            </ul>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.cca2}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;