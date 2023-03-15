<script>
  import Menu from "../molecules/Menu.svelte";
  import Image from "../atoms/Image.svelte";
  import Logo from '../../../assets/img/logo_color.png'

  /**
   * @type {string}
  */
  export let current = 'home';
</script>

<div class="sidebar-menu">
  <Image
    imageSrc={Logo}
    imageAlt="SkyCloud Logo"
    imageWidth=225
  />
  <Menu current='{current}' />
</div>

<style>
  .sidebar-menu{
    width: 10%;
    min-width: 280px;
    height: 100vh;  
    padding-left: 40px; 
    padding-top: 50px;
    background-color: var(--color-background-primary);
  }
</style>