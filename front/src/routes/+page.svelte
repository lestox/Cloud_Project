<script>
  import '../assets/global.css';

  import Text from '../components/UI/atoms/Text.svelte';
  import Button from '../components/UI/atoms/Button.svelte';
  import Link from '../components/UI/atoms/Link.svelte';
  import Form from '../components/UI/molecules/Form.svelte';
  import Image from '../components/UI/atoms/Image.svelte';
  import Icon from '../components/UI/atoms/Icon.svelte';

  import HomeIcon from '../assets/icons/HomeIcon.svelte';
  import AccountIcon from '../assets/icons/AccountIcon.svelte';
  import LogoutIcon from '../assets/icons/LogoutIcon.svelte';
  import UserIcon from '../assets/icons/UserIcon.svelte';
  import DatabaseIcon from '../assets/icons/DatabaseIcon.svelte';
  import StorageIcon from '../assets/icons/StorageIcon.svelte';
  import BackupIcon from '../assets/icons/BackupIcon.svelte';
  import ProjectIcon from '../assets/icons/ProjectIcon.svelte';
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

<Icon name="home" >
  <HomeIcon />
</Icon>
<Icon name="account">
  <AccountIcon />
</Icon>
<Icon name="logout">
  <LogoutIcon />
</Icon>
<Icon name="user" iconClass="icon--large">
  <UserIcon />
</Icon>
<Icon name="project" iconClass="icon-project">
  <ProjectIcon />
</Icon>
<Icon name="database" iconClass="icon--medium">
  <DatabaseIcon />
</Icon>
<Icon name="storage" iconClass="icon--medium">
  <StorageIcon />
</Icon>
<Icon name="backup" iconClass="icon--medium">
  <BackupIcon />
</Icon>