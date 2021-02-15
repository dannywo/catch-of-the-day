import React, { Component } from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import SampleFishes from '../sample-fishes';


class App extends Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        // 1. take a copy of existing state
        const fishes = { ...this.state.fishes }
        // 2. add our new fish to the fishes var
        fishes[`fish${Date.now()}`] = fish;
        // 4. Set the new fishes object to state
        this.setState({
            fishes: fishes
        })
    }

    loadSampleFishes = () => {
        this.setState({ fishes: SampleFishes })
    }

    addToOrder = key => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. Either add to the order, or update the number in the array
        order[key] = order[key] + 1 || 1;
        // 3. call setState to update our state object
        this.setState({
            order: order
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {
                            Object.keys(this.state.fishes).map(key =>
                                <Fish
                                    key={key}
                                    // need to be passed again as my own prop
                                    index={key}
                                    details={this.state.fishes[key]}
                                    addToOrder={this.addToOrder}
                                />
                            )
                        }
                    </ul>
                </div>
                <Order />
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        )
    }
}

export default App;