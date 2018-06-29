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

 handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.findByEmail({
        email: this.state.email,
        password: this.state.password,
      })
        .then(res => {
          this.props.history.push(`/venue/${res.data._id}`);
        })
        .catch(err => console.log(err));
    }
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
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
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