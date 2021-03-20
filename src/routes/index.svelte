<script context="module">
  import successkid from 'images/successkid.jpg';
  export async function preload() {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`/propkeps`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      console.log('whats this', res.status);
      this.error(res.status, data.message);
    }
  }
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
  <img alt="Success Kid" src={successkid} />
  <figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>

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
