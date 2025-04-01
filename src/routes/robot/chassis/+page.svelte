<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";
	import { onMount } from "svelte";

	let currentImageIndex = 0;
	let isTransitioning = false;
	let isHovered = false;
	let autoPlayInterval: ReturnType<typeof setInterval>;

	const designs = [
		{
			name: "Gobilda Mecanum Drive",
			date: "2023-02-15",
			src: "/gobilda.png",
			title: "Gobilda Mecanum Drive Chassis",
			description: "Our first chassis design using a traditional tank drive configuration with two drive motors on each side.",
			pros: [
				"Simple and reliable drive system",
				"Easy to control and maintain"
			],
			cons: [
				"Slow movement and turning",
                "super heavy and hard for drivers to cycle quick"
			]
		},
		{
			name: "Custom Mecanum Drive",
			date: "2023-06-30",
			src: "/mecanum.png",
			title: "Custom Mecanum Drive Chassis",
			description: "Instead of U-channels we used C-channels to cut the weight of the robot down, we also used inverted C-channels to mount the wheels further back, improving weight distribution and stability.",
			pros: [
				"Faster turning and moving capabilities",
				"Lower weight"
			],
			cons: [
				"Harder to fit all mechanisms"
			]
		}
	];

	function startAutoPlay() {
		if (autoPlayInterval) clearInterval(autoPlayInterval);
		autoPlayInterval = setInterval(nextImage, 5000);
	}

	function stopAutoPlay() {
		if (autoPlayInterval) {
			clearInterval(autoPlayInterval);
			autoPlayInterval = null;
		}
	}

	function nextImage() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentImageIndex = (currentImageIndex + 1) % designs.length;
		setTimeout(() => (isTransitioning = false), 500);
	}

	function prevImage() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentImageIndex = (currentImageIndex - 1 + designs.length) % designs.length;
		setTimeout(() => (isTransitioning = false), 500);
	}

	function goToImage(index: number) {
		if (index === currentImageIndex || isTransitioning) return;
		isTransitioning = true;
		currentImageIndex = index;
		setTimeout(() => (isTransitioning = false), 500);
	}

	onMount(() => {
		startAutoPlay();
		return () => stopAutoPlay();
	});
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-red-400 via-red-500 to-red-600">
	<div class="container mx-auto px-4 py-12">
		<div class="text-center mb-12">
			<h1 class="text-5xl font-bold text-white mb-4">Chassis Evolution</h1>
			<p class="text-xl text-white/90 max-w-3xl mx-auto">
				Follow our journey from the initial Gobilda Mecanum Drive to our custom lightweight design. Each iteration focused on improving speed, maneuverability, and cycle times while maintaining reliability and control.
			</p>
		</div>

		<div class="relative max-w-4xl mx-auto">
			<div 
				class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
				on:mouseenter={() => {
					isHovered = true;
					stopAutoPlay();
				}}
				on:mouseleave={() => {
					isHovered = false;
					startAutoPlay();
				}}
			>
				{#each designs as design, i}
					{#if i === currentImageIndex}
						<div
							class="absolute inset-0 transition-opacity duration-500 {isTransitioning ? 'opacity-0' : 'opacity-100'}"
						>
							<img
								src={design.src}
								alt={design.title}
								class="w-full h-full object-contain bg-black/20"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 transition-opacity duration-300 {isHovered ? 'opacity-100' : ''}">
								<div class="absolute bottom-0 left-0 right-0 p-6 text-white">
									<h3 class="text-2xl font-bold mb-2">{design.name}</h3>
									<p class="text-sm text-white/80 mb-2">Developed: {design.date}</p>
									<p class="text-white/90 mb-4">{design.description}</p>
									<div class="grid grid-cols-2 gap-4">
										<div>
											<h4 class="text-red-200 font-semibold mb-2">Pros</h4>
											<ul class="space-y-1 text-sm">
												{#each design.pros as pro}
													<li class="flex items-start">
														<span class="text-green-400 mr-2">✓</span>
														{pro}
													</li>
												{/each}
											</ul>
										</div>
										<div>
											<h4 class="text-red-200 font-semibold mb-2">Cons</h4>
											<ul class="space-y-1 text-sm">
												{#each design.cons as con}
													<li class="flex items-start">
														<span class="text-red-400 mr-2">✗</span>
														{con}
													</li>
												{/each}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<button
				class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
				on:click={() => {
					prevImage();
					stopAutoPlay();
				}}
				aria-label="Previous design"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
				on:click={() => {
					nextImage();
					stopAutoPlay();
				}}
				aria-label="Next design"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{#each designs as _, i}
					<button
						class="w-2 h-2 rounded-full transition-all duration-300 {i === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}"
						on:click={() => {
							goToImage(i);
							stopAutoPlay();
						}}
						aria-label="Go to design {i + 1}"
					/>
				{/each}
			</div>
		</div>

		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
			<div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
				<h2 class="text-2xl font-bold text-white mb-4">Evolution Highlights</h2>
				<ul class="space-y-3 text-white/90">
					<li class="flex items-start">
						<span class="text-red-200 mr-2">•</span>
                        Faster movement and turning
					</li>
					<li class="flex items-start">
						<span class="text-red-200 mr-2">•</span>
                        Improved precision cycle times
					</li>
				</ul>
			</div>

			<div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
				<h2 class="text-2xl font-bold text-white mb-4">Key Learnings</h2>
				<ul class="space-y-3 text-white/90">
					<li class="flex items-start">
						<span class="text-red-200 mr-2">•</span>
						Importance of cutting down weight
					</li>
					<li class="flex items-start">
						<span class="text-red-200 mr-2">•</span>
						Balance between complexity and control
					</li>
				</ul>
			</div>
		</div>
	</div>
</main>

<style>
	/* Utility overrides and custom styles */
	.min-h-screen {
		min-height: 100vh;
	}
	
	.bg-gradient-to-b {
		background-image: linear-gradient(to bottom, #f56565, #f06b76);
	}
	
	.rounded-full {
		border-radius: 50%;
	}
	
	.transition-all {
		transition: all 0.3s ease;
	}
	
	.text-white {
		color: white;
	}
	
	.bg-red-500 {
		background-color: #f56565;
	}
	
	.hover\:bg-red-400:hover {
		background-color: #fc8181;
	}
	
	.shadow-lg {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.w-80 {
		width: 20rem; /* Make images smaller */
	}

	.border-white {
		border-color: white;
	}
</style>
