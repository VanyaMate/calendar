import React from 'react';
import styled from "styled-components";

const VirtualView = styled.div`
  position: relative;
  overflow: auto;
  height: ${({height}) => height ? height + 'px' : '100%'};
  width: ${({width}) => width ? width + 'px' : '100%'};
`;

export default VirtualView;