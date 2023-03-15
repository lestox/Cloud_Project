<script>
    import Login from "../organisms/Login.svelte";
    import Image from "../atoms/Image.svelte";
    import ProjectIcon from '../../../assets/img/logo_white.png';
</script>

<body>
    <div class='global-card'>
        <div class='login-section'>
            <Login />
        </div>
        <div class='logo-section'> 
            <Image imageSrc={ProjectIcon} imageAlt="Sky Cloud" imageStyle="image--regular block-center" />
        </div>
    </div>
</body>

<style>
    body {
      background-color: var(--color-background-secondary);
    }

    .global-card {
      width: 92vw;
      height: 94vh;
      margin: 3vh auto;
      display: grid;
      grid-template-columns: 50% 50%;
      background-color: var(--color-background-primary);
      border-radius: var(--large-radius);
    }

    .login-section, .logo-section {
      display: flex;
      justify-content: center;
    }

    .logo-section {
      background-color: var(--color-primary);
      border-radius: 0 var(--large-radius) var(--large-radius) 0;
    }

</style>