<script context="module">
  import List from '../components/List.svelte';
  export async function preload() {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`/propkeps`);
    const data = await res.json();

    if (res.status === 200) {
      return { list: data };
    } else {
      console.log('whats this', res.status);
      this.error(res.status, data.message);
    }
  }
</script>


<script>
  import Layout from "../components/Layout.svelte";
  import ListItem from "../components/ListItem.svelte";
  export let list;
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Kom o köp propellerhattar</h1>

<List {list} />
<!-- <Layout {list}/> -->

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
