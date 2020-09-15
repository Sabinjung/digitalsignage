import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import styled from "@emotion/styled";
import Color from "./Color";
import bg from "../image/MainBackground.svg";

const Content = styled.div`
  margin-top: 45px;
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
  z-index: 10;
  background: ${Color.bgColor} url(${bg});
  background-size: cover;
  box-shadow: 0px 29px 43px #4e8dff30;
  transition: .3s;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #888;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${Color.secondaryColor};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Main = styled.div`
  width: 95%;
  margin: auto;
`;

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <Container style={{ filter: `blur(${this.props.blur ? '20px' : ''})` }}>
        <Main>
          <NavMenu />
          <Content>{this.props.children}</Content>
        </Main>
      </Container>
    );
  }
}
