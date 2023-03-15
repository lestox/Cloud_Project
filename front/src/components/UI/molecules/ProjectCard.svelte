<script>
  import Text from "../atoms/Text.svelte";
  import Icon from "../atoms/Icon.svelte";

  import ProjectIcon from "../../../assets/icons/ProjectIcon.svelte";
</script>

<div class='project-card'>
  <Icon class='project-card__icon icon-project'>
    <ProjectIcon />  
  </Icon>
  <div>
    <Text
      textTag='h3'
      class='section-title'
    >
      Project Name 1 
    </Text>
    <hr />
  </div>
  <Text 
    class='project-card__label text-light text-preset-2'
  >
    Created : 02/06/2022
  </Text>
  <Text
    class='.project-card__label text-light text-preset-2'
  >
    Updated : 04/02/2023
  </Text>
</div>