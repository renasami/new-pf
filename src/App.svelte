<script lang="ts">
  import "carbon-components-svelte/css/g80.css";
  import Header from "./components/layouts/Header.svelte";
  import { Route, Router } from 'svelte-routing';
  import About from './pages/About.svelte';
  import Contact from './pages/Contact.svelte';
  import Skills from './pages/Skills.svelte';
  import Works from './pages/Works.svelte';
</script>

<main>
  <Router>
    <Route path="/" component="{About}" />
    <Route path="contact" component="{Contact}" />
    <Route path="skills" component="{Skills}" />
    <Route path="works" component="{Works}" />
  </Router>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

</style>
