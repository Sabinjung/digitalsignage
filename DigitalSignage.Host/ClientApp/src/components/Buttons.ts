import styled from "@emotion/styled";
import { Button } from "antd";
import Color from './Color';

export const ButtonOutlinedWhite = styled(Button)`
    border: 1px solid #ffffff;
    background: transparent;
    color: #ffffff;
    border-radius: 0;
    transition: .3s;
    
    &:hover, &:focus{
        color: ${Color.primaryColor};
        background: #ffffff;
        border-color: #ffffff;
    }

    @media screen and (min-width: 3000px) {
      font-size: 40px;
      height: 80px; 
    }
`;

export const ButtonWhiteFilled = styled(Button)`
    border: 1px solid #ffffff;
    background: #ffffff;
    color: ${Color.primaryColor};
    border-radius: 0;
    transition: .3s;
    
    &:hover, &:focus{
        color: #ffffff;
        background: transparent;
        border-color: #ffffff;
    }

    @media screen and (min-width: 3000px) {
      font-size: 40px;
      height: 80px; 
    }
`;


export const ButtonSecondaryOutlined = styled(Button)`
    border: 1px solid #00ffe6d4;
    background: transparent;
    color: #ffffff;
    border-radius: 0;
    transition: .3s;
    
    &:hover, &:focus{
        color: #ffffff;
        background: #00ffe6d4;
    }

    @media screen and (min-width: 3000px) {
      font-size: 40px;
      height: 80px; 
    }
`;

export const ButtonSecondaryFilled = styled(Button)`
    border: 1px solid #00ffe6d4;
    background: #00ffe6d4;
    color: #f7f7ff;
    border-radius: 0;
    opacity: 0.9;
    transition: .3s;
    
    &:hover, &:focus{
        color: #ffffff;
        background: transparent;
        border-color: #00ffe6d4;
    }

    @media screen and (min-width: 3000px) {
      font-size: 40px;
      height: 80px; 
    }
`;