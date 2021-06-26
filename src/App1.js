import React from 'react';
import Cards from '../src/components/Cards/Cards';
import Charts from '../src/components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api';

class App1 extends React.Component{
    state = {
        data : {},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data : fetchedData , country: country});
    
    }
    render(){
         const { data, country } = this.state; 
        return(
            <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Charts data={data} country={country} />
            
            </div>
        );
    }
}
export default App1;