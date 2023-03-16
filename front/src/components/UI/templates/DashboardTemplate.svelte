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
  import Modal from '../atoms/Modal.svelte';
  import Input from '../atoms/Input.svelte';
  import Icon from '../atoms/Icon.svelte';
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

    <Button> Add site </Button>

    <div class="content-cards margin-top-2">
      <ProjectCard 
        projectName = 'Project Name 1'
        projectCreation = '09/12/2022'
        projectUpdate = '03/01/2023'
      />
      <ProjectCard 
        projectName = 'Project Name 2'
        projectCreation = '05/03/2023'
        projectUpdate = '13/03/2023'
      />
    </div>
  </div>

  <SidebarInfos />

  <Modal class='hidden'>
    <Text 
      textTag='h2' 
      class='section-title text-center'
    > 
      New Website 
    </Text>
    <Input type='text' id='project-name' class='margin-top-2' name='project-name' placeholder='Project name' required />
    <Input type='url' id='url' class='margin-top-1' name='url' placeholder='Url' required />
    <Button buttonWidth='button--full' class='margin-top-1'> Create </Button>
  </Modal>
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
  }

  .content-cards{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
  }
</style>