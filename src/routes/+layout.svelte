<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<footer class="bg-black text-white py-8">
    <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <!-- Left Column -->
            <div class="text-center md:text-left space-y-2">
                <p class="text-lg font-semibold">
                    &copy; 2025 The Incredibots. All rights reserved.
                </p>
                <p class="text-white/90">
                    Contact us at <a href="mailto:incredibots26336@gmail.com" 
                                   class="text-white hover:text-red-300 transition-colors">
                        incredibotsftc@gmail.com
                    </a>
                </p>
            </div>

            <!-- Right Column -->
            <div class="text-center md:text-right space-y-2">
                <p class="text-white/90">
                    <a href="/contact" 
                       class="text-white hover:text-red-300 transition-colors">
                        Contact us here
                    </a>
                </p>
                <p class="text-white/90">
                    Follow us on Instagram @ftc26336
                </p>
            </div>
        </div>

        <!-- Sponsor Section -->
        <div class="mt-8 border-t border-white/20 pt-8">
            <div class="flex flex-col items-center">
                <p class="text-white/90 mb-4">Sponsored by</p>
                <a href="https://incorta.com" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
                    <img src="/Sponsors/IncortaLogo.png" alt="Incorta Logo" class="h-12 w-auto">
                </a>
            </div>
        </div>
    </div>
</footer>
