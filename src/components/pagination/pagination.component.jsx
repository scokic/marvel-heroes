import React from "react";
import "./pagination.styles.scss";

class Pagination extends React.Component {
  render() {
    return (
      <div className='pagination-container'>
        <div className='pagination'>
          {this.props.page === 1 ? (
            ""
          ) : (
            <button className='prev-page-btn' onClick={this.props.prevPage}>
              -
            </button>
          )}
          <p className='current-page'>{this.props.page}</p>
          {this.props.page === 10 ? (
            ""
          ) : (
            <button className='next-page-btn' onClick={this.props.nextPage}>
              +
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pagination;
