import { css } from "lit";

export default css`
  /* A subtle fade-in or fade-out effect for elements like images, cards, or text can create a smooth and engaging transition. */
  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }

  .fade-out {
    animation: fadeOut 1s ease-in-out;
  }

  /* Slide elements in or out from various directions, such as top, bottom, left, or right. This is useful for revealing content or creating exit animations. */
  .slide-in-left {
    animation: slideInLeft 0.5s ease-in-out;
  }

  .slide-out-left {
    animation: slideOutLeft 0.5s ease-in-out;
  }

  .slide-in-right {
    animation: slideInRight 0.5s ease-in-out;
  }

  .slide-out-right {
    animation: slideOutRight 0.5s ease-in-out;
  }

  .slide-in-top {
    animation: slideInTop 0.5s ease-in-out;
  }

  .slide-out-top {
    animation: slideOutTop 0.5s ease-in-out;
  }

  .slide-in-bottom {
    animation: slideInBottom 0.5s ease-in-out;
  }

  .slide-out-bottom {
    animation: slideOutBottom 0.5s ease-in-out;
  }

  /* Subtly scale elements up or down to draw attention or indicate interactivity, such as hovering over a button or card. */
  .scale-up {
    animation: scaleUp 0.3s ease-in-out;
  }

  .scale-down {
    animation: scaleDown 0.3s ease-in-out;
  }

  /* Apply a gentle rotation to elements, like icons or logos, to create visual interest or convey a sense of motion. */
  .rotate {
    animation: rotate 2s linear infinite;
  }

  /* Create a pulsating effect for elements to draw user attention or indicate activity, such as loading or progress indicators. */
  .pulse {
    animation: pulse 1s ease-in-out infinite;
  }

  /* Keyframes */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutLeft {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @keyframes slideInTop {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOutTop {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  @keyframes slideInBottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOutBottom {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  @keyframes scaleDown {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .fade-in,
    .fade-out,
    .slide-in-left,
    .slide-out-left,
    .scale-up,
    .scale-down,
    .rotate,
    .pulse {
      animation: none;
    }
  }
`;
