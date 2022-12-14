<script>
  import { Grid } from "ag-grid-community";
  import style1 from "ag-grid-community/styles//ag-grid.css";
  import style2 from "ag-grid-community/styles//ag-theme-alpine.css";

  import { onMount } from "svelte";

  import Modal from "../components/modal.svelte";

  // Modal

  let modalOptions = {
    open: false,
    message: undefined,
    position: "left",
  };

  // Button

  class BtnCellRenderer {
    init(params) {
      this.params = params;

      console.log(params);

      this.eGui = document.createElement("button");
      this.eGui.innerHTML = "Button One";

      this.btnClickedHandler = this.btnClickedHandler.bind(this);
      this.eGui.addEventListener("click", this.btnClickedHandler);
    }

    getGui() {
      return this.eGui;
    }

    btnClickedHandler(event) {
      modalOptions = {
        open: true,
        message: this.params.value,
        position: "left",
      };
    }

    destroy() {
      this.eGui.removeEventListener("click", this.btnClickedHandler);
    }
  }

  class BtnCellRenderer2 extends BtnCellRenderer {
    init(params) {
      super.init(params);
      this.eGui.innerHTML = "Button Two";
    }
    btnClickedHandler(event) {
      modalOptions = {
        open: true,
        message: this.params.value,
        position: "right",
      };
    }
  }

  // Grid

  var gridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true,
      floatingFilter: true,
      width: 120,
    },
    columnDefs: [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" },
      {
        headerName: "Button One",
        field: "make",
        cellRenderer: BtnCellRenderer,
        cellRendererParams: {
          clicked: function (field) {
            alert(`${field} was clicked`);
          },
        },
      },
      {
        headerName: "Button Two",
        field: "model",
        cellRenderer: BtnCellRenderer2,
        cellRendererParams: {
          clicked: function (field) {
            alert(`${field} was clicked`);
          },
        },
      },
    ],
    rowData: [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
    ],
  };

  let eGridDiv;

  onMount(() => {
    new Grid(eGridDiv, gridOptions);
  });

  $: console.log(modalOptions);
</script>

<svelte:head />

<div
  bind:this={eGridDiv}
  id="myGrid"
  style="width: 100%; height: 200px !important;"
  class="ag-theme-alpine"
/>

<Modal {modalOptions} />

<style>
  /* :global(.ag-header-cell) {
    background-color: aqua;
  } */
</style>
