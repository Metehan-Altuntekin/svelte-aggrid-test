<script>
  import { Grid } from "ag-grid-community";
  import style1 from "ag-grid-community/styles//ag-grid.css";
  import style2 from "ag-grid-community/styles//ag-theme-alpine.css";

  import { onMount } from "svelte";

  import Modal from "../components/modal.svelte";
  import ButtonCell from "../components/buttonCell";

  // customElements.define("button-cell", ButtonCell);

  // Modal

  let modalOptions = {
    open: false,
    message: undefined,
    position: "left",
  };

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
        cellRenderer: ButtonCell,
        cellRendererParams: {
          buttonClickHandler() {
            console.log("this", this);
            modalOptions = {
              open: true,
              message: this.params.value,
              position: "left",
            };
          },
        },
      },
      {
        headerName: "Button Two",
        field: "model",
        cellRenderer: ButtonCell,
        cellRendererParams: {
          buttonClickHandler() {
            modalOptions = {
              open: true,
              message: this.params.value,
              position: "right",
            };
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

<div bind:this={eGridDiv} id="myGrid" class="ag-theme-alpine" />

<Modal {modalOptions} />

<style>
  #myGrid {
    width: 100%;
    height: 500px;
  }
</style>
