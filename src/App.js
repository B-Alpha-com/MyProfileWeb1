import React, { Component } from "react";
import WebPage from "./WebPage";
import MyProfile from "./MyProfile";
import "./WebPage.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showImage: true,
      showProfile: true,
    };
  }
  handleClick = (e) => {
    if (this.state.showImage === true) {
      this.setState({ showImage: false });
    } else {
      this.setState({ showImage: true });
    }
  };
  handleClickProfile = (e) => {
    if (this.state.showProfile === true) {
      this.setState({ showProfile: false });
    } else {
      this.setState({ showProfile: true });
    }
  };
  render() {
    const Condition = this.state.showImage;
    const showProfile = this.state.showProfile;
    return showProfile ? (
      <div className={Condition ? "App" : "App2"}>
        <WebPage
          onclick={this.handleClick}
          condition={Condition}
          onshow={(e) => this.handleClickProfile(e)}
        />
      </div>
    ) : (
      <div className="profile">
        <MyProfile onshow={(e) => this.handleClickProfile(e)} />
      </div>
    );
  }
}

export default App;
