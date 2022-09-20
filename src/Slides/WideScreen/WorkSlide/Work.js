import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'Heroku Clone',
        projectDesc: 'Its a clone of heroku deploying platform. It build with Reactjs.',
        projectType: 'WEB APP',
        roles: ['Front-end Developer', 'UI Designer'],
      },
      {
        number: '02',
        projectName: 'Portfolio 1.0',
        projectDesc: 'Its a full stack personal portfolio build with react. It has proper email functionalities.',
        projectType: 'WEB APP',
        roles: ['Front-end Developer', 'UI Designer'],
      },
      {
        number: '03',
        projectName: 'ComingOrNot',
        projectDesc: 'Dice rolling game player can shuffle until all the dice have same number.',
        projectType: 'WEB APP',
        roles: ['Front-end Developer', 'UI Designer'],
      },
      {
        number: '04',
        projectName: 'Wolftech',
        projectDesc: 'A full stack laravel app its a commercial website of a software house.',
        projectType: 'WEB APP',
        roles: ['Front-end Developer'],
      },
      {
        number: '05',
        projectName: 'Mobile Store',
        projectDesc: 'Build a full stack app to allow user buy mobile products. Users can buy mobile products here.',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer', 'UI Designer'],
      },
      {
        number: '06',
        projectName: 'Gym App',
        projectDesc: 'A gym marketing app with beautiful animations. It build with react',
        projectType: 'WEB APP',
        roles: ['Front-end Developer', 'UI Designer'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
