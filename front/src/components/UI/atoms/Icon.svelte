<script>
  export let name = ''
  export let color = 'currentColor'
  export let iconClass = 'icon--small'
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby={name}
  role="presentation"
  class={iconClass}
>
  <title id={name} lang="en">{`${name} icon`}</title>
  <g fill={color}>
    <slot />
  </g>
</svg>


<style>
  .icon--small{
    height: 20px;
    width: 25px;
  }

  .icon--medium{
    height: 35px;
    width: 35px;
    object-fit: cover;
  }

  .icon--large{
    height: 50px;
    width: 50px;
  }

  .icon-project{
    height: 70px;
    width: 75px;
  }
</style>