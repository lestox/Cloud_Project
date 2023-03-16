<script>
  import Button from "./Button.svelte";
  import Link from "./Link.svelte";
  import Icon from "./Icon.svelte";
  import CloseIcon from "../../../assets/icons/CloseIcon.svelte";

  /**
   * @type {string}
  */
  export let id;
</script>

<div id={id} class='modal-background {$$props.class}' hidden>
  <div class='modal block-center'>
    <Link
      on:click={()=>{document.getElementById("modal-creation-project").hidden = true;}}
    >
      <Icon name="close" class="modal__icon icon--small"> <CloseIcon /> </Icon>
  </Link>
    <div class='modal__content block-center'>
      <slot />
    </div>
  </div>
</div>

<style>
  .modal-background{
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(43, 43, 47, 0.38);
    backdrop-filter: blur(4.5px);
  }

  .modal{
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 600px;
    height: auto;
    padding: var(--spacing-3);
    background-color: var(--color-background-primary);
    border-radius: var(--card-radius);
  }

  .modal__content{
    width: 375px;
  }
</style>