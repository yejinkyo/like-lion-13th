import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 402px;
  height: 872px;
  background: #fdf7de;
`;

export const Box = styled.div`
  width: 342px;
  height: 800px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 10px solid #fff;
  box-shadow: 0px 0px 10px 2px rgba(255, 140, 0, 0.38);
  display: flex;
  flex-direction: column;
  margin: 25px 20px;
`;

export const BackBtn = styled.div`
  width: 30.873px;
  height: 25.758px;
  flex-shrink: 0;
  margin-top: 28px;
  margin-left: 26px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 300px;
  height: 33px;
  border-bottom: 1px solid #000;
  margin-top: 80px;
  color: #535353;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
`;
export const ContentBox = styled.div`
  margin-top: 19px;
  width: 262px;
  height: 447px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #ff8400;
  background: #fff;
  box-shadow: 0px 4px 5px 0px rgba(255, 140, 0, 0.1);
  color: #535353;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  padding: 15px;
`;

export const Date = styled.div`
  color: #ff8400;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const DeleteBtn = styled.div`
  width: 180px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid #ff9668;
  color: #ff9668;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 33px auto;
`;
