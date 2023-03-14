
<script>
    /**
     * @type {string}
    */
    export let linkUrl = '#';
    export let linkColor = 'var(--color-text-dark)';
  </script>
  
  <a href="{linkUrl}"
    class="link" style:color={linkColor}>          
      <slot/>
  </a>
  
  <style>
    .link{
      font-family: var(--font-family-primary);
      font-size: var(--font-size-regular);
      font-weight: var(--font-weight-semibold);
      text-decoration: none;
    }
  </style>