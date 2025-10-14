import React from "react";
import styled from "styled-components";

const PricingCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__border" />
        <div className="card_title__container">
          <span className="card_title">Explosive Growth</span>
          <p className="card_paragraph">
            Perfect for your next content, leave to us and enjoy the result!
          </p>
        </div>
        <hr className="line" />
        <ul className="card__list">
          <li className="card__list_item">
            <span className="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="check_svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="list_text">10 Launch Weeks</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="check_svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="list_text">10 Influencers Post</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="check_svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="list_text">100,000 Views</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="check_svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="list_text">10 Reddit Posts</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="check_svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="list_text">2 Hours Marketing Consultation</span>
          </li>
        </ul>
        <button className="button">Book a Call</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 8%);
    --paragraph: hsl(0, 0%, 80%);
    --line: hsl(340, 60%, 40%);
    --primary: #fb2b8f;

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    width: 25rem;
    background-color: hsl(340, 15%, 8%);
    background-image: radial-gradient(
        at 80% 10%,
        rgba(251, 43, 143, 0.5) 0px,
        transparent 60%
      ),
      radial-gradient(at 20% 90%, rgba(255, 180, 220, 0.3) 0px, transparent 80%),
      radial-gradient(at 50% 50%, rgba(251, 43, 143, 0.15) 0px, transparent 70%),
      radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.04) 0px, transparent 60%);
    border-radius: 1rem;
    box-shadow: 0px -12px 28px 0px rgba(255, 43, 143, 0.25) inset;
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(
      0deg,
      hsl(0, 0%, 100%) -50%,
      hsl(340, 100%, 70%) 100%
    );
    border-radius: 1rem;
  }

  .card .card_title__container .card_title {
    font-size: 2rem;
    color: var(--white);
  }

  .card .card_title__container .card_paragraph {
    margin-top: 0.25rem;
    width: 100%;
    text-align: center;
    font-size: 0.6rem;
    color: var(--paragraph);
  }

  .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);
    border: none;
  }

  .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    background-color: var(--primary);
    border-radius: 50%;
  }

  .check_svg {
    width: 0.75rem;
    height: 0.75rem;
    fill: var(--black);
  }

  .list_text {
    font-size: 1.6rem;
    color: var(--white);
  }

  .button {
    cursor: pointer;
    padding: 0.5rem;
    width: 100%;
    background-image: linear-gradient(
      90deg,
      #fb2b8f 0%,
      #ff6ec4 50%,
      #ffa8d3 100%
    );
    font-size: 1rem;
    color: var(--white);
    border: 0;
    border-radius: 9999px;
    box-shadow: inset 0 -2px 25px -4px rgba(255, 255, 255, 0.2);
  }

  .button:hover {
    transform: scale(1.02);
    transition: all 0.2s ease;
    box-shadow: 0 0 12px rgba(251, 43, 143, 0.5);
  }
`;

export default PricingCard;
