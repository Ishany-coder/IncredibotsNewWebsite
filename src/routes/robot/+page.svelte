<script>
	import Navbar from "$lib/Navbar.svelte";

	const robotParts = [
		{
			title: 'Vision',
			image: '/Robot/Vision/samples.png',
			description: `Our robot leverages advanced computer vision with a Limelight camera system, enabling precise and efficient sample collection. This cutting-edge technology allows our robot to automatically detect and acquire game pieces with remarkable accuracy and speed, giving us a significant competitive advantage in both autonomous and tele-operated modes.`,
			objectFit: 'contain',
			page: '/robot/vision'
		},
		{
			title: 'Claw',
			image: '/Robot/Claw/claw.png',
			description: `Envision features a custom lightweight intake claw designed to seperate and easily intake onle 1 sample if 2 are next to each other. It also features our first intake to transfer system where we move back our horizontal slides and transfer the sample to our outake/scoring system. This redeuces cycle times a lot because of how well each mechanism is suited for its job.`,
			objectFit: 'contain',
			page: '/robot/claw'
		}
	];
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-red-400 to-red-500">
	<!-- Hero Section -->
	<section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
		<div class="absolute inset-0">
			<img src="/Robot/EnvisionV2.png" alt="Envision" class="w-full h-full object-cover opacity-30">
		</div>
		<div class="absolute inset-0">
			<div class="w-full h-full bg-black/30"></div>
		</div>
		<div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
			<span class="inline-block bg-red-500 px-4 py-1 rounded-full text-sm mb-4">FTC 26336</span>
			<h1 class="text-5xl font-bold mb-6 text-red-200">ENVISION</h1>
		</div>
	</section>

	<!-- Robot Mechanisms -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto space-y-12">
			{#each robotParts as part, i}
			<a href={part.page}>
				<div class="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
					<div class="flex flex-col md:flex-row {i % 2 === 1 ? 'md:flex-row-reverse' : ''}">
						<!-- Image Section - Updated styling for Clintake -->
						<div class="md:w-1/2 h-full bg-black/20">
							<div class="aspect-[5/3] md:h-full w-full">
								<img src={part.image} 
									 alt={`Envision's ${part.title}`} 
									 class="w-full h-full {part.objectFit === 'contain' ? 'object-contain' : 'object-cover'} object-center">
							</div>
						</div>

							<!-- Content Section -->
							<div class="md:w-1/2 p-8 flex flex-col justify-center">
								<div class="space-y-4">
									<h2 class="text-3xl font-bold text-white">{part.title}</h2>
									<p class="text-white/90 leading-relaxed">
										{#each part.description as description}
											{description}
										{/each}
									</p>
								</div>
							</div>
						</div>
					</div>
					</a>
			{/each}
		</div>
	</section>
</main>