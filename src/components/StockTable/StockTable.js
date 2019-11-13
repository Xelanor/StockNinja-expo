import React from "react";

import StockInfo from "../StockInfo/StockInfo";

const StockTable = props => {
  let data = props.stocks;
  let stocks = Object.keys(data).map(stock => {
    return (
      <>
        <tr
          onClick={() => {
            props.open === stock
              ? props.onOpenInfo("")
              : props.onOpenInfo(stock);
          }}
          key={stock}
          className="bg-blue-900 h-12 border-b border-stock2"
        >
          <td className="font-semibold" data-th="Hisse">
            {stock}
          </td>
          <td data-th="Tarih">{data[stock]["price"]}</td>
          <td data-th="Fiyat">{data[stock]["dayLow"]}</td>
          <td data-th="Açılış">{data[stock]["open"]}</td>
        </tr>
        {props.open === stock ? <StockInfo stock={data[stock]} /> : null}
      </>
    );
  });
  return (
    <table className="w-full justify-center text-center">
      <thead>
        <tr className="bg-gray-900 text-gray-600 text-sm">
          <th></th>
          <th>Alış</th>
          <th>Satış</th>
          <th>Fark</th>
        </tr>
        {stocks}
      </thead>
    </table>
  );
};

export default StockTable;
