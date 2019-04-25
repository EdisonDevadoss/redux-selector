import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "./actions/auth";
import { fetchRooms } from "./actions/rooms";
import { selectUserName, selectUserRoom } from "./reducers";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const { login, fetchRooms } = this.props;
    login();
    fetchRooms();
  }
  render() {
    const { isFetching, userName, accomodation } = this.props;
    console.log(accomodation);
    if (isFetching || isFetching === undefined)
      return <div className="loader" />;
    return (
      <div className="App">
        <div className="main">
          <img src={require("./images/logo.png")} alt="redux" />
          <h1>Your Reservation</h1>
          <p>Name: {userName}</p>

          <h2>Accomodation</h2>
          <p>
            <em>{accomodation.name}</em>
          </p>
          <p>
            <img src={accomodation.image} width={300} alt="accomodation" />
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth, rooms } = state;
  const isFetching = auth.isFetching || rooms.isFetching;

  // let userTitle;
  // if (auth.user.gender === "Male") {
  //   userTitle = "Mr.";
  // } else if (auth.user.maritalStatus === "Married") {
  //   userTitle = "Mrs.";
  // } else {
  //   userTitle = "Miss.";
  // }
  // const userName = `${userTitle} ${auth.user.firstName} ${auth.user.lastName}`;
  return {
    isFetching,
    userName: selectUserName(state),
    accomodation: selectUserRoom(state)
  };
};

const mapDispatchToProps = { login, fetchRooms };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
