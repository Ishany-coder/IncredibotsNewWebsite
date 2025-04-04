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

<nav class="bg-gradient-to-b from-red-600 to-rose-600 h-16 flex items-center px-4 relative shadow-lg">
    <!-- Logo and Title -->
    <a href="/" class="flex items-center">
        <img src="/favicon.png" alt="Incredibots logo" class="h-14 w-12 rounded-full shadow-md">
        <h1 class="text-white text-2xl ml-2 font-bold tracking-wide whitespace-nowrap">The Incredibots</h1>
    </a>

    <!-- Hamburger Menu Button -->
    <button 
        class="md:hidden ml-auto text-white focus:outline-none"
        on:click={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen ? "true" : "false"}
    >
        <svg 
            class="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
                class="text-white font-semibold hover:text-yellow-400 transition-all duration-200 ease-in-out transform hover:scale-105"
                aria-label={label}
            >
                {label}
            </a>
        {/each}
    </div>

    <!-- Mobile Navigation -->
    {#if isMenuOpen}
        <div class="absolute right-0 top-16 bg-opacity-90 bg-red-700 w-64 py-6 px-6 shadow-xl rounded-md md:hidden transition-all duration-300 ease-in-out transform scale-95">
            {#each links as { label, path }}
                <a 
                    href="{path}" 
                    class="block text-white font-semibold py-3 hover:bg-rose-800 hover:underline transition duration-150 ease-in-out transform hover:scale-105"
                    on:click={() => isMenuOpen = false}
                    aria-label={label}
                >
                    {label}
                </a>
            {/each}
        </div>
    {/if}
</nav>
