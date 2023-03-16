<script>
  import Modal from "../atoms/Modal.svelte";
  import Text from "../atoms/Text.svelte";
  import Input from "../atoms/Input.svelte";
  import Button from "../atoms/Button.svelte";

  /**
   * @type {string}
  */
  export let id;
</script>

<Modal id={id}>
  <Text 
    textTag='h2' 
    class='section-title text-center'
  > 
    New Website 
  </Text>
  <Input type='text' id='project-name' class='margin-top-2' name='project-name' placeholder='Project name' required />
  <Input type='url' id='url' class='margin-top-1' name='url' placeholder='Url' required />
  <Button buttonWidth='button--full' class='margin-top-1'> Create </Button>
</Modal>