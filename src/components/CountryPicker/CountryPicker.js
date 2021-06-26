import React, {useState , useEffect} from 'react';
import { NativeSelect , FormControl } from '@material-ui/core';
import styles from '../CountryPicker/CountryPicker.module.css';
import { fetchCountries } from '../../api';
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries , setfetchedCountries] = useState([]);
    
    useEffect(() => {
        const fetchApi = async () => {
            setfetchedCountries(await fetchCountries());

        }
        fetchApi();

    },[setfetchedCountries ]);

    return (
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value ="">Worldwide</option>
        {fetchedCountries.map((country , i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;