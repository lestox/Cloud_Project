<script>
  import '../../assets/global.css';
  import '../../assets/css/UserCard.css'
  import '../../assets/css/InfoCard.css'
  import '../../assets/css/ProjectCard.css'
  
  import SidebarMenu from "../../components/UI/organisms/SidebarMenu.svelte";
  import SidebarInfos from '../../components/UI/organisms/SidebarInfos.svelte';
  import ProjectCard from '../../components/UI/molecules/ProjectCard.svelte';
</script>

<div class='page'>
  <SidebarMenu />
  <h1>Dashboard Page</h1>
  <ProjectCard />
  <SidebarInfos />
</div>

<style>
  .page{
    background-color: var(--color-background-secondary);
    display: flex;
  }  
</style>