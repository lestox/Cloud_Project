<script>
  import Menu from "../molecules/Menu.svelte";
  import Image from "../atoms/Image.svelte";
</script>

<div class="sidebar-menu">
  <Image
    imageSrc="./../assets/img/logo_color.png"
    imageAlt="SkyCloud Logo"
  />
  <Menu />
</div>

<style>
  .sidebar-menu{
    width: 10%;
    min-width: 300px;
    height: 100vh;  
    padding-left: 40px; 
    padding-top: 50px;

    background-color: aquamarine;
  }

  .sidebar-menu img{
    width: 225px;
    height: auto;
    object-fit: cover;
  }
</style>