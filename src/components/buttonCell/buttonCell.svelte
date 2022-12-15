<script>
  import { onMount } from "svelte";
  import Modal from "../modal.svelte";

  let container;

  const getContainerPosition = () => container.getBoundingClientRect();

  // Map of modals keyed by the side they are on, so we don't create multiple modals on the same side
  let modals = new Map();

  function createModal({ from, message }) {
    if (modals.get(from)) return; // Don't create a modal if one already exists on the same side

    const { top, left, height, width } = getContainerPosition();

    let position = {
      from,
      top,
      left,
      height,
      width,
    };

    // Create a new modal in body - this is the only way to get the modal to be over the AG Grid
    const modal = new Modal({
      target: document.querySelector("body"),
      props: {
        modalOptions: {
          message,
          position,
        },
      },
    });

    modals.set(from, modal);

    return modal;
  }

  onMount(() => {
    window.container = container;
  });
</script>

<div class="button-cell-container" bind:this={container}>
  <button
    on:click={() =>
      createModal({
        from: "left",
        message: "From Left",
      })}>Left</button
  >
  <button
    on:click={() =>
      createModal({
        from: "right",
        message: "From Right",
      })}>Right</button
  >
  <button
    on:click={() =>
      createModal({
        from: "top",
        message: "From Top",
      })}>Top</button
  >
  <button
    on:click={() =>
      createModal({
        from: "bottom",
        message: "From Bottom",
      })}>Bottom</button
  >
</div>

<style>
  /* .button-cell is the element that this component will be rendered in */
  :global(.button-cell) {
    display: flex;
    height: 100%;
    overflow: visible;
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
