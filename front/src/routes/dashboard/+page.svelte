<script>
  import DashboardTemplate from "../../components/UI/templates/DashboardTemplate.svelte";
  import { user } from '../../stores';
  export let data
  console.log(data)
</script>

{#each data.item as user }
  <h1> {user.fullname} </h1>
{/each}

<DashboardTemplate />

