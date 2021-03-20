<script>
  import ListItem from '../components/ListItem.svelte';
  export let list;
</script>


<style>

</style>

<ul>
  {#each list as listItem}
    <ListItem {listItem} />
  {/each}
</ul>
