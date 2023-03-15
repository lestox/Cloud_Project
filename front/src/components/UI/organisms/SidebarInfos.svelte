<script>
    import InfoCard from "../molecules/InfoCard.svelte";
    import Text from "../atoms/Text.svelte";
    import UserCard from "../molecules/UserCard.svelte";

    import StorageIcon from "../../../assets/icons/StorageIcon.svelte";
    import DatabaseIcon from "../../../assets/icons/DatabaseIcon.svelte";
</script>

<div class='sidebar-infos'>
  <UserCard />
  <hr class="margin-top-1"/>  

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
      infoPercentage = '22%'
    >
      <StorageIcon />
    </InfoCard>

    <InfoCard
      infoTitle = 'Database size'
      infoLabel = '392.2 mo use'
      infoPercentage = '69%'
    >
      <DatabaseIcon />
    </InfoCard>

    <InfoCard
      infoTitle = 'Last backup'
      infoLabel = 'Today at 5:23PM'
    >
      <DatabaseIcon />
    </InfoCard>
  </div>
  
  <div class='margin-top-2'>
    <hr class="margin-top-1" />
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
      by Matt Doe
    </Text>
    <Text 
      textTag='p'
      class="text-preset-1 text-light"
      textColor="var(--color-text-medium)"
    >
      Last update : 14.03.2023
    </Text>
  </div>
</div>


<style>
  .sidebar-infos{
    width: 10%;
    min-width: 280px;
    height: 100vh;  
    padding: var(--spacing-2);
    background-color: var(--color-background-primary);
  }  
</style>