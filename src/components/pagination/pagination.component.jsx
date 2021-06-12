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
            <>
              <button className='prev-page-btn' onClick={this.props.prevPage}>
                {`< prev`}
              </button>
              <button className='first-page-btn' onClick={this.props.firstPage}>
                1
              </button>

              <button className='disabled-btn'>...</button>
            </>
          )}

          <p className='current-page'>{this.props.page}</p>

          {this.props.page >= this.props.totalPages ? (
            ""
          ) : (
            <>
              <button className='disabled-btn'>...</button>

              <button className='last-page-btn' onClick={this.props.lastPage}>
                {this.props.totalPages}
              </button>
              <button className='next-page-btn' onClick={this.props.nextPage}>
                {` next >`}
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Pagination;
