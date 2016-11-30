import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {foo: 'bar'}
    }

    render() {
      return (
        <div id="main" className="container-fluid">
          <h1>Hello {this.state.foo} world!</h1>
        </div>
        );
    }
}


export default Main