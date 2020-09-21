import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header className="input-group mb-3 container" style={{marginTop: "50px"}}>
        <input type="text" className="form-control" placeholder="Search farm name" aria-label="Search farm name" onChange={(e) => this.props.onChangeInput(e)} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.props.onClickSearch}>Search</button>
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.props.sortDropdownLabel}</button>
          <div className="dropdown-menu">
          <a className="dropdown-item" href="#" onClick={this.props.onClickDesc}>Descending (High To Low)</a>
          <a className="dropdown-item" href="#" onClick={this.props.onClickAsc}>Ascending (Low To High) </a>
          </div>
        </div>
      </header>
    )
  }
}