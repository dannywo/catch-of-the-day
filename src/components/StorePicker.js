import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';

class StorePicker extends Component {
    render() {
        return (
            // Allow multiple siblings
            <Fragment>
                <form action="" className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="Store Name" />
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;