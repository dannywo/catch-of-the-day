import React, { Component } from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import SampleFishes from '../sample-fishes';
import base from "../base";


class App extends Component {
    state = {
        fishes: {},
        order: {}
    }

    componentDidMount() {
        console.log("Mounted")
        const { params } = this.props.match;
        // first reinstate localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    }

    componentDidUpdate() {
        console.log("Did update")
        console.log(this.state.order);
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        console.log("Unmounted")
        base.removeBinding(this.ref);
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
                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                />
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        )
    }
}

export default App;