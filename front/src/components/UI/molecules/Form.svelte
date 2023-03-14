<script>
    import Input from '../atoms/Input.svelte';
    export let method = '';
    export let action = '';
</script>

<form class="loginForm" method={method} action={action}>
    <Input type='email' id='email' name='email' placeholder='email' required/>
    <Input type='password' id='password' name='password' placeholder='password' required/>
</form>


<style>


  </style>
