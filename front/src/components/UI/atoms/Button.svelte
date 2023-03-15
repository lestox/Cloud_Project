<script>
    /**
     * @type {string}
    */
    export let buttonWidth;
</script>

<button class="button {buttonWidth} {$$props.class}">            
    <slot/>
</button>


<style>
  .button{
    font-family: var(--font-family-primary);
    font-size: 16px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border: var(--border-height-thick) solid var(--color-primary);
    border-radius: var(--small-radius);
    padding: 16px 40px;
    cursor: pointer;
  }
  
  .button:hover{
    background-color: var(--color-secondary);
    border: var(--border-height-thick) solid var(--color-secondary);
  } 

  .button:active{
    background-color: var(--color-highlight);
    border: var(--border-height-thick) solid var(--color-highlight);
  }

  .button:disabled{  
    background-color: var(--color-disabled);
    border: var(--border-height-thick) solid var(--color-disabled);
  }

  .button:focus{ 
    border: var(--border-height-thick) solid var(--color-highlight);
  }

  .button--full{
    width: 100%;
  }
</style>