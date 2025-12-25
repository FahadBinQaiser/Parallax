import React from "react";
import styled from "styled-components";

const Button = ({
  text = "See what gets automated",
  className = "",
  width,
  padding = "0.875rem 2rem",
  height = "auto",
}) => {
  return (
    <StyledWrapper width={width} padding={padding} height={height}>
      <button className={`btn ${className}`}>{text}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    width: ${(props) => props.width || "auto"};
    padding: ${(props) => props.padding || "0.875rem 2rem"};
    height: ${(props) => props.height || "auto"};
    background: #fb2b8f;
    color: white;
    border: none;
    border-radius: 9999px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
    white-space: nowrap;
  }

  button:hover {
    color: black;
  }

  button:after {
    content: "";
    background: white;
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  button:hover:after {
    transform: skewX(-45deg) scale(1, 1);
    transition: all 0.5s;
  }
`;

export default Button;
