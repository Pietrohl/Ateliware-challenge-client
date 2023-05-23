import styled, { keyframes } from "styled-components";

export const Container = styled.div`
 width: 400px;
 height: 400px;
`;

export const Board = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  border: 15px solid black;
`;

export const BoardSquare = styled.div`
  width: 12.5%;
  height: 12.5%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;

  &#odd {
    background: blue;
  }

  &.active {
    background: red !important;
  }
`;

export const LineSVG = styled.svg`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
`;

export const shimmer = keyframes`
to {
    stroke-dashoffset: -1000;
  }
  `;

export const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const Line = styled.polyline`
  fill: none;
  stroke: black;
  stroke-width: 5;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${dash} 5s linear forwards;
`;
export const ShimmerLine = styled.polyline`
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
  fill: none;
  stroke: gray;
  stroke-width: 5;
  animation: ${shimmer} 15s linear infinite;
`;
