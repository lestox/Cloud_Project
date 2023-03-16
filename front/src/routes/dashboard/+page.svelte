<script>
  import DashboardTemplate from "../../components/UI/templates/DashboardTemplate.svelte";
  export let data;
  console.log(data);
</script>

<h1>{data.item.drinks[1].strDrink}</h1>
{data}
{ #each data.item.drinks as item}
  <div>
    <p>{item.strDrink}</p>
  </div>
{/each}
<DashboardTemplate />

