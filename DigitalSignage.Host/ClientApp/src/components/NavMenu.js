import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Color from './Color';
import styled from '@emotion/styled';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import userimage from '../image/user.jpeg';

const Header = styled.header`
  padding: 20px;
`;

const Logo = styled.div`
  text-align: center;
`;

const StyledTitle = styled(Title)`
  &.ant-typography{
    margin-bottom: 0 !important;
    color: #fff !important;

    @media screen and (min-width: 3000px) {
      font-size: 100px;
    }

    span {
      color: #00FFE6;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: #fff;
  font-size: 10px;

  @media screen and (min-width: 3000px) {
    font-size: 33px;
  }
`;

const UserName = styled.span`
  text-align: left;
  font: normal normal normal 24px/30px Segoe UI;
  letter-spacing: 0px;
  color: #FFFFFF;

  @media screen and (min-width: 3000px) {
      font-size: 60px;
  }
`;

const UserImage = styled.div`
  background: ${Color.backdropColor};
  border-radius: 21px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  @media screen and (min-width: 3000px) {
    width: 100px;
    height: 100px;
    margin-left: 40px;
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 8px 16px #00000029;
    border: 2px solid #FFFFFFA3;

    @media screen and (min-width: 3000px) {
    width: 80px;
    height: 80px;
  }
  }
`;

export class NavMenu extends Component {

  render() {
    return (
      <Header>
        <Row justify="space-between" align="middle">
          <Col>
            <Logo>
              <StyledTitle level={1}>
                <span>D</span>S
                </StyledTitle>
              <StyledParagraph>Digital Signage</StyledParagraph>
            </Logo>
          </Col>
          <Col>
            <Row align="middle">
              <Col>
                <UserName>My Account</UserName>
              </Col>
              <Col>
                <UserImage>
                  <img src={userimage} alt="Digital Signage" />
                </UserImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    );
  }
}
