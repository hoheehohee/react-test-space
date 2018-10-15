import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
// import './styles.css';

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 200 }
  }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 2000);
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <PoseGroup>
          {isVisible && [
            // If animating more than one child, each needs a `key`
            // <Shade key="shade" className="shade" />,
            <Modal key="modal" className="modal" />
          ]}
        </PoseGroup>

      </div>
    );
  }
}

export default Single;
