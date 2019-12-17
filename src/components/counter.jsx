import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
    // generates random 200 * 200 image
    // imageUrl: 'https://picsum.photos/200'
  };

  // when using derived classes, you must use super() inside of the constructor.
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // this in arrow functions represent the object that defined it.
  handleIncrement = () => {
    console.log('Increment Clicked!', this);
    this.setState({ count: this.state.count + 1 })
  }
  // <span style={ this.styles }>blablabla</span>
  // or inline: { { fontSize: 50, fontWeight: bold } }
  // styles = {
  //   fontSize: 50,
  //   fontWeight: 'bold'
  // };

  // helper function(보조 함수) for conditional rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
  }

  render() {
    // let classes = this.getBadgeClasses();

    // compiled by babel into React.createElement
    return (
    <React.Fragment>
      {/* in between {}, you can write any expression(value) */}
      {/* <img src={this.state.imageUrl} alt=''/> */}
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button
        onClick={this.handleIncrement}
        className="btn btn-secondary btn-sm"
        >
        Increment
      </button>
      {/* <ul> */}
        {/* mapping string from tags and mapping it into jsx element. */}
        {/* {this.state.tags.map(tag => <li key={tag}>{ tag }</li>) } */}
      {/* </ul> */}
      {/* two ways of conditional rendering */}
      { this.state.tags.length === 0 && 'Please create a new tag!'}
      {this.renderTags()}
    </React.Fragment>
    );
  }

  // extracted (ctrl + shift + r)
  // code for rendering classes dynamically
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0 ? "warning" : "primary");
    return classes;
  }

  formatCount() {
    // destructuring count property from state;
    const { count } = this.state;
    return count === 0 ? <div>Zero</div> : count;
  }
}

export default Counter;