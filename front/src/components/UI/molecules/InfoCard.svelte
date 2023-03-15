<script>
  import Link from "../atoms/Link.svelte";
  import Text from "../atoms/Text.svelte";
  import Icon from "../atoms/Icon.svelte";

  import StorageIcon from "../../../assets/icons/StorageIcon.svelte";

  /**
   * @type {string}
  */
  export let infoTitle = 'Storage';
  export let infoLabel = 'my infos';
  export let infoPercentage = '';
</script>

<div class='info-card margin-top-1'>
  <Icon class="info-card__icon icon--medium">
    <slot></slot>
  </Icon>
  <Text class="info-card__title"> 
    {infoTitle}
  </Text>
  <Text 
    class='info-card__label text-light text-preset-1'
    textColor="var(--color-text-medium)"
  > 
    {infoLabel}
  </Text>
  <Text class="info-card__percentage"> 
    {infoPercentage}
  </Text>
</div>