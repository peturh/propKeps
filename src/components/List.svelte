<script>
  import ListItem from '../components/ListItem.svelte';
  export let list;
</script>

<ul>
  {#each list as listItem}
    <ListItem {listItem} />
  {/each}
</ul>
