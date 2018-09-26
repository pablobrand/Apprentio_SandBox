import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top text-uppercase" id="mainNav">
          <div className="container"><a href="#page-top" className="navbar-brand js-scroll-trigger"><i className="fa fa-code"></i>Cyber
              Monkeys LLC</a><button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="nav navbar-nav ml-auto">
                <li role="presentation" className="nav-item mx-0 mx-lg-1"><a href="#linkOne" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">LinkOne</a></li>
                <li role="presentation" className="nav-item mx-0 mx-lg-1"><a href="#linkTwo" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">LinkTwo</a></li>
                <li role="presentation" className="nav-item mx-0 mx-lg-1"><a href="#linkThree" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">LinkThree</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
