<script>
  import Text from "../atoms/Text.svelte";
  import Button from "../atoms/Button.svelte";

  export let data;
  let USER_ID = import.meta.env.VITE_USER_ID;
</script>

<div class='account'>
  <Text
    textTag='h1'
    class='main-title'
  >
    My Account
  </Text>
  
  <div class='account-field margin-top-2'>
    <Text
      textTag='p'
      class='section-title'
    >
      Full name
    </Text>
  
    <Text
      textTag='p'
    >
    {#each data.item as user}
      {#if user.id == USER_ID}
        {user.fullname}
      {/if}
    {/each}
    </Text>
  </div>
  
  <div class='account-field'>
    <Text
      textTag='p'
      class='section-title'
    >
      Email
    </Text>
  
    <Text
      textTag='p'
    >
      {#each data.item as user}
        {#if user.id == USER_ID}
          {user.email}
        {/if}
      {/each}
    </Text>
  </div>
  
  <Button class='margin-top-2'>
      Modify
  </Button>
</div>

<style>
  .account{
    margin: var(--spacing-3);
  }

  .account-field{
    display: flex;
    column-gap: 20px;
    align-items: flex-end;
  }  
</style>