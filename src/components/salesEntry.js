import React from "react";
import SalesEntryItemContainer from "../container/salesEntryItem"

function SalesEntry(props) {
  if(!props.sales.length){
    return (
      <div>
        <span>Noch keine Einträge</span>
      </div>
    )
  } else {
      return (
        <div>
          {props.sales.map((sale, i, sales) => (
            <SalesEntryItemContainer key={i} item={sale} sales={sales} index={i}/>
          ))}
        </div>
      )
  }

}

export default SalesEntry;
