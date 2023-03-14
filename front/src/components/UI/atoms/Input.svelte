<script>
    export let type = '';
    export let id = '';
    export let name = '';
    export let placeholder = '';
</script>

<input 
type={type}
id={id} 
name={name} 
placeholder={placeholder}
class="input {$$props.class}"
/>


<style>
    .input{
      color: var(--color-text-medium);
      border: var(--border-height-regular) solid var(--color-disabled);
      border-radius: var(--color-disabled);
      padding: 16px;
      width: calc(100% - 32px);
      max-width: 380px;
      font-family: var(--font-family-primary);
      border-radius: var(--small-radius);
    }

    .input:focus {
      color: var(--color-text-dark);
    }

    .input:focus-visible {
        border: var(--border-height-thick) solid var(--color-highlight);
    }

    .input-valid {
        border: var(--border-height-thick) solid var(--color-highlight);
    }

    .input-invalid {
        border: var(--border-height-thick) solid #FF4D4D;
    }

  </style>
