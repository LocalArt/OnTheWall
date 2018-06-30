import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./contact.css";
import HeroSignup from "../../components/HeroSignup";

class Contact extends Component {
  state = {
    artist: { image: [] },
    message: "",
    userEmail: "",
    userName: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  componentDidMount() {
    console.log("");
    API.getSingleArtist(this.props.match.params.id)
      .then(res => this.setState({ artist: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name && this.state.email) {
  //     API.saveArtist({
  //       name: this.state.name,
  //       email: this.state.email,
  //       password: this.state.password,
  //       city: this.state.city,
  //       state: this.state.state,
  //       zipcode: this.state.zipcode,
  //       facebook: this.state.facebook,
  //       instagram: this.state.instagram,
  //       phone: this.state.phone,
  //       biography: this.state.biography
  //     })
  //       .then(res => this.loadArtists())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div className="home-page">
        <Container fluid>
          <HeroSignup />
          <Row>
            <Col size="md-3" />
            <Col size="md-6">
              {/* <Jumbotron
              name={this.state.artist.name}
              url={
                this.state.artist.image == false
                  ? "https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2016/01/main/hm_e16dcdfe62d081b7_spcms.jpg?itok=MZslClZ9"
                  : this.state.artist.image[0].url
              }
            /> */}

              <plaintext className="contact-header">
                {" "}
                Contact {this.state.artist.name}{" "}
              </plaintext>
              <form>
                <Input
                  className="inputBox"
                  style={{ paddingRight: "20px", marginLeft: "20px" }}
                  value={this.state.userName}
                  onChange={this.handleInputChange}
                  name="userName"
                  placeholder="Name *"
                />
                <Input
                  className="inputBox"
                  style={{ marginRight: "20px", marginLeft: "20px" }}
                  value={this.state.userEmail}
                  onChange={this.handleInputChange}
                  name="userEmail"
                  placeholder="Email *"
                />

                <TextArea
                  className="inputBox"
                  style={{
                    height: "300px",
                    marginRight: "20px",
                    marginLeft: "20px"
                  }}
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  name="message"
                  placeholder="Message (Optional)"
                />

                <button
                  style={{
                    marginLeft: "20px",
                    textAlign: "center",
                    height: "42px",
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: " 0px 20px"
                  }}
                >
                  <Link
                    to={"/artist/" + this.state.artist._id}
                    className="link"
                  >
                    Contact Artist
                  </Link>
                </button>
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
      </div>
    );
  }
}

export default Contact;
