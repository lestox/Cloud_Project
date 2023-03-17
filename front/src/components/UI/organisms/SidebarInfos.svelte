<script>
    import InfoCard from "../molecules/InfoCard.svelte";
    import Text from "../atoms/Text.svelte";
    import UserCard from "../molecules/UserCard.svelte";

    import StorageIcon from "../../../assets/icons/StorageIcon.svelte";
    import DatabaseIcon from "../../../assets/icons/DatabaseIcon.svelte";
    import BackupIcon from "../../../assets/icons/BackupIcon.svelte";

    export let data;
    let USER_ID = import.meta.env.VITE_USER_ID;
</script>

<div class='sidebar-infos'>
  <div class='margin-top-2'>
    <UserCard data={data}/>
    <hr class="margin-top-1"/>
  </div> 

  <div class="margin-top-3">
    <Text 
      textTag='h2'
      class="section-title"
    > 
      Usage 
    </Text>

    <InfoCard
      infoTitle = 'Storage'
      infoLabel = '10.73go use'
      infoPercentage = {data.dataInfo}
    >
      <StorageIcon />
    </InfoCard>

    <InfoCard
      infoTitle = 'Database size'
      infoLabel = '392.2 mo use'
      infoPercentage = '18%'
      infoIcon = {DatabaseIcon}
    >
      <DatabaseIcon />
    </InfoCard>

    <InfoCard
      infoTitle = 'Last backup'
      infoLabel = 'Today at 5:23PM'
    >
      <BackupIcon />
    </InfoCard>
  </div>
  
  <div class='margin-top-2'>
    <hr class="margin-top-1" />
    <Text 
      textTag='p'
      class="text-light text-preset-2 margin-top-1"
      textColor="var(--color-text-medium)"
    >
      Tips : your ssh password is your account password
    </Text>
    <Text 
      textTag='p'
      class="text-preset-1 text-light margin-top-1"
      textColor="var(--color-text-medium)"
    >
      Project created the 13.03.2023
    </Text>
    <Text 
      textTag='p'
      class="text-preset-1 text-light"
      textColor="var(--color-text-medium)"
    >
      by     
      {#each data.user as user}
        {#if user.id == USER_ID}
          {user.fullname}
        {/if}
      {/each}
    </Text>
  </div>
</div>


<style>
  .sidebar-infos{
    width: 10%;
    min-width: 280px;
    height: 100vh;  
    padding: 0 var(--spacing-2);
    background-color: var(--color-background-primary);
  }  
</style>