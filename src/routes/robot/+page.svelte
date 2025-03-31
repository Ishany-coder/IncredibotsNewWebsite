<script>
	import Navbar from "$lib/Navbar.svelte";

	const robotParts = [
		{
			title: 'Mecanum Drive Train',
			image: '/mecanum.png',
			description: `Jefwi uses a mecanum drive system for full omnidirectional movement, allowing us to strafe, pivot, and make precise movements. We also designed a custom chassis using inverted C-channels to mount the wheels further back, improving weight distribution and stability. Additionally, we replaced U-channels with C-channels wherever possible to reduce weight and compact the frame. movements on the field, giving us superior agility during autonomous and tele-op periods.`
		},
		{
			title: 'Clintake Combination',
			image: '/clintake.png',
			description: `Jefwi features a hybrid claw and intake mechanism that can grab and pull in game elements quickly. The claw provides strong grip while the intake rollers allow for efficient collection during motion. We call it the Clintake!`,
			objectFit: 'contain'
		}
	];
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-red-400 to-red-500">
	<!-- Hero Section -->
	<section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
		<div class="absolute inset-0">
			<img src="/lm1.png" alt="Jefwi" class="w-full h-full object-cover opacity-30">
		</div>
		<div class="absolute inset-0">
			<div class="w-full h-full bg-black/30"></div>
		</div>
		<div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">

			<span class="inline-block bg-red-500 px-4 py-1 rounded-full text-sm mb-4">FTC 26336</span>
			<h1 class="text-5xl font-bold mb-6">Meet Jefwi</h1>
			<p class="text-xl">
				Our competition robot, built for versatility, precision, and performance. Here's a closer look at 
				what makes Jefwi special.
			</p>
		</div>
	</section>

	<!-- Robot Mechanisms -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto space-y-12">
			{#each robotParts as part, i}
				<div class="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
					<div class="flex flex-col md:flex-row {i % 2 === 1 ? 'md:flex-row-reverse' : ''}">
						<!-- Image Section - Updated styling for Clintake -->
						<div class="md:w-1/2 h-full bg-black/20">
							<div class="aspect-[5/3] md:h-full w-full">
								<img src={part.image} 
									 alt={`Jefwi's ${part.title}`} 
									 class="w-full h-full {part.objectFit === 'contain' ? 'object-contain' : 'object-cover'} object-center">
							</div>
						</div>

						<!-- Content Section -->
						<div class="md:w-1/2 p-8 flex flex-col justify-center">
							<div class="space-y-4">
								<h2 class="text-3xl font-bold text-white">{part.title}</h2>
								<p class="text-white/90 leading-relaxed">
									{part.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Technical Highlights -->
<!--	<section class="py-16 px-4 bg-white/10 backdrop-blur-md">-->
<!--		<div class="max-w-6xl mx-auto text-center">-->
<!--			<h2 class="text-3xl font-bold text-white mb-12">Jefwi's Capabilities</h2>-->
<!--			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">-->
<!--				<div class="bg-white/5 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">-->
<!--					<div class="text-4xl mb-4">⚙️</div>-->
<!--					<h3 class="text-xl font-bold text-white mb-2">Precision Engineering</h3>-->
<!--					<p class="text-white/80">Custom-designed mechanisms for optimal game performance</p>-->
<!--				</div>-->
<!--				<div class="bg-white/5 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">-->
<!--					<div class="text-4xl mb-4">🤖</div>-->
<!--					<h3 class="text-xl font-bold text-white mb-2">Advanced Control</h3>-->
<!--					<p class="text-white/80">Sophisticated autonomous and driver-controlled programs</p>-->
<!--				</div>-->
<!--				<div class="bg-white/5 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">-->
<!--					<div class="text-4xl mb-4">🔄</div>-->
<!--					<h3 class="text-xl font-bold text-white mb-2">Rapid Iteration</h3>-->
<!--					<p class="text-white/80">Continuous improvement through testing and refinement</p>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</section>-->
</main>