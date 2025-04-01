<script>
	import Navbar from "$lib/Navbar.svelte";

	const clintakeIterations = [
		{
			name: "Tongs",
			description: "A standard design that uses a tongs style motion to pick up objects.",
            image: "/tongs.png"
		},
        {
			name: "Chopsticks",
			description: "A design with only one moving arm for greater prescision and flexibility."
		}
	];
</script> 

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-red-400 to-red-500">
    <!-- Clintake Iterations Section -->
    <section class="py-16 px-4">
		<div class="max-w-6xl mx-auto space-y-12">
			{#each clintakeIterations as iteration, i}
				<!-- Clintake Iteration Section -->
				<div class="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
					<div class="flex flex-col md:flex-row {i % 2 === 1 ? 'md:flex-row-reverse' : ''}">
						<!-- Image Section - Clintake Iterations -->
						<div class="md:w-1/2 h-full bg-black/20">
							<div class="aspect-[5/3] md:h-full w-full">
								<img src={iteration.image} 
								 alt={iteration.description} 
								 class="w-full h-full object-contain object-center">
							</div>
						</div>
						<!-- Content Section -->
						<div class="md:w-1/2 p-8 flex flex-col justify-center">
							<div class="space-y-4">
								<h2 class="text-3xl font-bold text-white">{iteration.name}</h2>
								<p class="text-white/90 leading-relaxed">
									{iteration.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>