<script>
  import Menu from "../molecules/Menu.svelte";
  import Image from "../atoms/Image.svelte";
  import Logo from '../../../assets/img/logo_color.png'
</script>

<div class="sidebar-menu">
  <Image
    imageSrc={Logo}
    imageAlt="SkyCloud Logo"
    imageWidth=225
  />
  <Menu current='account' />
</div>

<style>
  .sidebar-menu{
    width: 10%;
    min-width: 280px;
    height: 100vh;  
    padding-left: 40px; 
    padding-top: 50px;

    background-color: aquamarine;
  }
</style>