<script>
  import '../../../assets/global.css';
  import '../../../assets/css/UserCard.css'
  import '../../../assets/css/InfoCard.css'
  import '../../../assets/css/ProjectCard.css'

  import SidebarMenu from "../organisms/SidebarMenu.svelte";
  import SidebarInfos from '../organisms/SidebarInfos.svelte';
  import Text from '../atoms/Text.svelte';
  import Button from '../atoms/Button.svelte';
  import ProjectCard from '../molecules/ProjectCard.svelte';
  import ModalCreationProject from '../organisms/ModalCreationProject.svelte';

  export let data;
</script>

<div class='page'>

  <SidebarMenu />

  <div class='page-content margin-top-3'>
    <Text
      textTag='h1'
      class='main-title'
    > 
      My Cloud 
    </Text>

    <Button on:click={()=>{document.getElementById("modal-creation-project").hidden = false;}}> Add site </Button>

    <div class="content-cards margin-top-2">
      {#if data.item[0]}
        {#each data.item as project}
          <ProjectCard 
            projectName = {project.name}
            projectCreation = '09/12/2022'
            projectUpdate = {project.url}
          />
        {/each}
      {:else}
        <Text textTag='p'> You don't have a project yet. You can create one. </Text>
      {/if}

      
    </div>
  </div>

  <SidebarInfos data={data}/>

  <ModalCreationProject id='modal-creation-project' />
</div>

<style>
  .page{
    background-color: var(--color-background-secondary);
    display: flex;
  }  

  .page-content{
    width: 80%;
    height: fit-content;
    margin: var(--spacing-3);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 10px;
  }

  .content-cards{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 10px;
  }
</style>