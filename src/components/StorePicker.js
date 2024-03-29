import React, { Fragment, Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  // alternative way of referencing the instance of the component
  // constructor() {
  //     super();
  //     this.goToStore = this.goToStore.bind(this);
  // }

  // Creates react ref to use store name input
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      // Allow multiple siblings
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
