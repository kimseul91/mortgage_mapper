import axios from 'axios';
import React from 'react';
import { useEffect } from 'react'; 
import keys from '../../rapidAPI.json';


function Collection () {

    let axiosCallResponse = {
        data:{
            count: 1,
            results: [
                {one:1,
                two:2},
                {three:3,
                four:4}
            ],
            ipsem: "lauren",
            shit: "shit1"
        }
    };

    const options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/v2/for-sale',
        params: {offset: '0', limit: '1', state_code: 'CA', city: 'Anaheim', sort: 'newest'},
        headers: {
            'X-RapidAPI-Key': keys['X-RapidAPI-Key'],
            'X-RapidAPI-Host': keys['X-RapidAPI-Host']
        }
    };
    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    //     axiosCallResponse = response.data;
    //     console.log("axioscall:" + axiosCallResponse);
    // }).catch(function (error) {
    //     console.error(error);
    // });


    let stringifyed = JSON.stringify(axiosCallResponse,null,4);
    console.log(stringifyed);

    return (
        <div>
            collecting some data
            and displaying data here
            <ul>
                <li>data 1</li>
            </ul>
            {stringifyed}
        </div>
    )
}
export default Collection;