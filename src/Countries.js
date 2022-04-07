import React from "react";

class Countries extends React.Component{
    
    render(){

        const {country}=this.props;
        return (
          <tr>
            <td>{country.Country}</td>
            <td>{country.TotalConfirmed}</td>
            <td>{country.TotalRecovered}</td>
            {/**for these we made use of map for like a for loop perhaps in details  */}
            <td>{country.TotalDeaths}</td>
          </tr>
        );
    }

}
export default Countries;