import React, { Component } from "react";
import axios from "axios";

import StockTable from "../../components/StockTable/StockTable";

class Homepage extends Component {
  state = {
    stocks: null,
    open: "SODA.IS"
  };

  componentDidMount() {
    axios
      .get(
        "https://my4wv99yv6.execute-api.us-east-1.amazonaws.com/default/fetch_stock_data"
      )
      .then(res => this.setState({ stocks: res.data }))
      .catch(err => console.log(err));
  }

  onOpenInfo = stock => {
    this.setState({ open: stock });
  };

  render() {
    if (!this.state.stocks) {
      return <div>yükleniyor</div>;
    }
    return (
      <div>
        <StockTable
          stocks={this.state.stocks}
          onOpenInfo={this.onOpenInfo}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default Homepage;
