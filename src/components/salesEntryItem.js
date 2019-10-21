import React from "react";

function SalesEntryItem (props) {
  return (
      <div className="salesEntryItem">
        <div>
          <span>{props.item.firstname} </span>
          <span>{props.item.lastname} </span>
          <span>{props.item.age} </span>
          <span>{props.item.smartphone} </span>
        </div>
        <div>
          <button
            className="submitNewSaleButton"
            onClick={props.editItem.bind(this, props.item)}
          >
            <span>Ändern</span>
          </button>
          <button
            className="submitNewSaleButton"
            onClick={props.deleteItem.bind(this, props.index, props.sales, props.salesData)}
          >
            <span>Löschen</span>
          </button>
        </div>
      </div>
  );

}

export default SalesEntryItem;
