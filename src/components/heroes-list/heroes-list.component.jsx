import React from "react";
import "./heroes-list.styles.scss";
import MD5 from "crypto-js/md5";
import HeroCard from "../hero-card/hero-card.component";
import Pagination from "../pagination/pagination.component";

class HeroesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      heroes: [],
      totalPages: 0,
      showOnPage: 24,
      offset: 0,
      page: 1,
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1,
    });
  }

  prevPage() {
    this.setState({
      page: this.state.page - 1,
    });
  }

  async componentDidMount() {
    const marvelUrl = "https://gateway.marvel.com/v1/public/characters?";
    let ts = Date.now();
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = MD5(`${ts}${privateKey}${publicKey}`);
    let offset = this.state.page * this.state.showOnPage - this.state.showOnPage;
    let showOnPage = this.state.showOnPage;
    let callString = `${marvelUrl}ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${showOnPage}&offset=${offset}`;

    const response = await fetch(callString);
    const data = await response.json();

    this.setState({
      data: data,
      heroes: data.data.results,
      totalPages: data.data.total,
    });
  }

  async componentDidUpdate() {
    const marvelUrl = "https://gateway.marvel.com/v1/public/characters?";
    let ts = Date.now();
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = MD5(`${ts}${privateKey}${publicKey}`);
    let offset = this.state.page * 20 - 20;
    let showOnPage = this.state.showOnPage;
    let callString = `${marvelUrl}ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${showOnPage}&offset=${offset}`;

    const response = await fetch(callString);
    const data = await response.json();

    this.setState({
      data: data,
      heroes: data.data.results,
      totalPages: data.data.total,
    });
  }

  render() {
    return (
      <div className='hero-grid'>
        <Pagination page={this.state.page} nextPage={this.nextPage} prevPage={this.prevPage} />
        <div className='hero-grid-wrapper'>
          {this.state.heroes.map((hero) => (
            <HeroCard key={hero.id} name={hero.name} image={hero.thumbnail.path} description={hero.description} series={hero.series.items} />
          ))}
        </div>
        <Pagination page={this.state.page} nextPage={this.nextPage} prevPage={this.prevPage} />
      </div>
    );
  }
}

export default HeroesList;
