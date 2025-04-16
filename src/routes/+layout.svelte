<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<footer class="bg-purple-900 text-white py-8">
    <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <!-- Left Column -->
            <div class="text-center md:text-left space-y-2">
                <p class="text-lg font-semibold">
                    &copy; 2025 The Incredibots. All rights reserved.
                </p>
                <p class="text-white/90">
                    Contact us at <a href="mailto:incredibots26336@gmail.com" 
                                   class="text-white hover:text-purple-200 transition-colors">
                        incredibots26336@gmail.com
                    </a>
                </p>
            </div>

            <!-- Right Column -->
            <div class="text-center md:text-right space-y-2">
                <p class="text-white/90">
                    <a href="/contact" 
                       class="text-white hover:text-purple-200 transition-colors">
                        Contact us here
                    </a>
                </p>
                <p class="text-white/90">
                    Follow us on 
                    <a href="https://www.instagram.com/incredibots26336/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="text-white hover:text-purple-200 transition-colors">
                        Instagram
                    </a>
                </p>
            </div>
        </div>
    </div>
</footer>
