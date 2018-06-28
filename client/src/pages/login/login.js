import React, { Component } from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Passport from "../../components/Passport";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Login extends Component {
state = {
    userEmail: "",
    userPassword: ""
    };

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
    };

    componentDidMount() {
    console.log("");
    API.getSingleArtist(this.props.match.params.id)
        .then(res => this.setState({ artist: res.data }))
        .catch(err => console.log(err));
 }

 render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.userEmail}
                onChange={this.handleInputChange}
                name="userEmail"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.userPassword}
                onChange={this.handleInputChange}
                name="userPassword"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.userEmail && this.state.userPassword)}
                onClick={console.log("sup")}
              >
                Login
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;