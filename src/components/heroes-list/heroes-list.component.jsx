import React, { Component } from "react";
import "./heroes-list.styles.scss";
import MD5 from "crypto-js/md5";
import HeroCard from "../hero-card/hero-card.component";

class HeroesList extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
      heroes: [],
    };
  }

  async componentDidMount() {
    const marvelUrl = "https://gateway.marvel.com/v1/public/characters?";
    let ts = Date.now();
    const publicKey = "eeeeb8cb5ea5a09c3a246629fe6116e3";
    const privateKey = "bef13beac133fa543b19319ffc17d736ede2956e";
    let hash = MD5(`${ts}${privateKey}${publicKey}`);
    let callString = `${marvelUrl}ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=24`;

    const response = await fetch(callString);
    const data = await response.json();

    this.setState({
      data: data,
      heroes: data.data.results,
    });
  }

  render() {
    return (
      <div className='hero-grid'>
        <div className='hero-grid-wrapper'>
          {this.state.heroes.map((hero) => (
            <HeroCard key={hero.id} name={hero.name} image={hero.thumbnail.path} description={hero.description} />
          ))}
        </div>
      </div>
    );
  }
}

export default HeroesList;
