<script>
  import Link from "../atoms/Link.svelte";
  import Text from "../atoms/Text.svelte";
  import Icon from "../atoms/Icon.svelte";
  import UserIcon from "../../../assets/icons/UserIcon.svelte";
</script>

<div class='user-card'>
  <Icon class="user-card__icon icon--large">
    <UserIcon />
  </Icon>
  <Link class="user-card__link" linkUrl='/about'> 
    Matt Doe
  </Link>
  <Text class="user-card__text"> 
    matt.doe@gmail.com 
  </Text>
</div>