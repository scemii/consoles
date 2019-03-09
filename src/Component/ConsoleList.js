import React, { Component } from "react";
import { connect } from "react-redux";
import { selectConsoleNintendo } from "../actions/index";

class ConsoleList extends Component {
  renderList() {
    return this.props.nintendo.map(nintendo => {
      return (
        <div className="item" key={nintendo.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.selectConsoleNintendo(nintendo);
              }}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">
            <p className="content">{nintendo.title}</p>
            <p className="content">{nintendo.annee}</p>
            <img src={nintendo.url} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { nintendo: state.nintendo };
};

export default connect(
  mapStateToProps,
  { selectConsoleNintendo }
)(ConsoleList);
