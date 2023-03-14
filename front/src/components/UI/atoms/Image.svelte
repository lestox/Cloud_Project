<script>
  /**
   * @type {string}
  */
  export let imageSrc = '';
  export let imageAlt = 'image';
  export let imageStyle = 'image--large';
</script>

<img
  src={imageSrc}
  alt={imageAlt}
  class={imageStyle}
/>

<style>
  .image--large{
    height: 775px;
    width: 895px;
    object-fit: cover;
    border-radius: var(--border-radius);
  }
</style>