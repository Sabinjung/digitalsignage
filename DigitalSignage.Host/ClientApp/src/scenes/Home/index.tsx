import React, { useState } from "react";
import styled from "@emotion/styled";
import { Layout } from "../../components/Layout";
import { Row, Col, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import Color from "../../components/Color";
import TVList from "./components/TVList";
import AddTVList from "./components/AddTVList";

import data from "../../data.json";
import { IconFont } from "../../components/IconFont";

const CreateButton = styled(Button)`
  width: 50px;
  height: 50px;
  background: ${Color.backdropColor} 0% 0% no-repeat padding-box;
  border: 1px solid ${Color.backdropColor};
  padding: 0;
  border-radius: 14px;
  font-size: 20px;
  color: #fff;
  margin-left: 20px;

  @media screen and (min-width: 3000px) {
    width: 80px;
    height: 80px;
    margin-left: 40px;
  }

  &:hover, &:focus {
    border-color: ${Color.primaryColor};
    color: ${Color.primaryColor};
    box-shadow: 0 0 4px ${Color.grey};
    opacity: 0.8;
  }

  .anticon {
    @media screen and (min-width: 3000px) {
      font-size: 40px;
    }
  }
`;

const StyledTitle = styled.span`
  color: #ffffff;
  font: normal normal normal 35px/55px Segoe UI;
  letter-spacing: 0.68px;

  @media screen and (min-width: 3000px) {
    font-size: 60px;
  }
`;

const ChannelTitleWrap = styled.div`
  padding: 0 70px;

  @media screen and (min-width: 3000px) {
    padding: 0 100px;
  }
`;

const VerticalScrollWrap = styled.div`
  padding: 40px 70px 0 70px;
  height: 66vh;
  margin-top: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(100%);

  @media screen and (min-width: 3000px) {
    height: 70vh;
    padding: 70px 100px 0 100px;
  }

  @media screen and (min-width: 3400px) {
    height: 80vh;
  }

  &::-webkit-scrollbar {
    width: 12px;

    @media screen and (min-width: 3000px) {
      width: 24px;
    }

    @media screen and (min-width: 4800px) {
      width: 34px;
    }
  }

  &::-webkit-scrollbar-track {
    background: #fff;
    border-left: 5px solid ${Color.primaryColor};
    border-right: 5px solid ${Color.primaryColor};

    @media screen and (min-width: 3000px) {
      border-left: 10px solid ${Color.primaryColor};
      border-right: 10px solid ${Color.primaryColor};
    }
    @media screen and (min-width: 4800px) {
      border-left: 15px solid ${Color.primaryColor};
      border-right: 15px solid ${Color.primaryColor};
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;  
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 1);
    background: #fff;
  }

  &::-webkit-scrollbar-button:start:decrement {
    height: 15%;
    display: block;
    background: transparent;
  }

  &::-webkit-scrollbar-button:end:decrement {
    height: 25%;
    display: block;
    background: transparent;
  }
`;

const VerticalScrollRow = styled(Row)`
  .addChannelColumn {
    align-self: flex-start;
    margin-bottom: 25px;
    scroll-snap-align: center;
  }
`;

const AddChannelWrap = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f750;
  height: 420px;

  @media screen and (min-width: 2300px) {
    height: 700px;
  }

  .title {
    color: #ffffff;
  }
`;

const AddChannelIconWrap = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .plusIcon {
    color: #fff;
    font-size: 28px;
  }
`;

const SearchInput = styled(Input)`
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 4px;
  height: 45px;
  width: 45px;
  float: right;
  color: #fff;
  border-color: transparent;

  &:focus-within {
    width: 100%;
    border-color: #fff;
  }

  @media screen and (min-width: 3000px) {
    height: 70px;
  }

  input {
    background-color: transparent;
    color: #fff;
    width: 300px;

    @media screen and (min-width: 3000px) {
      width: 500px;
      font-size: 35px;
    }
  }

  &:hover {
    border-color: #fff;
  }

  &:focus {
    border-color: #fff;
    box-shadow: 0 0 2px ${Color.primaryColor};
  }

  .anticon {
    font-size: 22px;
    color: #fff;

    @media screen and (min-width: 3000px) {
      font-size: 40px;
    }
  }
`;

type TVsDataProps = {
  TVs: { id: number; name: string; bloburl: string }[];
};

const Home = () => {

  const [addChannelShow, setaddChannelShow] = useState(false);
  const [tvsData, setTvsData] = useState<TVsDataProps>(data);
  const [val, setval] = useState<string>();

  const handleAddChannel = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setaddChannelShow(true);
  };

  const handleTVSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let filteredData = data.TVs.filter((data) => data.name.toLowerCase().includes(value.toLowerCase()));
    setTvsData({ TVs: filteredData });
    setval(value);
  };

  return (
    <React.Fragment>
      <Layout blur={addChannelShow}>
        <ChannelTitleWrap>
          <Row justify="space-between" align="middle">
            <Col sm={12}>
              <StyledTitle>Select your channel <IconFont type="icontv" /></StyledTitle>
            </Col>
            <Col sm={12}>
              <Row justify="end" align="middle">
                <Col>
                  <SearchInput
                    onChange={event => handleTVSearch(event)}
                    value={val || ''}
                    suffix={<IconFont type="iconsearch" />}
                  />
                </Col>
                <Col>
                  <CreateButton onClick={handleAddChannel}>
                    <PlusOutlined />
                  </CreateButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </ChannelTitleWrap>

        <VerticalScrollWrap>
          <VerticalScrollRow gutter={[40, 60]} align="stretch">
            {tvsData && tvsData.TVs.map((tv, index) => <TVList key={index} tv={tv} />)}
            <Col sm={8} className="addChannelColumn">
              <AddChannelWrap onClick={(e) => handleAddChannel(e)}>
                <AddChannelIconWrap>
                  <PlusOutlined className="plusIcon" />
                </AddChannelIconWrap>
                <Title level={2} className="title">
                  Add Channel
                </Title>
              </AddChannelWrap>
            </Col>
          </VerticalScrollRow>
        </VerticalScrollWrap>
      </Layout>
      <AddTVList show={addChannelShow} setShow={setaddChannelShow} />
    </React.Fragment>
  );
};

export default Home;