<script>
  import List from '../components/List.svelte';
  export let list;

</script>

<style>

 .container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
  background: palegoldenrod;
  height: 100%;
  width: 100%;
}


.list {
  grid-column-start: first;
  grid-column-end: line2;
  grid-row-start: row1-start;
  grid-row-end: third-line;
  background-color: thistle;
}

</style>

<div class="container"> 
 <div class="list" >
  <List {list}/>
</div> </div>