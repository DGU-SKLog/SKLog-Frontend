import styled from 'styled-components'
import { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  
  100%{
    opacity: 1;
  }
`

// Fade out
export const Root = styled.div`
  animation: ${fadeIn} 0.75s ease-in-out;
  position: fixed;
  bottom: 100px;
  right: 50px;
  width: 450px;
  height: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0 4px 0 0 #00000024;

  background-color: #d9d9d9;
  z-index: 3;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px; // 꼬리의 위치 조정
    right: 52px; // 꼬리가 오른쪽에 위치하도록 조정
    border: 15px solid transparent;
    border-top-color: #d9d9d9; // 말풍선의 배경색과 같은 색으로 설정
    border-bottom: 0;
    border-right: 0;
    transform: rotate(135deg); // 꼬리를 적절한 각도로 회전
  }
`
export const UpperContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  height: 70px;
  box-sizing: border-box;
  padding: 0 20px 0 15px;
  border-bottom: 2px solid black;
`
export const RequestInput = styled.input`
  width: 100%;
  height: 45px;

  border: 2px solid #cccccc;
  border-radius: 15px;
  font-size: 20px;
  box-sizing: border-box;
  padding: 18px 10px;
`

export const LowerContainer = styled.div`
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  box-sizing: border-box;
  width: 100%;
  padding: 10px 25px;
  position: relative;
  flex-basis: 0; // 늘어남 기준점을 0으로 설정
  flex-grow: 1; // 빈 공간에 대해 동일한 비율로 늘어나도록 설정
  overflow-y: scroll;
  white-space: pre-line;
`

export const ClearButton = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 110px;
  right: 60px;
  height: 40px;
  width: 60px;
  border-radius: 10px;
  font-size: 15px;
  border: 2px solid #6b6b6b;
  background-color: #c5c5c5;
`
