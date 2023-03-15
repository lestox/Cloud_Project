<script>
  import Link from "../atoms/Link.svelte";
  import Icon from "../atoms/Icon.svelte";  
  
  import HomeIcon from "../../../assets/icons/HomeIcon.svelte";
  import AccountIcon from "../../../assets/icons/AccountIcon.svelte";
  import LogoutIcon from "../../../assets/icons/LogoutIcon.svelte";

  /**
   * @type {string}
  */
  export let current = 'home';

</script>

<div class="menu">
  <div class="menu-el {current === 'home' ? 'menu-el--active' : ''}">
    <Icon name="home" class="icon--small" >
      <HomeIcon />
    </Icon>
    <Link
    linkUrl='/reset-password'> 
      My cloud
    </Link>
  </div>

  <div class="menu-el {current === 'account' ? 'menu-el--active' : ''}">
    <Icon name="account" class="icon--small" >
      <AccountIcon />
    </Icon>
    <Link
    linkUrl='/reset-password'> 
      Account 
    </Link>
  </div>

  <div class="menu-el">
    <Icon name="logout" class="icon--small" >
      <LogoutIcon />
    </Icon>
    <Link
    linkUrl='/reset-password'> 
      Logout
    </Link>
  </div>
</div>

<style>
  .menu{
    width: 225px;
    margin-top: 85px;
  }

  .menu-el{
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin: 10px 0;
    padding: 10px 15px;
  }

  .menu-el--active{
    background-color: var(--color-background-secondary);
    border-radius: var(--x-small-radius);
  }
</style>