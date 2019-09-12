import React from "react";

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mealInput: "",
      pushToCalendar: [],
      test: "test"
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getStoredMeals = this.getStoredMeals.bind(this);
    // this.sortDays = this.sortDays.bind(this);
  }
  handleClick(){
    console.log("this was clicked", event);
    console.log("date", event.path[1].firstChild.className);
    console.log("mealType", event.srcElement.className);
    //className="table-active" use to highlight box onclick
  }
  handleChange(){
    this.setState({
      mealInput: event.target.value
    });
  }
  handleSubmit() {
    event.preventDefault();
  }
  componentDidMount(){
    this.getStoredMeals();
    // console.log({this.state.meal[0].label ? this.state.meal[0].label : ""});
  }
  getStoredMeals(){
    fetch(`/API/dummy-meal-items.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({ meal: data.meals });
        console.log(this.state.meal);
        // this.sortDays();
      })
  }
  //  sortDays(){
  //   var copyOfMeal = this.state.meal;
  //    var mealPosition = 0;
  //    console.log("copy", copyOfMeal[mealPosition].date);
  //   var practiceArray = [];
  //   var datePosition = 0;
  //   var practice = ["2019-09-08", "2019-09-09", "2019-09-10", "2019-09-11", "2019-09-12", "2019-09-13", "2019-09-14"];
  //   while(mealPosition < 21){
  //     debugger;
  //       if(mealPosition < copyOfMeal.length){
  //         if (copyOfMeal[mealPosition].date === practice[datePosition] && copyOfMeal[mealPosition].mealTime === "Breakfast") {
  //           practiceArray.push(copyOfMeal[mealPosition]);
  //           mealPosition++;
  //         } else if (copyOfMeal[mealPosition].date === practice[datePosition] && copyOfMeal[mealPosition].mealTime === "Lunch") {
  //           practiceArray.push(copyOfMeal[mealPosition]);
  //           mealPosition++;
  //         } else if (copyOfMeal[mealPosition].date === practice[datePosition] && copyOfMeal[mealPosition].mealTime === "Dinner") {
  //           practiceArray.push(copyOfMeal[mealPosition]);
  //           mealPosition++;
  //         }
  //         mealPosition++;
  //       }

  //      else {
  //       practiceArray.push({
  //         "date": practice[datePosition],
  //         "mealTime": "Breakfast",
  //         "label": ""});
  //       practiceArray.push({
  //         "date": practice[datePosition],
  //         "mealTime": "Lunch",
  //         "label": ""
  //       });
  //       practiceArray.push({
  //         "date": practice[datePosition],
  //         "mealTime": "Dinner",
  //         "label": ""
  //       });
  //       mealPosition++;
  //     }
  //     datePosition++;
  //   }
  //   // console.log("copy", copyOfMeal);
  // }
  render(){
    if(!this.state.meal){
      return (
        <div>Loading</div>
      );
    } else if(this.state.meal){
      return (
        <div>
          <h3 className="text-center">September, 2019</h3>
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col"><i className="fas fa-utensils fa-2x"></i></th>
                <th scope="col">Breakfast</th>
                <th scope="col">Lunch</th>
                <th scope="col">Dinner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="2019-09-08" >Sun<br /> 08</th>
                <td className="breakfast" onClick={this.handleClick}>{this.state.meal[0].label}</td>
                <td className="lunch" onClick={this.handleClick}></td>
                <td className="dinner" onClick={this.handleClick}></td>
              </tr>
              <tr>
                <th scope="row" className="2019-09-09">Mon<br />09</th>
                <td className="breakfast" onClick={this.handleClick}></td>
                <td className="lunch" onClick={this.handleClick}></td>
                <td className="dinner" onClick={this.handleClick}></td>
              </tr>
              <tr>
                <th scope="row" className="2019-09-10">Tues<br />10</th>
                <td className="breakfast" onClick={this.handleClick}></td>
                <td className="lunch" onClick={this.handleClick}></td>
                <td className="dinner" onClick={this.handleClick}></td>
              </tr>
              <tr>
                <th scope="row" className="2019-09-11">Wed<br />11</th>
                <td className="breakfast" onClick={this.handleClick}></td>
                <td className="lunch" onClick={this.handleClick}></td>
                <td className="dinner" onClick={this.handleClick}></td>
              </tr>
              <tr>
                <th scope="row" className="2019-09-12">Thurs<br />12</th>
                <td className="breakfast" onClick={this.handleClick}></td>
                <td className="lunch" onClick={this.handleClick}></td>
                <td className="dinner" onClick={this.handleClick}></td>
              </tr>
              <tr>
                <th scope="row" className="2019-09-13">Fri<br />13</th>
                <td className="breakfast" onClick={this.handleClick}></td>
                <td className="lunch" onClick={this.handleClick}></td>
                <td className="dinner" onClick={this.handleClick}></td>
              </tr>
              <tr>
                <th scope="row" className="2019-09-14">Sat<br />14</th>
                <td className="breakfast" onClick={this.handleClick}></td>
                <td className="lunch" onClick={this.handleClick}></td>
                <td className="dinner" onClick={this.handleClick}></td>
              </tr>
            </tbody>
          </table>
          <form className="form-inline text-align-center" onSubmit={this.handleSubmit}>
            <div className="form-group mx-sm-3 mb-2 mr-2 ml-5">
              <input required onChange={this.handleChange} type="text" className="form-control" placeholder="Add Meal" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Add</button>
          </form>
          <button type="submit" className="btn btn-primary mb-2 mr-2 ml-5">Previous Week</button>
          <button type="submit" className="btn btn-primary mb-2 ml-4">Next Week</button>
        </div>
      );
    }
  }

}

export default Calendar;