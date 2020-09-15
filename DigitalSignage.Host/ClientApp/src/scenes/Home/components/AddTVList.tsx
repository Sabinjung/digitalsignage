import React from 'react'
import styled from '@emotion/styled'
import { CloseOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { Form, Input, Button, Row, Col } from 'antd';
import { ButtonOutlinedWhite, ButtonWhiteFilled } from '../../../components/Buttons';
import Color from '../../../components/Color';
import TvIcon from '../../../components/TvIcon';

const AddListWrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    visibility: hidden;
    color: #fff;
    transition: .4s linear;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 105;
        background-color: ${Color.bgColor}db;
    }

    &::after{
        content: '';
        position: absolute;
        top: 0;
        right: 100%;
        width: 100%;
        height: 100%;
        z-index: 110;
        background-color: #00000050;
        transition: .5s linear;
    }

    &.active {
        opacity: 1;
        visibility: visible;

        &::after{
            right: 0;
        }
    }

    .title {
        color: #fff;
        font-weight: 300;

        @media screen and (min-width: 2300px) {
            font-size: 100px;
        }
    }

    .close-btn{
        position: fixed;
        top: 15px;
        right: 15px;
        border: 0;
        color: #fff;
        z-index: 120;

        @media screen and (min-width: 2300px) {
            font-size: 60px;
        }
    }

    .desktopIcon{
        font-size: 60px;

        @media screen and (min-width: 2300px) {
            font-size: 100px;
        }
    }

    form {
        margin-top: 45px;
        width: 360px;

        @media screen and (min-width: 2300px) {
            width: 900px;
            margin-top: 60px;
        }
    }

    form label {
        font-size: 20px;
        color: #fff;

        @media screen and (min-width: 2300px) {
            height: 68px;
            font-size: 60px;
        }
    }

    form .ant-input{
        height: 50px;
        
        @media screen and (min-width: 2300px) {
            height: 100px;
            font-size: 35px;
            margin-bottom: 25px;
        }
    }
`;

const CreateScreenWrap = styled.div`
    position: relative;
    z-index: 120;
`;

type AddTVListProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTVList = ({ show, setShow }: AddTVListProps) => {

    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    const handleClose = (e: React.MouseEvent<HTMLElement>) => {  
        if (e.target !== e.currentTarget) return;
        setShow(false);
    }

    const handleClickClose = () => {  
        setShow(false);
    }

    return (
        <AddListWrap className={`${show ? 'active' : ''}`} onClick={(e) => handleClose(e)}>
            <Button type="ghost" onClick={handleClickClose} className="close-btn"><CloseOutlined /></Button>
            <CreateScreenWrap>
                <TvIcon className="desktopIcon"/>
                <Title className="title">Create new screen.</Title>
                <Form {...layout}>
                    <Form.Item label="Title">
                        <Input />
                    </Form.Item>
                    <Row justify="space-between">
                        <Col>
                            <ButtonOutlinedWhite size="large" htmlType="button" onClick={handleClickClose}>Cancel</ButtonOutlinedWhite>
                        </Col>
                        <Col>
                            <ButtonWhiteFilled size="large">Create</ButtonWhiteFilled>
                        </Col>
                    </Row>
                </Form>
            </CreateScreenWrap>
        </AddListWrap>
    )
}

export default AddTVList
