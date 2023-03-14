<script>
    import Register from "../organisms/Register.svelte";
</script>

<body>
    <div class='global-card'>
        <div class='register-section'>
            <Register class='margin-top-3'/>
        </div>
        <div class='logo-section'>
            
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

    .register-section {
      display: flex;
      justify-content: center;
    }

    .logo-section {
        background-color: var(--color-primary);
        border-radius: 0 var(--large-radius) var(--large-radius) 0;
    }
</style>