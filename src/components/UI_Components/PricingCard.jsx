import React from "react";
import styled from "styled-components";

const PricingCard = ({
  title,
  price,
  paragraph,
  features,
  buttonText,
  isPopular,
  isTransparent,
}) => {
  return (
    <StyledWrapper>
      <div
        className={`card ${isPopular ? "popular-card" : ""} ${
          isTransparent ? "transparent-card" : ""
        }`}
      >
        {isPopular && <div className="popular">Most Popular</div>}
        <div className="pricing-tooltip">{price}</div>
        <div className="card__border" />
        <div className="card_title__container">
          <span className="card_title">{title}</span>
          <p className="card_paragraph">{paragraph}</p>
        </div>
        <hr className="line" />
        <ul className="card__list">
          {features.map((feature, index) => (
            <li className="card__list_item" key={index}>
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
              <span className="list_text">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="button">{buttonText || "Book a Call"}</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 8%);
    --paragraph: hsl(0, 0%, 85%);
    --line: hsl(340, 60%, 40%);
    --primary: #fb2b8f;

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.4rem;
    width: 100%;
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
    overflow: visible;
    transition: transform 0.3s ease;
  }

  .popular {
    position: absolute;
    top: -0.9rem;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #fb2b8f 0%, #ff6ec4 50%, #e14f9c 100%);
    color: var(--white);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 0.35rem 1rem;
    border-radius: 9999px;
    box-shadow: 0 0 12px rgba(251, 43, 143, 0.4);
    z-index: 2;
  }

  .popular-card {
    transform: scale(1.04);
    box-shadow: 0 0 24px rgba(251, 43, 143, 0.4);
    z-index: 5;
  }

  .popular-card:hover {
    transform: scale(1.06);
  }

  .pricing-tooltip {
    position: absolute;
    top: 0rem;
    right: 0rem;
    background: linear-gradient(90deg, #fb2b8f 0%, #ff6ec4 100%);
    color: var(--white);
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 0 2px 12px rgba(251, 43, 143, 0.2);
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  .card_title__container .card_title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--white);
  }

  .card_title__container .card_paragraph {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
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
    gap: 0.6rem;
  }

  .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.7rem;
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
    font-size: 1.14rem;
    color: var(--white);
    text-align: left;
  }

  .button {
    cursor: pointer;
    padding: 0.6rem;
    width: 100%;
    background-image: linear-gradient(
      90deg,
      #fb2b8f 0%,
      #ff6ec4 50%,
      #e14f9c 100%
    );
    font-size: 1rem;
    color: var(--white);
    border: 0;
    border-radius: 9999px;
    box-shadow: inset 0 -2px 25px -4px rgba(255, 255, 255, 0.2);
    transition: all 0.2s ease;
  }

  .button:hover {
    transform: scale(1.02);
    box-shadow: 0 0 12px rgba(251, 43, 143, 0.5);
  }

  @media (max-width: 1024px) {
    .card {
      width: 100%;
      padding: 1.5rem;
    }
    .card_title__container .card_title {
      font-size: 1.8rem;
    }
    .list_text {
      font-size: 0.95rem;
    }
  }
  .transparent-card {
    background: transparent;
    background-image: none;
    box-shadow: none;
    border: 1px solid rgba(251, 43, 143, 0.4);
  }

  .transparent-card .pricing-tooltip {
    border-top-right-radius: 1px solid rgba(251, 43, 143, 0.4);
    background: rgba(251, 43, 143, 0.6);
    box-shadow: none;
  }

  .transparent-card .button {
    background: rgba(251, 43, 143, 0.4);
    border: 1px solid #fb2b8f;
    box-shadow: none;
  }

  .transparent-card {
    color: rgba(0, 0, 0, 0.7);
  }

  .transparent-card .card_title,
  .transparent-card .card_paragraph,
  .transparent-card .list_text {
    color: rgba(0, 0, 0, 0.7);
    text-align: left;
  }

  .transparent-card .pricing-tooltip {
    color: rgba(0, 0, 0, 0.7);
  }

  .transparent-card .button {
    color: rgba(0, 0, 0, 0.7);
  }

  .transparent-card .check {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .transparent-card .check_svg {
    fill: #fff;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    .card {
      width: 90%;
      margin: 0 auto;
      padding: 1.5rem;
    }
    .pricing-tooltip {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
    .card_title__container .card_title {
      font-size: 1.6rem;
    }
    .card_title__container .card_paragraph {
      font-size: 0.85rem;
    }
    .list_text {
      font-size: 0.9rem;
    }
    .button {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 100%;
      margin: 0 auto;
      padding: 1.2rem;
    }
    .pricing-tooltip {
      font-size: 0.9rem;
      padding: 0.3rem 0.6rem;
    }
    .card_title__container .card_title {
      font-size: 1.4rem;
    }
    .list_text {
      font-size: 0.85rem;
    }
    .button {
      font-size: 0.85rem;
      padding: 0.6rem;
    }
  }
`;

export default PricingCard;
