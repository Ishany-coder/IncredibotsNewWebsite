<script>
    // Each item has a label (display text) and path (href)
    let links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Outreach", path: "/outreach" },
        { label: "Contact", path: "/contact" },
        { label: "Robot", path: "/robot" }
    ];

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav class="bg-gradient-to-b from-red-600 to-rose-600 h-16 flex items-center px-4">
    <a href="/">
    <div class="flex items-center">
        <img src="/favicon.png" alt="incredibots logo" class="h-12 w-10">
        <h1 class="text-white text-xl ml-2 whitespace-nowrap">The Incredibots</h1>
    </div>
    </a>

    <!-- Hamburger Menu Button -->
    <button 
        class="md:hidden ml-auto text-white"
        on:click={toggleMenu}
        aria-label="Toggle menu"
    >
        <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
        >
            {#if isMenuOpen}
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M6 18L18 6M6 6l12 12"
                />
            {:else}
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M4 6h16M4 12h16M4 18h16"
                />
            {/if}
        </svg>
    </button>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex justify-center flex-1 gap-8">
        {#each links as { label, path }}
            <a 
                href="{path}" 
                class="text-white font-bold hover:underline"
            >
                {label}
            </a>
        {/each}
    </div>

    <!-- Mobile Navigation -->
    {#if isMenuOpen}
        <div class="absolute right-0 top-16 bg-red-600 w-64 py-4 px-4 shadow-lg md:hidden">
            {#each links as { label, path }}
                <a 
                    href="{path}" 
                    class="block text-white font-bold py-2 hover:underline"
                    on:click={() => isMenuOpen = false}
                >
                    {label}
                </a>
            {/each}
        </div>
    {/if}
</nav>