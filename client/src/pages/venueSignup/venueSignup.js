import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./venueSignup.css";
import HeroSignup from "../../components/HeroSignup";

class VenueSignUp extends Component {
  state = {
    venues: [],
    venuename: "",
    email: "",
    password: "",
    city: "",
    state: "",
    zipcode: "",
    website: "",
    facebook: "",
    phone: "",
    description: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadVenues = () => {
    API.getVenues()
      .then(res =>
        this.setState({
          venues: [],
          venuename: "",
          email: "",
          password: "",
          city: "",
          state: "",
          zipcode: "",
          website: "",
          facebook: "",
          phone: "",
          description: ""
        })
      )
      .catch(err => console.log(err));
  };

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
    if (this.state.venuename && this.state.email) {
      API.saveVenue({
        venuename: this.state.venuename,
        email: this.state.email,
        password: this.state.password,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        facebook: this.state.facebook,
        website: this.state.website,
        phone: this.state.phone,
        description: this.state.description
      })
        .then(res => this.loadVenues())
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
            <h6 className="signupColHead">Get free art for your walls </h6>
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
                value={this.state.venuename}
                onChange={this.handleInputChange}
                name="venuename"
                placeholder="Venue Name *"
              />
              <Input
                className="inputBox"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email *"
              />

              <Input
                className="inputBox"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password *"
              />

              <TextArea
                className="inputBox"
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Venue Description (Optional)"
              />

              <Input
                className="inputBox"
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City *"
              />

              <Input
                className="inputBox"
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="State *"
              />
              <Input
                className="inputBox"
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                name="zipcode"
                placeholder="Zipcode *"
              />
              <Input
                className="inputBox"
                value={this.state.website}
                onChange={this.handleInputChange}
                name="website"
                placeholder="Website *"
              />
              <Input
                className="inputBox"
                value={this.state.facebook}
                onChange={this.handleInputChange}
                name="facebook"
                placeholder="Facebook *"
              />
              <Input
                className="inputBox"
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="Phone *"
              />
              <FormBtn
                disabled={!(this.state.venuename && this.state.email)}
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

export default VenueSignUp;
