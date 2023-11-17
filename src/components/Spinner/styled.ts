import { SPINNER_BACKGROUND_COLOR } from 'constants/spinner'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
const rotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);

    }
`
export const Root = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid ${SPINNER_BACKGROUND_COLOR};
  border-top: 2px solid transparent;
  border-radius: 100%;
  animation: ${rotate} 0.8s linear infinite;
`
