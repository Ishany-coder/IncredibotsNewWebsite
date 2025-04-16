<script>
	import Navbar from "$lib/Navbar.svelte";

	const robotParts = [
		{
			title: 'Mecanum Drive Train',
			image: '/mecanum.png',
			description: `Jefwi uses a mecanum drive system for full omnidirectional movement, allowing us to strafe, pivot, and make precise movements. We also designed a custom chassis using inverted C-channels to mount the wheels further back, improving weight distribution and stability. Additionally, we replaced U-channels with C-channels wherever possible to reduce weight and compact the frame. movements on the field, giving us superior agility during autonomous and tele-op periods.`,
			objectFit: 'contain',
			page: '/robot/chassis'
		},
		{
			title: 'Clintake Combination',
			image: '/clintake.png',
			description: `Jefwi features a hybrid claw and intake mechanism that can grab and pull in game elements quickly. The claw provides strong grip while the intake rollers allow for efficient collection during motion. We call it the Clintake!`,
			objectFit: 'contain',
			page: '/robot/clintake'
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
			<h1 class="text-5xl font-bold mb-6">Meet <span class="font-bold text-red-200">Jefwi</span></h1>
			<p class="text-xl">
				Our <span class="font-bold text-red-200">competition robot</span>, built for <span class="font-bold text-red-200">versatility</span>, <span class="font-bold text-red-200">precision</span>, and <span class="font-bold text-red-200">performance</span>. Here's a closer look at 
				what makes Jefwi special.
			</p>
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
									 alt={`Jefwi's ${part.title}`} 
									 class="w-full h-full {part.objectFit === 'contain' ? 'object-contain' : 'object-cover'} object-center">
							</div>
						</div>

							<!-- Content Section -->
							<div class="md:w-1/2 p-8 flex flex-col justify-center">
								<div class="space-y-4">
									<h2 class="text-3xl font-bold text-white">{part.title}</h2>
									<p class="text-white/90 leading-relaxed">
										{#if part.title === "Mecanum Drive Train"}
											Jefwi uses a <span class="font-bold text-red-200">mecanum drive system</span> for <span class="font-bold text-red-200">full omnidirectional movement</span>, allowing us to <span class="font-bold text-red-200">strafe</span>, <span class="font-bold text-red-200">pivot</span>, and make <span class="font-bold text-red-200">precise movements</span>. We also designed a <span class="font-bold text-red-200">custom chassis</span> using <span class="font-bold text-red-200">inverted C-channels</span> to mount the wheels further back, improving <span class="font-bold text-red-200">weight distribution</span> and <span class="font-bold text-red-200">stability</span>. Additionally, we replaced <span class="font-bold text-red-200">U-channels</span> with <span class="font-bold text-red-200">C-channels</span> wherever possible to <span class="font-bold text-red-200">reduce weight</span> and <span class="font-bold text-red-200">compact the frame</span>. movements on the field, giving us <span class="font-bold text-red-200">superior agility</span> during <span class="font-bold text-red-200">autonomous</span> and <span class="font-bold text-red-200">tele-op periods</span>.
										{:else}
											Jefwi features a <span class="font-bold text-red-200">hybrid claw and intake mechanism</span> that can <span class="font-bold text-red-200">grab and pull</span> in game elements quickly. The <span class="font-bold text-red-200">claw</span> provides <span class="font-bold text-red-200">strong grip</span> while the <span class="font-bold text-red-200">intake rollers</span> allow for <span class="font-bold text-red-200">efficient collection</span> during motion. We call it the <span class="font-bold text-red-200">Clintake</span>!
										{/if}
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