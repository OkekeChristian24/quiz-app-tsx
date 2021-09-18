import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  

  body {
    background-image: url(bg-image2.jpg);
    background-repeat: no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    height: 100vh;
  }

  *,
  *::before,
  *::after {
    font-family: 'Ubuntu Condensed', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  

  .show-warn, .hide-warn{
    position: absolute;
    left: 0;
    right: 0;
    background-color: #ccc;
    width: 400px;
    max-width: 600px;
    margin: 0 auto;
    padding: 12px 0;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: top 1s ease;
  }

  .show-warn{
    top: 8px;
  }
  
  .hide-warn{
    top: -300px;
  }

  .show-warn p, .hide-warn p{
    text-align: center;
    margin-left: 6px;
    font-size: 18px;
  }

  .show-warn img, .hide-warn img{
    width: 25px;  
  }


  h5{
    margin: 0;
    margin-bottom: 10px;
    color: blue;
  }

  .score {
    color: #fff;
    font-size: 1rem;
    margin: 0;
    background-color: #1a75ff;
    padding: 6px 12px;
    margin: 12px;
    border-radius: 6px;
  }

  h4 {
    font-family: 'Ubuntu Condensed', sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 500;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 30px;
    text-align: center;
    margin: 0;
    margin-top: 10px;
    width: 100%;
    color: #333300;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ccffcc, #00cc00);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    padding: 0 40px;
    border: 1px solid #1aff1a;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }

  .start {
    max-width: 200px;
    margin: 15px 0;
  }


  .loading{
    width: 30px;
    height: auto;
  }

  @media all and (max-width: 768px) {
    .show-warn, .hide-warn{
      width: 90%;
    }

    .show-warn p, .hide-warn p{
      font-size: 16px;
    }
  }

  @media all and (max-width: 480px) {
    .show-warn, .hide-warn{
      width: 95%;
    }

    .show-warn p, .hide-warn p{
      font-size: 14px;
    }

    .show-warn img, .hide-warn img{
      width: 20px;  
    }
  
  }
`;
