<script>
  export let modalOptions = {
    message: undefined,
    position: {
      from: "left",
      top: 0,
      left: 0,
      height: 0,
      width: 0,
    },
  };

  $: message = modalOptions.message;
  $: position = modalOptions.position;

  $: console.log("modal", modalOptions);
</script>

<div
  style="--top:{position.top}px;  --left: {position.left}px; --container-width: {position.width}px; --container-height: {position.height}px;"
  class="from-{position.from}"
>
  <h1>{message}</h1>
</div>

<style>
  div {
    background: #88e;
    padding: 1em;
    border: 1px solid #ccc;
    position: fixed;
    width: 200px;
    height: 200px;

    position: absolute;

    left: var(--left);
    top: var(--top);
  }

  /* Adjust the position of the modal based on the position.from prop */
  div.from-left {
    transform: translateX(calc(var(--container-width) * -1));
  }

  div.from-right {
    transform: translateX(calc(var(--container-width)));
  }

  div.from-top {
    transform: translateY(-100%);
  }

  div.from-bottom {
    transform: translateY(calc(var(--container-height)));
  }
</style>
