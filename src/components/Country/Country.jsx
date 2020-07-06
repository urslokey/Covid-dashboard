import React, { useState , useEffect } from 'react';
import { NativeSelect , FormControl} from '@material-ui/core';
import {  fetchCountry } from '../../api';
import styles from './Country.module.css'
const  Country=( { countryChange } ) => {

    const [fetchedCountry,setFetchedCountry] = useState([])

    useEffect(()=>{
        const fetchApi = async() =>{
            setFetchedCountry(await fetchCountry());
        }

        fetchApi()  
    },[setFetchedCountry]);


    
    return (
        <div>
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={ (e)=>countryChange(e.target.value) }>
                <option value="">Global</option>
                {fetchedCountry.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

        </div>
    )
}

export default Country
