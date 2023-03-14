<script>
  /**
   * @type {string}
  */
  export let textTag = 'p';
  export let textColor = 'var(--color-text-dark)';
  export let textStyle = 'main-title';
</script>

<svelte:element this={textTag}
  style:color={textColor}
  class={textStyle} 
>
  <slot/>
</svelte:element>
