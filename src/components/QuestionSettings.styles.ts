import styled from "styled-components";

export const SettingsWrapper = styled.div`
    
    background-color: #1a75ff;
    border-radius: 10px;
    padding: 12px 24px;
    margin-top: 12px;

    .input-style{
        display: flex;
        margin-bottom: 20px;
    }

    .selection-style{
        display: flex;
    }

    .input-style span, .selection-style span{
        color: #f4f4f4;
        font-weight: bold;
        font-size: 1rem;
        margin-right: 6px;
        display: inline-block;
        width: 170px;
    }

    @media all and (max-width: 768px) {
        padding: 8px 18px;
        .input-style span{
          font-size: 16px;
          margin-right: 0px;
        }
    
        .selection-style span{
          font-size: 16px;
          margin-right: 0px;
        }
      }
`;

type WrapperProps = {
    isPlaying: boolean;
};

export const InputWrapper = styled.div<WrapperProps>`
    transition: all 0.3s ease;
    input{
        background-color: ${({isPlaying}) => isPlaying ? "#e6e6e6": "#fff"};
        outline: none;
        border: none;
        padding: 4px 8px;
        margin: 0 4px;
        border-radius: 4px;
        width: 80px;
        text-align: center;
        color: #66a3ff;
        font-weight: bold;

    }
`;

export  const SelectionWrapper = styled.div<WrapperProps>`
    transition: all 0.3s ease;

    select{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: ${({isPlaying}) => isPlaying ? "#e6e6e6": "#fff"};;
        border: none;
        padding: 4px 18px !important;
        margin: 0 4px;
        width: 80px;
        cursor: inherit;
        outline: none;
        border-radius: 4px;
        color: #66a3ff;
        font-weight: bold;
        text-align: center;
    }

    select::-ms-expand {
        display: none;
    }

    
`;