<script>
    // Each item has a label (display text) and path (href)
    let links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Outreach", path: "/outreach" },
        { label: "Contact", path: "/contact" },
        { label: "Robot", path: "/robot" }
    ];
</script>

<nav class="bg-red-600 h-16 flex items-center px-4">
    <a href="/">
    <div class="flex items-center">
        <img src="favicon.png" alt="The Incredibots" class="h-10 w-10">
        <h1 class="text-white text-xl ml-2 whitespace-nowrap">The Incredibots #26336</h1>
    </div>
    </a>
    <div class="flex justify-center flex-1 gap-8">
        {#each links as { label, path }}
            <a 
                href="{path}" 
                class="text-white font-bold hover:underline"
            >
                {label}
            </a>
        {/each}
    </div>
</nav>