import React from "react";
import Landing from "./Landing";
import Show from "./Show";

export default class App extends React.Component {
  state = {
    currentScreen: "landing"
  };

  switchScreen = screen => {
    this.setState({ currentScreen: screen });
  };

  renderScreen = () => {
    if (this.state.currentScreen === "landing") {
      return <Landing switchScreen={this.switchScreen} />;
    } else if (this.state.currentScreen === "running") {
      return <Show switchScreen={this.switchScreen} />;
    }
  };

  render() {
    return this.renderScreen()
  }
}
