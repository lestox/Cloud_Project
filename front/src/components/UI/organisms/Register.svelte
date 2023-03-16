<script>
  import Text from '../atoms/Text.svelte';
  import RegisterForm from '../molecules/forms/RegisterForm.svelte';
</script>

<div class='register-section {$$props.class}'>
  <Text textTag='h1' textStyle='main-title'>Welcome 👋</Text>
  <RegisterForm class='margin-top-3' method="Post" action="/register"/>
</div>

<style>
  .register-section{
    max-width: 380px;
    display: block;
    text-align: center;
    align-self: center;
  }
</style>