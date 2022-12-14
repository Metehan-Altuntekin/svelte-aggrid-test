<script>
  export let onclick = () => {};
</script>

<div class="button-cell-container">
  <button on:click={onclick}>Test</button>
</div>

<style>
  /* .button-cell is the element that this component will be rendered in */
  :global(.button-cell) {
    display: flex;
    height: 100%;
  }

  .button-cell-container {
    /* background-color: crimson; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-shrink: 0;
    height: 100%;
  }

  button {
    background-color: coral;
    color: white;

    padding: 0.3em 0.8em;
    border: none;
    border-radius: 0.3em;

    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    background-color: chocolate;
  }

  button:active {
    background-color: crimson;
  }
</style>
