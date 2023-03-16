<script>
  /**
   * @type {string}
  */
  export let textTag = 'p';
  export let textColor = 'var(--color-text-dark)';
  export let textStyle;
</script>

<svelte:element this={textTag}
  style:color={textColor}
  class='text {textStyle + ' ' + $$props.class}'
>
  <slot/>
</svelte:element>
