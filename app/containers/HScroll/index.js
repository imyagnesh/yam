import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import NavigationLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationRight from 'material-ui/svg-icons/navigation/chevron-right';
import { smoothScroll } from '../../utils/scrollSmooth';

const HScrollWrapper = styled.div`
display: flex;
flex-flow: row nowrap;
margin: 0 10px;
justify-content: space-between;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
      display: none;
  }
`;

const SliderWrapper = styled(IconButton) `
      position: absolute!important;
      top: calc(50% - 24px);
      z-index: 2;
`;

class HScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nButtonDisabled: true,
            pButtonDisabled: true,
        };
        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.scrollDiv = this.scrollDiv.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.displyNextPrevButton = this.displyNextPrevButton.bind(this);
    }

    componentDidMount() {
        this.pButton = ReactDom.findDOMNode(this.refs.prevButton);
        this.nButton = ReactDom.findDOMNode(this.refs.nextButton);
        this.hScrollElement = ReactDom.findDOMNode(this.refs.hScroll);
        this.displyNextPrevButton();
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
        this.displyNextPrevButton();
    }

    moveRight(e) {
        e.preventDefault();
        if (this.hScrollElement.scrollLeft > 0) {
            smoothScroll(this.hScrollElement, (this.hScrollElement.scrollLeft - this.props.scrollWidth), 0);
        }
        this.displyNextPrevButton();
    }

    moveLeft(e) {
        e.preventDefault();
        const maxScrollLeft = this.hScrollElement.scrollWidth - this.hScrollElement.clientWidth;
        if (Math.round(this.hScrollElement.scrollLeft) !== maxScrollLeft) {
            smoothScroll(this.hScrollElement, (this.hScrollElement.scrollLeft + this.props.scrollWidth), 0);
        }
        this.displyNextPrevButton();
    }

    scrollDiv(e) {
        e.preventDefault();
        this.displyNextPrevButton();
    }

    displyNextPrevButton() {
        const scrollLeft = Math.round(this.hScrollElement.scrollLeft);
        const maxScrollLeft = this.hScrollElement.scrollWidth - this.hScrollElement.clientWidth;
        if (maxScrollLeft <= 0) {
            this.pButton.style.display = 'none';
            this.nButton.style.display = 'none';
        } else {
            switch (scrollLeft) {
                case 0:
                    this.setState({
                        pButtonDisabled: true,
                        nButtonDisabled: false,
                    });
                    break;
                case maxScrollLeft:
                    this.setState({
                        pButtonDisabled: false,
                        nButtonDisabled: true,
                    });
                    break;
                default:
                    this.setState({
                        pButtonDisabled: false,
                        nButtonDisabled: false,
                    });
                    break;
            }
        }
    }

    render() {
        return (
            <div style={{ position: 'relative',  marginBottom: 50 }}>
                {this.props.inline && <div>
                    <SliderWrapper onClick={this.moveRight} style={{ left: 0 }} disabled={this.state.pButtonDisabled} ref="prevButton">
                        <NavigationLeft />
                    </SliderWrapper>
                    <SliderWrapper onClick={this.moveLeft} style={{ right: 0 }} disabled={this.state.nButtonDisabled} ref="nextButton">
                        <NavigationRight />
                    </SliderWrapper>
                </div>}
                <HScrollWrapper onScroll={this.scrollDiv} ref="hScroll">
                    {this.props.children}
                </HScrollWrapper>
                {!this.props.inline && <div style={{ margin: 20, display: 'flex', justifyContent: 'center' }}>
                    <FloatingActionButton onClick={this.moveRight} style={{ marginRight: 20 }} ref="prevButton" disabled={this.state.pButtonDisabled} mini secondary>
                        <NavigationLeft />
                    </FloatingActionButton>
                    <FloatingActionButton onClick={this.moveLeft} style={{ marginLeft: 20 }} ref="nextButton" disabled={this.state.nButtonDisabled} mini secondary>
                        <NavigationRight />
                    </FloatingActionButton>
                </div>}
            </div>
        );
    }
}

HScroll.propTypes = {
    children: PropTypes.array.isRequired,
    scrollWidth: PropTypes.number.isRequired,
    inline: PropTypes.bool,
};

export default HScroll;
