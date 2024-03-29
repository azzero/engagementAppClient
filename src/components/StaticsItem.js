import React, { Component } from "react";
import { Statistic } from "semantic-ui-react";
export default class StaticsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.statics) {
      return (
        <Statistic>
          <Statistic.Value>{this.props.statics}</Statistic.Value>
          <Statistic.Label>
            {" "}
            مجموع التزامات {this.props.special} هذا الشهر{" "}
          </Statistic.Label>
        </Statistic>
      );
    }
    return (
      <Statistic>
        <Statistic.Value>0</Statistic.Value>
        <Statistic.Label>
          {" "}
          مجموع التزامات {this.props.special} هذا الشهر{" "}
        </Statistic.Label>
      </Statistic>
    );
  }
}
