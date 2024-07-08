import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
    console.log("constructor-child")
  }
  componentDidMount(){
    console.log("component-mount-child")
  }
  render() {
    console.log("render-child")
    const { name } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 2,
            });
          }}
        >
          {" "}
          on click Increase
        </button>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count increase
        </button>
        <ul>
          <h2> count={count}</h2>
          <h2> count={count1}</h2>
          <li>Name:{name}</li>
          <li>Location:Bihar</li>
          <li>Contact:@firstratedengineer</li>
        </ul>
      </div>
    );
  }
}
export default UserClass;
