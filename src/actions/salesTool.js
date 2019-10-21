import salesToolService from "../services/salesTool"

export const GET_SMARTPHONES_SUCCESS = "GET_SMARTPHONES_SUCCESS"
export const GET_SMARTPHONES_ERROR = "GET_SMARTPHONES_ERROR"

export const getSmartphones = dispatch => {
    salesToolService.getSmartphones()
        .then(smartphones => {
            const salesData = smartphones.map(smartphone => {
                return {
                    smartphone: smartphone.DeviceName,
                    numberSales: 0
                }
            })
            dispatch({type: GET_SMARTPHONES_SUCCESS, smartphones, salesData})
        })
        .catch(err => dispatch({type: GET_SMARTPHONES_ERROR, err}))
} 

export const UPDATE_NEW_SALE = "UPDATE_NEW_SALE"

export const updateItem = item => {
    return { type: UPDATE_NEW_SALE, item }
}

export const SAVE_CHANGES = "SAVE_CHANGES"
export const INVALID_INPUT = "INVALID_INPUT"

export const saveChanges = (item, sales, salesData) => {
    for(const field in item) {
        if (field == "id") continue
        if (item[field] === "" || item[field].match(/^\s*$/)) 
            return { type: INVALID_INPUT}
        if (field=="email" && !item[field].match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) ) 
            return { type: INVALID_INPUT}
        if (field=="age" && (!item[field].match(/^[0-9]*$/) || item[field] < 18))
            return { type: INVALID_INPUT}
    }
    
    let salesCopy = sales.slice()
    if(item.id != undefined) {
        salesCopy[item.id] = item
    } else {
        item.id = sales.length
        salesCopy.push(item)
    }

    const salesDataCopy = updateSalesData(salesData, salesCopy)

    return { type: SAVE_CHANGES, salesCopy, salesDataCopy}
}

export const EDIT_ITEM = "EDIT_ITEM"

export const editItem = item => {
    return { type: EDIT_ITEM, item }
}

export const DELETE_ITEM = "DELETE_ITEM"

export const deleteItem = (index, sales, salesData) => {
    let salesCopy = sales.slice()
    salesCopy.splice(index, 1)

    const salesDataCopy = updateSalesData(salesData, salesCopy)

    return { type: DELETE_ITEM, salesCopy, salesDataCopy }
}

const updateSalesData = ( salesData, sales, ) => {
    let salesDataCopy = salesData.slice()
    
    salesDataCopy.forEach((data, i) => {
        data.numberSales = 0
        sales.forEach(sale => data.smartphone == sale.smartphone ? data.numberSales++ : null)
    })

    return salesDataCopy
}