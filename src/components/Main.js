import React, { Component } from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
export default class Main extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.recentEngagements();
  }
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'></Header>
        {React.cloneElement(this.props.children, this.props)}
      </Container>
    );
  }
}
