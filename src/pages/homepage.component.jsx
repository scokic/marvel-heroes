import React, { Component } from "react";
import "./homepage.styles.scss";
import HeroesList from "../components/heroes-list/heroes-list.component";
import PageHeader from "../components/page-header/page-header.component";

class Homepage extends Component {
  render() {
    return (
      <div>
        <PageHeader name='Marvel Heroes' description="Check out all Marvel heroes directly from Marvel's database!" />
        <HeroesList />;
      </div>
    );
  }
}

export default Homepage;
