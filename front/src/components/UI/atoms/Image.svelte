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

  .icon--small{
    height: 20px;
    width: auto;
  }

  .icon-medium{
    height: 35px;
    width: 35px;
    object-fit: cover;
  }

  .icon--large{
    height: 70px;
    width: auto;
  }
</style>