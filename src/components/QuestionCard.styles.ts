import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1100px;
    background-color: #66b3ff;
    border-radius: 10px;
    border: 2px solid #66b3ff;
    padding: 15px 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    margin-bottom: 12px;
    box-shadow: 0 14px 18px 0 rgba(0, 0, 0, 0.2), 0 16px 30px 0 rgba(0, 0, 0, 0.19);

    p {
        font-size: 1rem;
    }

    .number{
        background-image: radial-gradient(#1a8cff 30%, #1a75ff 70%);
        border-radius: 6px;
        padding: 8px 4px;
        width: 200px;
        margin: 0 auto;
        color: #000;
    }

    .question{
        color: #000;
        font-weight: 400;
        font-size: 1rem;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
        correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #33c2ff, #99e0ff)'};
        border: none;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #000;
    font-weight: 400;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`;