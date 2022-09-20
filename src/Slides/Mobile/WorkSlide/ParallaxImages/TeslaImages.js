import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import teslaTyreImg from '../../../../Assets/Images/Tesla/Tyre.png';
// import teslaHeatImg from '../../../../Assets/Images/Tesla/Heat.png';
// import teslaLockImg from '../../../../Assets/Images/Tesla/Lock.png';
// import teslaBatteryImg from '../../../../Assets/Images/Tesla/Battery.png';
import wolfHome from '../../../../Assets/Images/wolftechs/wolf home.png'
import wolfAbout from '../../../../Assets/Images/wolftechs/wolf about.png'
import wolfContacts from '../../../../Assets/Images/wolftechs/wolf contacts.png'
import wolfPremius from '../../../../Assets/Images/wolftechs/wolf premius.png'
import wolfFunfact from '../../../../Assets/Images/wolftechs/wolf funfact.png'

const Heat = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Tyre = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8.5}%) scale(0.62)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-125vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

const Battery = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const Lock = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-105vh;
right: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

class TeslaImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <Lock src={wolfFunfact} scroll={scrollPercent} alt="teslaLock" />
        <Battery src={wolfPremius} scroll={scrollPercent} alt="teslaBattery" />
        <Tyre src={wolfAbout} scroll={scrollPercent} alt="teslaTyre" />
        <Heat src={wolfHome} scroll={scrollPercent} alt="teslaHeat" />
      </React.Fragment>
    );
  }
}

TeslaImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TeslaImages;
