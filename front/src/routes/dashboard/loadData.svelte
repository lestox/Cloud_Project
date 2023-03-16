<script>

/** @type {import('./$types').PageLoad} */
export let projects

export async function load({ fetch, params }) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon`);
  const item = await res.json();
  projects = item
  return { item };
}

</script>