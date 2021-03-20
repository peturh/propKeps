<script>
  import cartService from '../services/cartservice'
  export let listItem;
  function handleClick(item) {
    cartService.add(item)
	}
</script>

<style>
  
  div {
    width: 80px;
    height: 20px;
    background: whitesmoke;
    cursor: pointer;
  }

</style>

<div on:click={handleClick(listItem)} >{listItem.company}</div>
