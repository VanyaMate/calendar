import React from 'react';
import styled from "styled-components";

const VirtualItem = styled.div`
  position: absolute;
  overflow: hidden;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  width: ${({width}) => width ? width + 'px' : '100%'};
  height: ${({height}) => height ? height + 'px' : '100%'};
`;

export default VirtualItem;