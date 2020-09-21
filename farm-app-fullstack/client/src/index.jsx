import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.jsx'
import Farms from './Farms.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      farms: [],
      searchFarmName: null,
      revenueSortOrder: "revenue=desc",
    };
  }

  async fetchFarmData () {
    try {
      await this.setState({error: false});
      await this.setState({loading: true});
      const farmNameQueryParam = this.state.searchFarmName ? `name=${this.state.searchFarmName}` : "";
      const revenueSortOrderQueryParam = this.state.revenueSortOrder ? this.state.revenueSortOrder : "revenue=desc";
      const res = await fetch(`http://localhost:8000/farms?${farmNameQueryParam}&${revenueSortOrderQueryParam}`);
      const resFarms = await res.json();
      await this.setState({farms: resFarms.farms});
      console.log(res);
    } catch (e) {
      debugger;
      await this.setState({error: true});
      console.error(e);
    } finally {
      this.setState({loading: false});
    }
  }

  async componentDidMount() {
    this.fetchFarmData();
  };

  body() {
    if (this.state.error) {
      return (
        <div className="container" style={{textAlign: "center", marginTop: "50px"}}>
          <h1>Oops. There was an error.</h1>
          <h1>Please try again.</h1>
        </div>
      );
    } else if (this.state.farms.length) {
      return(
        <Farms farms={this.state.farms}/>
      );
    } else if (!this.state.farms.length && !this.state.loading) {
      return(
        <div className="container" style={{textAlign: "center", marginTop: "50px"}}>
          <h1>No Farms Found</h1>
        </div>
      );
    } else if (this.state.loading) {
      return(
        <div className="container" style={{textAlign: "center", marginTop: "50px"}}>
          <h1>Loading Farms...</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Header 
          onClickSearch={this.fetchFarmData.bind(this)}
          onChangeInput={(e)=>{this.setState({searchFarmName: e.target.value})}}
          onClickDesc={async ()=>{ await this.setState({revenueSortOrder: "revenue=desc"}); this.fetchFarmData();}}
          onClickAsc={async ()=>{ await this.setState({revenueSortOrder: "revenue=asc"}); this.fetchFarmData();}}
          sortDropdownLabel={this.state.revenueSortOrder.includes("desc") ? "Descending (High To Low)" : "Ascending (Low To High) "}
        />
        {this.body()}
      </div>
    )
  }
}

const appContainer = document.querySelector('#app');
ReactDOM.render(<App />, appContainer);