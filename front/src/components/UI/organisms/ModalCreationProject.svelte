<script>
  import AddProjectForm from "../molecules/forms/AddProjectForm.svelte";
  import Modal from "../molecules/Modal.svelte";

  /**
   * @type {string}
  */
  export let id;
</script>

<Modal id={id}>
  <AddProjectForm method="Post" action="?/add"/>
</Modal>