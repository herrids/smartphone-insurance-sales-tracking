import React from "react";

class SalesForm extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(!this.props.smartphones) this.props.getSmartphones()
    }

    render() {
        return (
            <div>
                {this.props.invalidInput ? (<div><span>Bitte überprüfe deine Eingabe</span></div>) : ("")}
                <div className="salesForm">
                    <input 
                        id="inputFirstname"
                        type="text"
                        placeholder="Firstname"
                        value={this.props.item.firstname || ""}
                        onChange={this.props.updateFormInput.bind(this, this.props.item, "firstname")}
                    />
                    <input 
                        id="inputLastname"
                        type="text"
                        placeholder="Lastname"
                        value={this.props.item.lastname || ""}
                        onChange={this.props.updateFormInput.bind(this, this.props.item, "lastname")}
                    />
                    <input 
                        id="inputEmail"
                        type="email"
                        placeholder="Email"
                        value={this.props.item.email || ""}
                        onChange={this.props.updateFormInput.bind(this, this.props.item, "email")}
                    />
                    <input 
                        id="inputAge"
                        type="text"
                        placeholder="Age"
                        value={this.props.item.age || ""}
                        onChange={this.props.updateFormInput.bind(this, this.props.item, "age")}
                    />
                    <select 
                        id="inputSmartphone" 
                        onChange={this.props.updateFormInput.bind(this, this.props.item, "smartphone")}
                        
                        value={this.props.item.smartphone || "DEFAULT"} 
                    >
                        <option 
                            key={0} 
                            value={"DEFAULT"}
                            className="list-group-item" 
                            disabled
                        >
                            Bitte Smartphone Auswählen
                        </option>   
                        { this.props.smartphones ? this.props.smartphones.map((smartphone, i) => (
                            <option 
                                key={i+1} 
                                value={smartphone.DeviceName}
                                className="list-group-item" 
                            >
                                {smartphone.DeviceName}
                            </option>
                        )) : ""}
                    </select>
                    <button
                        className="submitNewSaleButton"
                        onClick={this.props.saveChanges.bind(this, this.props.item, this.props.sales, this.props.salesData)}
                    >
                        <span>Speichern</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default SalesForm;
