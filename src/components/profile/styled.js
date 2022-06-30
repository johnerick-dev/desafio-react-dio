import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  background-color: rgb(51, 51, 51);
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 200px;
  margin-top: 1.8rem;
  margin-left: 1rem;

  h1 {
    font-size: 36px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    justify-content: center;  
    text-align: center;
    margin-right: 12px;
  }
  span {
   color: #fff;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #ccc;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  border: 2px solid #ccc;
  width: 200px;
  margin: 1.8rem 0;
`;
