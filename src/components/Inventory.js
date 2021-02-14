import React, { Component } from 'react';
import AddFirshForm from './AddFishForm';

class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory!</h2>
                <AddFirshForm
                    addFish={this.props.addFish}>
                </AddFirshForm>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;