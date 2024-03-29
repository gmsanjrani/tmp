import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import voistrapHomeImg from '../../../../Assets/Images/Voistrap/Home.png';
// import voistrapMeetingsImg from '../../../../Assets/Images/Voistrap/Meetings.png';
// import voistrapPeopleImg from '../../../../Assets/Images/Voistrap/People.png';
// import voistrapScoreImg from '../../../../Assets/Images/Voistrap/Score.png';
import herokiHome from '../../../../Assets/Images/heroki/heroki home.png'
import herokiCloud from '../../../../Assets/Images/heroki/heroki cloud.png'
import herokiDocs from '../../../../Assets/Images/heroki/heroki docs.png'
import herokiFeatures from '../../../../Assets/Images/heroki/heroki features.png'

const VoistrapPhoneHome = styled.img.attrs({
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

const VoistrapPhoneMeetings = styled.img.attrs({
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

const VoistrapPhoneScore = styled.img.attrs({
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

const VoistrapPhonePeople = styled.img.attrs({
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

class VoistrapImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    console.log('scrollPercent ', scrollPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <VoistrapPhonePeople src={herokiDocs} scroll={scrollPercent} alt="voistrapPeople" />
        <VoistrapPhoneScore src={herokiFeatures} scroll={scrollPercent} alt="voistrapScore" />
        <VoistrapPhoneMeetings src={herokiCloud} scroll={scrollPercent} alt="voistrapMeetings" />
        <VoistrapPhoneHome src={herokiHome} scroll={scrollPercent} alt="voistrapHome" />
      </React.Fragment>
    );
  }
}

VoistrapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapImages;
