<script>
    let { data } = $props();
</script>

<h1 class="text-5xl mb-5">Python By Example</h1>
<p class="text-2xl mb-10">
    Python By Example is an online Python resource, inspired by <a
        href="https://gobyexample.com"
        class="text-blue-300 underline">Go By Example</a
    >. This resource is primarily focused at people who have prior programming
    knowledge and want to learn Python.
</p>

<h2 class="text-4xl mb-5">Contents</h2>
<ol class="list-decimal list-inside space-y-2">
    {#each data.contents as item}
        <li class="text-xl text-blue-300 underline">
            <a href={item[1]}>{item[0]}</a>
        </li>
    {/each}
</ol>
