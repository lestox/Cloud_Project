<script>
  import Text from '../components/UI/atoms/Text.svelte';
  import Button from '../components/UI/atoms/Button.svelte';
  import Link from '../components/UI/atoms/Link.svelte';
  import Form from '../components/UI/molecules/Form.svelte';
  import '../assets/global.css';
</script>

<Text 
textTag='h2' textStyle='main-title'>
  Homepage
</Text>

<Button
buttonWidth='button--full'> 
  Se connecter 
</Button>
<Button> 
  Se connecter 
</Button>

<Link
linkUrl='/reset-password'> 
  Mot de passe oublié ? 
</Link>