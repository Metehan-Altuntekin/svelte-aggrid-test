<script>
  import { Grid } from "ag-grid-community";
  import style1 from "ag-grid-community/styles//ag-grid.css";
  import style2 from "ag-grid-community/styles//ag-theme-alpine.css";

  import { onMount } from "svelte";

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
</script>

<svelte:head />

<div
  bind:this={eGridDiv}
  id="myGrid"
  style="width: 100%; height: 200px !important;"
/>

<style>
  /* :global(.ag-header-cell) {
    background-color: aqua;
  } */
</style>
