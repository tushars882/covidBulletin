import React from "react";


class Summary extends React.Component{
    render(){

        const {summary,date}=this.props
        return (
          <div className="row">
            <div className="NewConfirmed">
              <h1>New Cases</h1>
              <h2>{summary.NewConfirmed}</h2>
              {/* <h3>{summary.Date}</h3> */}{" "}
              {/*as this date is not user readable so weconvert this into string by maling a new date object and passing this date to it and then * */}
              <h3>{new Date(date).toDateString()}</h3>
            </div>

            <div className="TotalConfirmed">
              <h1>Total Confirmed</h1>
              <h2>{summary.TotalConfirmed}</h2>
              <h3>{new Date(date).toDateString()}</h3>
            </div>

            <div className="NewDeaths">
              <h1>New Deaths</h1>
              <h2>{summary.NewDeaths}</h2>
              <h3>{new Date(date).toDateString()}</h3>
            </div>

            <div className="TotalDeaths">
              <h1>Total Deaths</h1>
              <h2>{summary.TotalDeaths}</h2>
            </div>
            
            <div className="TotalRecovered">
              <h1>Total Recovered</h1>
              <h2>{summary.TotalRecovered}</h2>
            </div>
          </div>
        );

    }
}
export default Summary              //we have exported it t Details