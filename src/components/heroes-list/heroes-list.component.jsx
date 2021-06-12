import React from "react";
import "./heroes-list.styles.scss";
import MD5 from "crypto-js/md5";
import HeroCard from "../hero-card/hero-card.component";
import Pagination from "../pagination/pagination.component";

class HeroesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: "",
      heroes: [],
      totalHeroes: 0,
      totalPages: 1,
      showOnPage: 24,
      offset: 0,
      page: 1,
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.firstPage = this.firstPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
  }

  nextPage() {
    this.setState(
      {
        page: this.state.page + 1,
        loading: true,
      },
      () => this.callApi(this.state.page)
    );
  }

  prevPage() {
    this.setState(
      {
        page: this.state.page - 1,
        loading: true,
      },
      () => this.callApi(this.state.page)
    );
  }

  firstPage() {
    this.setState(
      {
        page: 1,
        loading: true,
      },
      () => this.callApi(this.state.page)
    );
  }

  lastPage() {
    this.setState(
      {
        page: this.state.totalPages,
        loading: true,
      },
      () => this.callApi(this.state.page)
    );
  }

  async callApi() {
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
      totalHeroes: data.data.total,
      totalPages: Math.trunc(data.data.total / showOnPage + 1),
      loading: false,
    });
  }

  async componentDidMount() {
    this.callApi();
  }

  render() {
    if (this.state.heroes === []) {
      return (
        <div className='out-of-calls'>
          <p>Sorry, we're out of calls for today. 😢</p>
          <p>Please visit us tomorrow when Marvel allows us to fetch API again!</p>
        </div>
      );
    }

    return (
      <div className='hero-grid'>
        {this.state.loading ? (
          <div className='loader'></div>
        ) : (
          <div className='hero-component-wrapper'>
            <div className='list-info-wrapper'>
              <h3 className='hero-list-header'>All Heroes</h3>
              <div className='total-hero-info'>Total Heroes: {this.state.totalHeroes}</div>
            </div>
            <div className='hero-grid-wrapper'>
              {this.state.heroes.map((hero) => (
                <HeroCard key={hero.id} name={hero.name} image={hero.thumbnail.path} imageExtension={hero.thumbnail.extension} description={hero.description} series={hero.series.items} />
              ))}{" "}
            </div>
          </div>
        )}
        <Pagination page={this.state.page} nextPage={this.nextPage} prevPage={this.prevPage} totalPages={this.state.totalPages} firstPage={this.firstPage} lastPage={this.lastPage} />
      </div>
    );
  }
}

export default HeroesList;
