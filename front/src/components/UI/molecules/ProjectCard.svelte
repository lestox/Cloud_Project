<script>
  import Text from "../atoms/Text.svelte";
  import Link from "../atoms/Link.svelte";
  import Icon from "../atoms/Icon.svelte";

  import ProjectIcon from "../../../assets/icons/ProjectIcon.svelte";

  /**
   * @type {string}
  */
  export let projectName = 'Project Name';
  export let projectCreation = '02/03/2023';
  export let projectUpdate = '03/03/2023';
</script>

<div class='project-card'>
  <Icon class='project-card__icon icon-project'>
    <ProjectIcon />  
  </Icon>

  <div class='margin-top-3 full-width'>
    <Link linkUrl='/dashboard'>
      <Text
        textTag='h3'
        textColor = 'var(--color-primary)' 
        class='section-title'
      >
        {projectName} 
      </Text>
    </Link>
    <hr />
  </div>

  <div class='margin-top-1'>
    <Text
      textTag='p'
      textColor = 'var(--color-primary)' 
      class='project-card__label text-light text-preset-2'
    >
      Created: {projectCreation}
    </Text>
    <Text
      textTag='p'
      textColor = 'var(--color-primary)' 
      class='.project-card__label text-light text-preset-2'
    >
      Access: {projectUpdate}
    </Text>
  </div>

</div>