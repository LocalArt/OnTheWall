import React from "react";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import "./home.css";

const Home = () => (
  <div className="home-page">
    <div className="row justify-content-center">
      <button type="button" className="btn btn-outline-primary btn-host">
        Become a host
      </button>
      <button type="button" className="btn btn-outline-primary btn-artist">
        Become an artist
      </button>
    </div>

    <Hero backgroundImage="https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2016/01/main/hm_e16dcdfe62d081b7_spcms.jpg?itok=MZslClZ9">
      <h1>ON THE WALL</h1>
      <h2>Where artists and venues connect </h2>
    </Hero>
    <div className="row justify-content-center home-cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default Home;
