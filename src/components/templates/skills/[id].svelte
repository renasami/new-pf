<div>
    <h2><a href={url} use:link>{ttl}</a></h2>
    <img src={pic} alt={ttl}>
    <p>
        {description}
    </p>
</div>

<script lang="ts">
    import { link } from "svelte-routing"
    export let ttl:string
    export let pic:string
    export let description:string
    export let url:string
</script>

<style scoped>

</style>