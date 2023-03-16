<script>
  import { onMount } from "svelte";

  export let posts = [];

  onMount(async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    posts = data;
  });
</script>