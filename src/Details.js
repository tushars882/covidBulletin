import React from "react";
import axios from 'axios';
import Summary from "./Summary";
import Countries from "./Countries";

class Details extends React.Component{

    state={
        country:[],                 //using setState after response has come it will update these values
        global:[],
        currentDate:null,
        loading:true,               //it will be shown until api responds and our component renders
    }

   async componentDidMount(){
        const res = await axios.get("https://api.covid19api.com/summary");   
                //here axios is used to hit request and get to get the request that we have hit and using async await
        console.log(res);               //to check if the request is fulfilled or not
        this.setState({country: res.data.Countries});          //here we have updated our state's country with original countriesRoute->data->res that has been stored

        this.setState({global: res.data.Global});
        this.setState({currentDate:res.data.Date});
        this.setState({loading:false});             //after our component has rendered it disappears


    }

    render(){
        if(this.state.loading){                 //if loading is true then return loading means until we get the data
            return <h2>Loading....</h2>
        }
        return( 
            <div>
                <Summary summary={this.state.global} date={this.state.currentDate} />                 {/* here we haev passed global state to our summary */}

                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Total Confirmed cases</th>
                            <th>Total Recovered</th>
                            <th>Total deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.country.map(countryy=>(                 //here countryy will be individual countries
                            <Countries country={countryy} key={countryy.Country}/>            //here we have called Countries 
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}
export default Details;

//while we have imported the url we only require the data so we will only make use of components of data and leave other components