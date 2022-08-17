import React from "react";
import {useEffect, useState} from 'react';

function parameterOptions () {

    const [city, setCity] = useState();
    const [zip, setZip] = useState();
    const [state, setState] = useState();
    const [limit, setLimit] = useState();

    const handleCity = (e) => {
        const value = e.currentTarget.value;
        setCity(value);
    }
    const handleZip = (e) => {
        const value = e.currentTarget.value;
        setZip(value);
    }
    const handleState = (e) => {
        const value = e.currentTarget.value;
        setState(value);
    }
    const handleLimit = (e) => {
        const value = e.currentTarget.value;
        setLimit(value);
    }
    return(
        <div>
            <form>
                <label>City:</label>
                <input onChange={handleCity} type="text" id="city" name="city"/>
                <br/>
                <label>Zip:</label>
                <input onChange={handleZip} type="number" id="zip" name="zip"/>
                <br/>
                <label>State:</label>
                <input onChange={handleState} type="text" id="state" name="state"/>
                <br/>
                <label>Limit:</label>
                <input onChange={handleLimit} type="number" id="limit" name="limit"/>
                <br/>
                <button>Submit</button>
            </form>
            
            {city} <br/>
            {zip} <br/>
            {state} <br/>
            {limit} <br/>
            

        </div>
    )
}

export default parameterOptions;