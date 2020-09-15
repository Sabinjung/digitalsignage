import React from "react";
import { Col } from "antd";
import styled from "@emotion/styled";
import Title from "antd/lib/typography/Title";
import { IconFont } from '../../../components/IconFont';

const ScrollItem = styled.a`
  display: inline-block;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 420px;
  cursor: pointer;
  transition: 0.5s;

  @media screen and (max-height: 730px) {
    height: 360px;
  }

  @media screen and (min-width: 3000px) {
    height: 700px;
  }

  .scrollImgWrap {
    position: relative;
    height: 100%;
    overflow: hidden;
    transition: 0.2s ease-in;
    scroll-snap-align: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s ease-in;
  }

  .hoverTitle {
    color: #fff;
    margin-top: 15px;
    text-align: center;

    @media screen and (min-width: 3000px) {
    font-size: 60px;
    }
  }

  .hoverTitle2 {
    color: #fff;
    margin-top: 15px;
    text-align: center;

    @media screen and (min-width: 3000px) {
    font-size: 60px;
    }
  }

  &:hover {
    transform: scaleY(1.06);

    .scrollImgWrap {
      border: 2px solid #fff;
    }

    .scrollImgWrap img {
      filter: blur(15px);
      border: 2px solid #fff;
    }

    .hoverEffect {
      opacity: 1;
    }
  }
`;

const HoverItemWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.4s ease-in;
  opacity: 0;
`;

const HoverIconWrap = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scaleY(0.9434);

  @media screen and (min-width: 3000px) {
    width: 400px;
    height: 400px;
  }

  .desktopIcon {
    color: #fff;
    font-size: 28px;

    @media screen and (min-width: 3000px) {
      font-size: 60px;
    }
  }
`;

type TVProps = {
  tv: { name: string; bloburl: string };
};

const TVList = ({ tv }: TVProps) => {
  return (
    <Col sm={8}>
      <ScrollItem>
        <div className="scrollImgWrap">
          <img src={tv.bloburl} alt="digital signage" />
          <HoverItemWrap className="hoverEffect">
            <HoverIconWrap>
              <IconFont type="icontv" className="desktopIcon" />
            </HoverIconWrap>
            <Title level={2} className="hoverTitle">
              {tv.name}
            </Title>
          </HoverItemWrap>
        </div>
        <Title
          level={3}
          className="hoverTitle2"
        >
          {tv.name}
        </Title>
      </ScrollItem>
    </Col>
  );
};

export default TVList;
