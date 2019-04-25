import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "./actions/auth";
import { fetchRooms } from "./actions/rooms";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const { login, fetchRooms } = this.props;
    login();
    fetchRooms();
  }
  render() {
    const { userName } = this.props;
    console.log('userName', userName);
    return (
      <div className="App">
        <div className="main">
          <img src={require("./images/logo.png")} alt="redux" />
          <h1>Your Reservation</h1>
          {/*<p>Name:{userName}</p>*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth, rooms } = state;
  const isFetching = auth.isFetching || rooms.isFetching;

  return {
    isFetching,
    userName: auth.user,
    accomodation: rooms.list
  };
};

const mapDispatchToProps = { login, fetchRooms };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
