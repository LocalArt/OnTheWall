import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./artistSignup.css";
import HeroSignup from "../../components/HeroSignup";
import { height } from "window-size";

class ArtistSignUp extends Component {
  state = {
    artists: [],
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    zipcode: "",
    facebook: "",
    instagram: "",
    phone: "",
    biography: "",
    id: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadArtists = () => {
  //   API.getArtists()
  //     .then(res =>
  //       this.setState({
  //         artists: [],
  //         name: "",
  //         email: "",
  //         password: "",
  //         city: "",
  //         state: "",
  //         zipcode: "",
  //         facebook: "",
  //         instagram: "",
  //         phone: "",
  //         biography: ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email) {
      API.saveArtist({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        facebook: this.state.facebook,
        instagram: this.state.instagram,
        phone: this.state.phone,
        biography: this.state.biography
      })
        .then(res => {
          this.props.history.push(`/artist/${res.data._id}`);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <HeroSignup />
        <Row>
          <Col size="sm-2" />
          {/* about */}
          <Col size="sm-3">
            <h3 className="signupColHead">Join our artists</h3>
            <p className="signupCol">
              consectetur adipiscing elit. Integer quis enim sit amet massa
              pellentesque pretium quis in ligula. Donec vel euismod orci. Nulla
              pharetra rhoncus est, vel egestas nisl finibus ac. Sed malesuada
              erat non ligula commodo mollis. Aliquam tincidunt est nec mi
              condimentum, eu convallis quam auctor. Nullam pharetra tincidunt
              lacus ac dapibus. Nam consequat risus tellus, quis suscipit ipsum
              euismod et. Curabitur malesuada porta ex, non bibendum risus
              imperdiet maximus. Praesent ipsum metus, volutpat eget ullamcorper
              quis, sollicitudin id purus.{" "}
            </p>
          </Col>
          {/* form */}
          <Col size="sm-4">
            <form>
              <Input
                className="inputBox"
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name*"
              />
              <Input
                className="inputBox"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email*"
              />

              <Input
                className="inputBox"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password*"
              />

              <TextArea
                className="inputBox"
                value={this.state.biography}
                onChange={this.handleInputChange}
                name="biography"
                placeholder="Synopsis (Optional)"
              />

              <Input
                className="inputBox"
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City*"
              />

              <Input
                className="inputBox"
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="State*"
              />
              <Input
                className="inputBox"
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                name="zipcode"
                placeholder="Zipcode*"
              />
              <Input
                className="inputBox"
                value={this.state.facebok}
                onChange={this.handleInputChange}
                name="facebook"
                placeholder="Facebook*"
              />
              <Input
                className="inputBox"
                value={this.state.instagram}
                onChange={this.handleInputChange}
                name="instagram"
                placeholder="Instagram*"
              />
              <Input
                className="inputBox"
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="Phone*"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                SUBMIT
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default ArtistSignUp;
