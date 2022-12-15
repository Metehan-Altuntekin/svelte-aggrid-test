<script>
  import { Grid } from "ag-grid-community";
  import style1 from "ag-grid-community/styles//ag-grid.css";
  import style2 from "ag-grid-community/styles//ag-theme-alpine.css";

  import { onMount } from "svelte";

  import ButtonCell from "../components/buttonCell";

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
        width: 250, // Has to be set to make the buttons visible
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

    gridOptions.api.sizeColumnsToFit(); // resize columns to fit the grid width

    // resize again if the window is resized
    window.addEventListener("resize", () => gridOptions.api.sizeColumnsToFit());
  });
</script>

<div bind:this={eGridDiv} id="myGrid" class="ag-theme-alpine" />

<style>
  #myGrid {
    width: 100%;
    height: 500px;
  }
</style>
