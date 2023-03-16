<script>
  import DashboardTemplate from "../../components/UI/templates/DashboardTemplate.svelte";
  export let data
  console.log(data)
</script>

{#each data.item.drinks as {idDrink, strDrink}}
  <h1>{strDrink}</h1>
  <h2>{idDrink}</h2>
{/each}

<DashboardTemplate />

