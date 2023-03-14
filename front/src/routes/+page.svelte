<script>
    import Form from '../components/UI/molecules/Form.svelte';
    import '../assets/global.css';
</script>

<h1>Home Page</h1>

<Form method='POST' action='/api/auth/register' />