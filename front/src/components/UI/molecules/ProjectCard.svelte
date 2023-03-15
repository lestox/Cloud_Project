<script>
  import Text from "../atoms/Text.svelte";
  import Link from "../atoms/Link.svelte";
  import Icon from "../atoms/Icon.svelte";

  import ProjectIcon from "../../../assets/icons/ProjectIcon.svelte";
</script>

<div class='project-card'>
  <Icon class='project-card__icon icon-project'>
    <ProjectIcon />  
  </Icon>

  <div class='margin-top-3'>
    <Link linkUrl='/dashboard'>
      <Text
        textTag='h3'
        textColor = 'var(--color-primary)' 
        class='section-title'
      >
        Project Name 1 
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
      Created : 02/06/2022
    </Text>
    <Text
      textTag='p'
      textColor = 'var(--color-primary)' 
      class='.project-card__label text-light text-preset-2'
    >
      Updated : 04/02/2023
    </Text>
  </div>

</div>