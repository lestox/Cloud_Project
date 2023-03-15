<script>
    import Input from '../../atoms/Input.svelte';
    import Button from '../../atoms/Button.svelte';
    import Text  from '../../atoms/Text.svelte';
    import Link  from '../../atoms/Link.svelte';
    export let method = '';
    export let action = '';
</script>

<form class="loginForm {$$props.class}" method={method} action={action}>
    <Text textTag='h3' textStyle='text-semibold'>Please enter your details</Text>
    <Input type='email' id='email' class='margin-top-2' name='email' placeholder='Email' required/>
    <Input type='password' id='password' class='margin-top-1' name='password' placeholder='Password' required/>
    <Link linkUrl='/reset-password' class='margin-top-1'>Forgot Password ?</Link>
    <Button class='margin-top-2' buttonWidth='button--full'>Log in</Button>
    <Text textTag='p' class='text-light margin-top-1'>Don't have an account? <Link class="text-semibold" linkUrl='/register'>Register</Link></Text>
</form>


<style>
    .loginForm{
        max-width: 380px;
        display: block;
        text-align: center;
    }


</style>
