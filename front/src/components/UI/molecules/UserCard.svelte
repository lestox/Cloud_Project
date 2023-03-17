<script>
  import Link from "../atoms/Link.svelte";
  import Text from "../atoms/Text.svelte";
  import Icon from "../atoms/Icon.svelte";
  import UserIcon from "../../../assets/icons/UserIcon.svelte";

  export let data;
  let USER_ID = import.meta.env.VITE_USER_ID;
</script>

<div class='user-card'>
  <Icon class="user-card__icon icon--large">
    <UserIcon />
  </Icon>
  <Link class="user-card__link" linkUrl='/account'> 
    {#each data.user as user}
      {#if user.id == USER_ID}
        {user.fullname}
      {/if}
    {/each}
  </Link>
  <Text class="user-card__text"> 
    {#each data.user as user}
      {#if user.id == USER_ID}
        {user.email}
      {/if}
    {/each} 
  </Text>
</div>