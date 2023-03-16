<script>
  import Input from '../../atoms/Input.svelte';
  import Button from '../../atoms/Button.svelte';
  import Text  from '../../atoms/Text.svelte';
  import Link  from '../../atoms/Link.svelte';

  /**
   * @type {string}
  */
  export let method = '';
  export let action = '';
</script>

<form class="registerForm {$$props.class}" method={method} action={action}>
  <Text textTag='h3' textStyle='text-semibold'>Please enter your details</Text>
  <Input type='text' id='fullName' class='margin-top-2' name='fullName' placeholder='Full name' required/>
  <Input type='email' id='email' class='margin-top-1' name='email' placeholder='Email' required/>
  <Input type='password' id='password' class='margin-top-1' name='password' placeholder='Password' required/>
  <Input type='password' id='password' class='margin-top-1' name='password' placeholder='Retype password' required/>
  <Button class='margin-top-2' buttonWidth='button--full'>Sign up</Button>
  <Text textTag='p' class='text-light margin-top-1'>Already have an account ? <Link class="text-semibold" linkUrl='/login'>Login</Link></Text>
</form>


<style>
  .registerForm{
    max-width: 380px;
    display: block;
    text-align: center;
  }
</style>
