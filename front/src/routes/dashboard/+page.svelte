<script>
  import '../../assets/global.css';
  import '../../assets/css/UserCard.css'
  import '../../assets/css/InfoCard.css'
  
  import SidebarMenu from "../../components/UI/organisms/SidebarMenu.svelte";
  import SidebarInfos from '../../components/UI/organisms/SidebarInfos.svelte';
</script>

<div class='page'>
  <SidebarMenu />
  <h1>Dashboard Page</h1>
  <SidebarInfos />
</div>

<style>
  .page{
    background-color: var(--color-background-secondary);
    display: flex;
  }  
</style>