<script>
  import Text from '../atoms/Text.svelte';
  import Login from '../molecules/forms/LoginForm.svelte';
</script>

<div class='login-section {$$props.class}'>
  <Text textTag='h1' textStyle='main-title'>Welcome back 👋</Text>
  <Login class='margin-top-3' method="Post" action="/login"/>
</div>

<style>
  .login-section{
    max-width: 380px;
    display: block;
    text-align: center;
    align-self: center;
  }
</style>