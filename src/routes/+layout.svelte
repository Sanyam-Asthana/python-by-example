<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import hljs from "highlight.js";
    import "highlight.js/styles/tokyo-night-dark.css";

    $effect(() => {
        hljs.highlightAll();
    });
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="mx-auto max-w-[80%] min-h-screen">
    {@render children()}
</div>

<svelte:body />

<style>
    :global(body) {
        background-color: rgb(30, 30, 30);
        margin: 0;
        color: white;
        margin-top: 50px;
        font-family: "Latin Modern Roman";
    }
</style>
