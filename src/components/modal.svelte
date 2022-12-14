<script>
  export let modalOptions = {
    open: false,
    message: undefined,
    position: "left",
  };

  $: open = modalOptions.open;
  $: message = modalOptions.message;
  $: position = modalOptions.position;

  $: console.log("modal", modalOptions);
</script>

{#if open}
  <div class={position === "left" ? "left" : "right"}>
    <h1>{message}</h1>
  </div>
{/if}

<style>
  div {
    background: #88e;
    padding: 1em;
    border: 1px solid #ccc;
    position: fixed;
    width: 200px;
    height: 200px;

    position: fixed;
    top: 100px;
    left: 100px;
  }
  div.left {
    left: 100px;
  }
  div.right {
    right: 100px;
    left: unset;
  }
</style>
