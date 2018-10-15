import React, { Component } from 'react';
import Infinite from 'react-infinite';
import styled from 'styled-components';
import ListItem from '../components/ReactInfinite/ListItem';

class ReactInfinite extends Component {

	constructor(props) {
		super(props);
		this.state = {
			elements: null,
			isInfiniteLoading: false
		}
	}

	componentWillMount() {
		console.log('###### componentWillMount : ');
		this.getInitialState();
	}

	getInitialState = () => {
		 this.setState({
			 elements: this.buildElements(0, 20),
        isInfiniteLoading: false
		 });
	};

	buildElements = (start, end) => {
		var elements = [];
		for (var i = start; i < end; i++) {
	 		elements.push(<ListItem key={i} keyItem={i}/>)
		}
		return elements;
	};

	handleInfiniteLoad = () => {
		console.log('###### handleInfiniteLoad : ');
    var that = this;
    this.setState({
        isInfiniteLoading: true
    });
    setTimeout(function() {
    	var elemLength = that.state.elements.length,
          newElements = that.buildElements(elemLength, elemLength + 1000);
      that.setState({
          isInfiniteLoading: false,
          elements: that.state.elements.concat(newElements)
      });
    }, 2500);
  };

	elementInfiniteLoad = () => (
      <div className="infinite-list-item">
          Loading...
      </div>
  );

	render() {

		const { elements } = this.state;

		return(
			<DomDiv>
				<Infinite
					elementHeight={40}
					containerHeight={250}
					infiniteLoadBeginEdgeOffset={200}
					onInfiniteLoad={this.handleInfiniteLoad}
					loadingSpinnerDelegate={this.elementInfiniteLoad()}
					isInfiniteLoading={this.state.isInfiniteLoading}
	       >
	        {elements}
	      </Infinite>
			</DomDiv>
		);
	}
}

const DomDiv = styled.div`
	border: 1px solid #ddd;
	border-radius: 4px;
	margin-bottom: 20px;
`

export default ReactInfinite;
