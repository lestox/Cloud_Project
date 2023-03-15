<script>
  /**
   * @type {string}
  */
  export let imageSrc = '';
  export let imageAlt = 'image';
  export let imageStyle;
  export let imageWidth = 'auto';
  export let imageHeight = 'auto';
</script>

<img
  src={imageSrc}
  alt={imageAlt}
  class='image {imageStyle}'
  width={imageWidth}
  height={imageHeight}
/>

<style>
  .image{
    object-fit: contain;
  }

  .image--large{
    height: 775px;
    width: 895px;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  .image--regular{
    width: 375px;
  }
</style>