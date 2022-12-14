import ButtonCellComponent from "./buttonCell.svelte";

// AG Grid requires a class that implements the ICellRenderer interface
// So we need to create a class that renders the Svelte component into a div

/**
 * AG Grid cell renderer that renders a Svelte component
 */
export default class ButtonCell {
  init(params) {
    this.params = params;

    // If a buttonClickHandler is passed in to cellRendererParams, use it
    if (params.buttonClickHandler)
      this.buttonClickHandler = params.buttonClickHandler;

    // Create a div to render the component into
    this.eGui = document.createElement("div");
    // Add a class to the div to style it from component
    this.eGui.classList.add("button-cell");

    // Render the component into the div
    new ButtonCellComponent({
      target: this.eGui,
      props: {
        onclick: () => {
          this.buttonClickHandler();
        },
      },
    });
  }

  getGui() {
    return this.eGui;
  }

  buttonClickHandler() {
    console.log("Button clicked");
  }
}
