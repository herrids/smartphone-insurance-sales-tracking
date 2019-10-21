import {VictoryPie, VictoryTheme} from "victory"
import React from "react";

function SalesVisualization(props) {
  const arr = []
  props.salesData.forEach(data => 
    data.numberSales != 0 ? arr.push({x: data.smartphone, y: data.numberSales}) : null
  )

  return arr.length == 0 ? (
    <div>
      <span>Keine Daten vorhanden</span>
    </div>
  ) : (
    <div style={{height: "300px", width: "600px"}}>
      <h2>Sales Statistiken</h2>
      <VictoryPie 
        data={arr}
        animate={{
          duration: 1000
        }}
        theme={VictoryTheme.material}
      />
    </div>
  )

}

export default SalesVisualization;
