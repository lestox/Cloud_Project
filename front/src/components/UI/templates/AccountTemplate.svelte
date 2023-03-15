<script>
  import '../../../assets/global.css';
  
  import SidebarMenu from '../organisms/SidebarMenu.svelte';
  import AccountInfos from '../organisms/AccountInfos.svelte';

</script>

<div class='page'>
  
  <SidebarMenu />
  <AccountInfos />

</div>

<style>
  .page{
    background-color: var(--color-background-secondary);
    display: flex;
  }  
</style>