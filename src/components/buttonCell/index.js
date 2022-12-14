import ButtonCellComponent from "./buttonCell.svelte";

// AG Grid requires a class that implements the ICellRenderer interface
// So we need to create a class that renders the Svelte component into a div

/**
 * AG Grid cell renderer that renders a Svelte component
 */
export default class ButtonCell {
  init(params) {
    this.params = params;

    this.eGui = document.createElement("div");
    this.eGui.classList.add("button-cell");

    // Render the component into the div
    new ButtonCellComponent({
      target: this.eGui,
      props: {
        onclick: () => {
          this.btnClickHandler();
        },
      },
    });
  }

  getGui() {
    return this.eGui;
  }

  btnClickHandler(event) {
    console.log("Button clicked");
  }
}
