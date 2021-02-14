import React, { Component } from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';


class App extends Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        // 1. take a copy of existing state
        const fishes = { ...this.state.fishes }
        console.log(fishes);
        // 2. add our new fish to the fishes var
        fishes[`fish${Date.now()}`] = fish;
        // 4. Set the new fishes object to state
        this.setState({
            fishes: fishes
        })
        console.log("Adding a fish")
    }

    loadSampleFishes = () => {
        this.setState({ fishes: SampleFishes })
        alert("Loading Samples")
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
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