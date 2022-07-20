import React, {useState, useEffect} from "react";
import axios from 'axios';

const CSRFToken = () => {

    

    const  getCookie=(name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
  
    let csrftoken = getCookie('csrftoken')

    useEffect(() => {
        const fetchData = async() => {
        try{
            await axios.get('http://localhost:8000/account/csrfcookie/');
        }catch(err){
                console.log('error')
        };
        fetchData();
        csrftoken = getCookie('csrftoken');
        console.log(csrftoken);
    }},[]);
    return(
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
        
    )
}

export default CSRFToken;