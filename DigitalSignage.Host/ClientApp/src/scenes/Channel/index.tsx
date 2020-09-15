import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Row, Col, Button, Tabs, Input, Badge, Select } from 'antd'
import { LeftOutlined, PlayCircleOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import Title from 'antd/lib/typography/Title'
import styled from '@emotion/styled'
import Color from '../../components/Color'
import { ButtonSecondaryFilled, ButtonSecondaryOutlined } from '../../components/Buttons'
import { IconFont } from '../../components/IconFont'
import { LabeledValue } from 'antd/lib/select'

const MainWrap = styled.div`
    padding: 0 70px;

    @media screen and (min-width: 3000px) {
        padding: 0 180px;
    }
`;

const StyledTitle = styled(Title)`
    &.ant-typography {
        color: #fff;

        @media screen and (min-width: 3000px) {
            font-size: 60px;
        }

        &.player-title {
            color: #fff;
            margin-left: 4px;
            padding-left: 10px;
            margin-bottom: 25px;
            position: relative;

            @media screen and (min-width: 3000px) {
                font-size: 70px;
            }

            &.setting-title {
                font-size: 45px;

                @media screen and (min-width: 3000px) {
                    font-size: 60px;
                }
            }

            &::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 3px;
                height: 100%;
                background: ${Color.secondaryColor};
            }
        }
    }
`;

const PreviewBtn = styled(Button)`
    border-radius: 18px;
    font-size: 18px;
    height: 50px;
    font: normal normal normal 20px/24px Segoe UI;
    letter-spacing: 0.38px;
    color: #FFFFFF;
    opacity: 0.88;
    background: #262626;
    border-color: #262626;
    box-shadow: 0 0 6px ${Color.bgColor};
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    @media screen and (min-width: 3000px) {
        font-size: 50px;
        padding: 40px;
    }


    &:hover, &:focus {
        opacity: 0.8;
        color: #fff;
        background: ${Color.backdropColor};
        border-color: ${Color.grey};
    }

    .anticon {
        font-size: 28px;
        font-weight: 200;

        @media screen and (min-width: 3000px) {
            font-size: 40px;
        }
    }
`;

const PlayerWrap = styled.div`
    padding-top: 15px;
`;

const PlayerCol = styled(Col)`

    transition: .6s ease;

    img{
        width: 100%;
        height: 550px;
        object-fit: cover;

        @media screen and (min-width: 3000px) {
            height: 1000px;
        }
    }
`;

const PlayerSettingsWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 100%;
`;

const Settings = styled.div`
    background: #262626;
    flex: 0;
    opacity: 0;
    visibility: hidden;
    transform-origin: right;
    transition: .4s;

    &.active {
        padding: 50px 35px;
        flex: 1;
        opacity: 1;
        visibility: visible;

        @media screen and (min-width: 3000px) {
            padding: 90px 70px;
        }
    }
`;

const PlayerSettingsMenu = styled.div`
    background: #262626;
    border: 1px solid #00E6FF8A;
    text-align: center;
    height: 100%;
    width: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media screen and (min-width: 3000px) {
        width: 120px;
    }
`;

const SettingBtn = styled(Button)`
    background: #4C4C4C;
    box-shadow: 0px 1px 13px #00F8FF57;
    border: 1px solid #00CCFF8A;
    color: #ffffff;
    margin-bottom: 30px;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;

    &:hover, &:focus {
        background: ${Color.backdropColor};
    }

    @media screen and (min-width: 3000px) {
        width: 70px;
        height: 70px;
        font-size: 24px;
    }
`;

const DeleteBtn = styled(Button)`
    background: #FFDDDD 0% 0% no-repeat padding-box;
    border: 1px solid #FFDDDD;
    box-shadow: 0px 1px 13px #FF000057;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    color: #FF0000;

    &:hover, &:focus {
        background: ${Color.backdropColor};
    }

    @media screen and (min-width: 3000px) {
        width: 70px;
        height: 70px;
        font-size: 24px;
    }
`;

const CustomTabs = styled(Tabs)`

    margin-bottom: 25px;

    @media screen and (min-width: 3000px) {
        margin-bottom: 40px;
    }

    .ant-tabs-nav{

        &::before {
            content: none;
        }

        &::after {
            content: none;
        }

        .ant-tabs-nav-wrap {
            .ant-tabs-ink-bar {
                display: none;
            }

            &::before {
                content: none;
            }

            &::after {
                content: none;
            }
        }

        .ant-tabs-tab {
            color: #fff;
            opacity: 0.270;
            font-size: 18px;

            @media screen and (min-width: 3000px) {
                font-size: 35px;
            }

            &.ant-tabs-tab-active{
                border-color: none;
                opacity: 1;
                
                .ant-tabs-tab-btn {
                    color: #fff;
                }
            }
        }
    }
`;

const StyledInput = styled(Input)`
    background: transparent;
    border: none;
    padding: 8px 0;
    position: relative;
    border-bottom: 2px solid ${Color.secondaryColor};
    color: #fff;

    &.ant-input:focus {
        box-shadow: none;
    }

    @media screen and (min-width: 3000px) {
        font-size: 35px;
    }
`;

const StyledBadge = styled(Button)`
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
    margin-right: 15px;
    opacity: .3;

    &:hover, &:focus {
        background: transparent;
        border-color: #00ffe6;
        color: #00ffe6;
    }

    &.active {
        background: transparent;
        border-color: #00ffe6;
        color: #00ffe6;
    }

    @media screen and (min-width: 3000px) {
        font-size: 35px;
    }
`;

const StyledSelect = styled(Select)`
    color: #fff;

    @media screen and (min-width: 3000px) {
        font-size: 30px;
    }

    &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        background-color: transparent;
        border-color: transparent;
        border-bottom-color: ${Color.secondaryColor};
        padding-left: 0;

        @media screen and (min-width: 3000px) {
            height: 50px;
            width: 120px;
        }
    }

    .ant-select-arrow{

        .anticon {
        color: #fff;

            @media screen and (min-width: 3000px) {
                font-size: 30px;
            }
        }

        @media screen and (min-width: 3000px) {
            top: 20%;
        }
    }
`;

const PlaylistWrap = styled.div`
    overflow: auto;
    /* width */
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
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

const Playlists = styled(Row)`
    flex-direction: row;
    flex-wrap: nowrap;

    .playlistArrow {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const PlaylistAdder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #262626;
    height: 100%;

    img {
        width: 100%;
        object-fit: cover;
    }

    &::after {
        content: '';
        position: absolute;
        top: 45%;
        right: -15px;
        color: #fff;

    }
`;

const AddPlaylistIconWrap = styled.div`
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    color: #fff;
    font-size: 18px;
    margin-bottom: 15px;

    @media screen and (min-width: 3000px) {
        width: 100px;
        height: 100px;
        font-size: 30px;
    }
`;

const Channel = () => {

    const { TabPane } = Tabs;
    const { Option } = Select;

    const [settingSize, setsettingSize] = useState({ left: 14, right: 10 });
    const [categoryType, setcategoryType] = useState<number>(1);
    const [customMinute, setcustomMinute] = useState<boolean>(false);

    const handleSettingVisibility = () => {
        if (settingSize.left === 14) {
            setsettingSize({ left: 22, right: 2 });
            return;
        }
        setsettingSize({ left: 14, right: 10 });
    }

    const handleMinuteOption = (value: string | number | LabeledValue) => {
        if (value === 'custom') {
            setcustomMinute(true);
        } else {
            setcustomMinute(false);
        }
    }

    return (
        <Layout>
            <MainWrap>
                <Row align="middle" justify="space-between">
                    <Col>
                        <StyledTitle level={2}><LeftOutlined /> Kathmandu TV</StyledTitle>
                    </Col>
                    <Col sm={4}>
                        <PreviewBtn><IconFont type="iconplay-button" /> Preview</PreviewBtn>
                    </Col>
                </Row>

                <PlayerWrap>
                    <StyledTitle level={3} className="player-title">Developer Rank</StyledTitle>
                    <Row gutter={[40, 60]}>
                        <PlayerCol sm={settingSize.left}>
                            <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="" />
                        </PlayerCol>
                        <PlayerCol sm={settingSize.right} className="right">
                            <PlayerSettingsWrap>
                                <Settings className={settingSize.left === 14 ? 'active' : ''}>
                                    <StyledTitle level={3} className="player-title setting-title">Settings</StyledTitle>
                                    <CustomTabs >
                                        <TabPane tab="Add Title" key="1">
                                            <StyledTitle level={4}>Title*</StyledTitle>
                                            <StyledInput placeholder="Enter Title Name" />
                                        </TabPane>
                                        <TabPane tab="Add Category" key="2">
                                            <StyledTitle level={4}>Category Type</StyledTitle>
                                            <Row style={{marginBottom: '15px'}}>
                                                <StyledBadge className={categoryType === 1? 'active' : ''} onClick={() => setcategoryType(1)}>Image</StyledBadge>
                                                <StyledBadge className={categoryType === 2? 'active' : ''} onClick={() => setcategoryType(2)}>Video</StyledBadge>
                                                <StyledBadge className={categoryType === 3? 'active' : ''} onClick={() => setcategoryType(3)}>Url</StyledBadge>
                                            </Row>
                                            <StyledInput placeholder="https://itsutra.com/placeholder/img.jpg"/>
                                        </TabPane>
                                        <TabPane tab="Duration" key="3">
                                            <StyledTitle level={4}>Select Duration</StyledTitle>
                                            <StyledSelect size="large" dropdownStyle={{background: '#262626', color: '#fff'}} defaultValue="1 min" onSelect={value => handleMinuteOption(value)}>
                                                <Option value="1">1 min</Option>
                                                <Option value="3">3 min</Option>
                                                <Option value="5">5 min</Option>
                                                <Option value="10">10 min</Option>
                                                <Option value="30">30 min</Option>
                                                <Option value="custom">custom</Option>
                                            </StyledSelect>
                                            {
                                                customMinute && 
                                                <Row style={{margin: '10px 0'}}>
                                                    <Col>
                                                        <StyledInput placeholder="60"/>
                                                    </Col>
                                                    <Col style={{lineHeight: 2.2, color: '#fff'}}>
                                                        Minutes
                                                    </Col>
                                                </Row>
                                            }
                                        </TabPane>
                                    </CustomTabs>
                                    <Row justify="space-between" >
                                        <Col>
                                            <ButtonSecondaryOutlined onClick={handleSettingVisibility}>Cancel</ButtonSecondaryOutlined>
                                        </Col>
                                        <Col>
                                            <ButtonSecondaryFilled>Save</ButtonSecondaryFilled>
                                        </Col>
                                    </Row>
                                </Settings>
                                <PlayerSettingsMenu>
                                    <SettingBtn onClick={handleSettingVisibility}><IconFont type="iconsettings1" /></SettingBtn>
                                    <DeleteBtn><IconFont type="icontrash1" /></DeleteBtn>
                                </PlayerSettingsMenu>
                            </PlayerSettingsWrap>
                        </PlayerCol>
                    </Row>
                </PlayerWrap>

                <PlaylistWrap>
                    <StyledTitle level={3} className="player-title">Playlist</StyledTitle>
                    <Playlists gutter={[60, 60]}>
                        <Col sm={8} xxl={6}>
                            <PlaylistAdder>
                                <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="" />
                            </PlaylistAdder>
                        </Col>
                        <IconFont type="iconarrow" className="playlistArrow" />
                        <Col sm={8} xxl={6}>
                            <PlaylistAdder>
                                <AddPlaylistIconWrap><PlusOutlined /></AddPlaylistIconWrap>
                                <StyledTitle level={4}>Add Playlist</StyledTitle>
                            </PlaylistAdder>
                        </Col>
                    </Playlists>
                </PlaylistWrap>
            </MainWrap>
        </Layout>
    )
}

export default Channel
