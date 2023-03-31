import React from "react";

class Title extends React.Component {
  render() {
    const { textTitle } = this.props;
    return <h1>{ textTitle }</h1>
  }
}

export default Title
