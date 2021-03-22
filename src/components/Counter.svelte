<script>
  import '$styles/tokens.css'
  let count = 0

  const increment = () => {
    count += 1
  }
</script>

<style>
  @custom-selector :--heading h1, h2, h3, h4, h5, h6;

  :--heading {
    color: var(--color-primary-300) @(--md) var(--color-danger);
  }

  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: var(--color-primary-300);
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;

    &:hover {
      color: red;
    }
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>

<button on:click={increment}>
  Clicks: {count}
</button>

<h1>hello</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
