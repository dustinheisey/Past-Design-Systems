import { css } from 'lit-element';

export const button = css`
  button {
    border: 1px solid var(--color-brand);
    border-radius: var(--radius);
    color: var(--color-bg-tertiary);
    font-family: var(--font-heading);
    background-color: var(--color-brand-300);
    padding: var(--space-xs) var(--space-s);
    box-shadow: var(--shadow);
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.2px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    line-height: 1.2;
  }
`;
