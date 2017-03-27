import 'inert-polyfill';
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import umbraImg from '../../common/images/umbra.svg';
import penumbraImg from '../../common/images/penumbra.svg';

const FlipCardWrapper = styled.div`
  width: 260px;
  height: 380px;
  position: relative;
  perspective: 500px;
  will-change: transform;
  margin-bottom: 50px;
`;

const CardWrapper = styled.div`
backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
`;

const CardFront = styled(CardWrapper) `
    background: green;
  color: #FFF;
`;

const CardBack = styled(CardWrapper) `
background: red;
color: #FFF;
  transform: rotateY(180deg);
`;

const CardButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  text-indent: -10000px;
`;

const ShadowWrapper = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: visible;
`;

const UmbraCard = styled(ShadowWrapper)`
  width: 270px;
  height: 390px;
  top: -5px;
  left: -5px;
  background: url(${umbraImg}) center center no-repeat;
  transform: translateY(2px);
  opacity: 0.3;
`;

const PenumbraCard = styled(ShadowWrapper)`
  width: 320px;
  height: 450px;
  top: -35px;
  left: -35px;
  background: url(${penumbraImg}) center center no-repeat;
  transform: translateY(2px);
  opacity: 0;
`;

const scale = (500 + 100) / 500;

const timing = {
    duration: 2000,
    iterations: 1,
    easing: 'ease-in-out',
    fill: 'forwards',
};

const sideOne = [
    { transform: `translateZ(-100px) rotateY(0deg) scale(${scale})` },
    { transform: `translateZ(-50px) rotateY(0deg) scale(${scale})`, offset: 0.15 },
    { transform: `translateZ(-50px) rotateY(180deg) scale(${scale})`, offset: 0.65 },
    { transform: `translateZ(-100px) rotateY(180deg) scale(${scale})` },
];

const sideTwo = [
    { transform: `translateZ(-100px) rotateY(180deg) scale(${scale})` },
    { transform: `translateZ(-50px) rotateY(180deg) scale(${scale})`, offset: 0.15 },
    { transform: `translateZ(-50px) rotateY(360deg) scale(${scale})`, offset: 0.65 },
    { transform: `translateZ(-100px) rotateY(360deg) scale(${scale})` },
];

const umbra = [
    { opacity: 0.3, transform: 'translateY(2px) rotateY(0deg)' },
    { opacity: 0.0, transform: 'translateY(62px) rotateY(0deg)', offset: 0.15 },
    { opacity: 0.0, transform: 'translateY(62px) rotateY(180deg)', offset: 0.65 },
    { opacity: 0.3, transform: 'translateY(2px) rotateY(180deg)' }
];

const penumbra = [
    { opacity: 0.0, transform: 'translateY(2px) rotateY(0deg)' },
    { opacity: 0.5, transform: 'translateY(62px) rotateY(0deg)', offset: 0.15 },
    { opacity: 0.5, transform: 'translateY(62px) rotateY(180deg)', offset: 0.65 },
    { opacity: 0.0, transform: 'translateY(2px) rotateY(180deg)' }
];


class FlipCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.cardClick = this.cardClick.bind(this);
    }

    componentDidMount() {
        this._locked = false;
        this._front = ReactDom.findDOMNode(this.refs.frontCard);
        this._back = ReactDom.findDOMNode(this.refs.backCard);
        this._umbra = ReactDom.findDOMNode(this.refs.umbra);
        this._penumbra = ReactDom.findDOMNode(this.refs.penumbra);
        this._front.inert = false;
        this._back.inert = true;

    }

    cardClick(side) {
        if (this._locked) {
            return;
        }
        this._locked = true;

        switch (side) {
            case 1:
                this._front.animate(sideOne, timing);
                this._back.animate(sideTwo, timing);
                this._back.focus();
                this._front.inert = true;
                this._back.inert = false;
                break;

            case 2:
                this._front.animate(sideTwo, timing);
                this._back.animate(sideOne, timing);
                this._front.focus();
                this._front.inert = false;
                this._back.inert = true;
                break;

            default:
                throw new Error('Unknown side');
        }
        this._umbra.animate(umbra, timing);
        this._penumbra.animate(penumbra, timing)
            .onfinish = _ => {
                this._locked = false;
            };
    }


    render() {
        return (
            <FlipCardWrapper>
                <UmbraCard ref="umbra" />
                <PenumbraCard ref="penumbra" />
                <CardFront tabindex="-1" ref="frontCard">
                    <h1>Front</h1>
                    <CardButton onClick={_ => this.cardClick(1)}>Flip card</CardButton>
                </CardFront>

                <CardBack tabindex="-1" ref="backCard">
                    <h1>Back</h1>
                    <CardButton onClick={_ => this.cardClick(2)}>Flip card</CardButton>
                </CardBack>
            </FlipCardWrapper>
        );
    }
}

FlipCard.propTypes = {

};

export default FlipCard;