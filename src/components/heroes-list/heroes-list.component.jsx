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
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
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
            <HeroCard key={hero.id} name={hero.name} image={hero.thumbnail.path} description={hero.description} series={hero.series.items} />
          ))}
        </div>
      </div>
    );
  }
}

export default HeroesList;
