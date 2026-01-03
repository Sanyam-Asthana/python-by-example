<script>
    let { data } = $props();
    import hljs from "highlight.js";
    import "highlight.js/styles/tokyo-night-dark.css";

    $effect(() => {
        // We reference data.data to make the effect reactive
        const trigger = data.data;
        hljs.highlightAll();
    });
</script>

<a href="/" class="text-2xl">Python By Example</a>
<div class="grid grid-cols-2 gap-x-12 pb-10 pt-5 border-b border-gray-800">
    <div class="py-4">
        <h1 class="text-4xl font-bold mb-4 text-white">{data.data[0]}</h1>
        <div class="prose prose-invert text-gray-300 text-xl">
            <p>
                {@html data.data[2]}
            </p>
        </div>

        {#if data.nextSlug}
            <div class="text-gray-400 mt-5">
                Next Example: <a
                    href="/{data.nextSlug}"
                    class="text-blue-300 underline">{data.nextTitle}</a
                >
            </div>
        {/if}
    </div>

    <div class="self-start">
        {#key data.data}
            <div class="bg-[#1a1b26] rounded-md border border-gray-800 my-5">
                <pre class="m-0! bg-transparent!"><code class="language-python">
{data.data[1].trim()}
        </code></pre>
            </div>

            {#if data.data[3]}
                <div
                    class="bg-[#1a1b26] rounded-md border border-gray-800 my-5"
                >
                    <pre class="m-0! bg-transparent!"><code
                            class="language-bash">
{data.data[3].trim()}
            </code></pre>
                </div>
            {/if}
        {/key}
    </div>
</div>
