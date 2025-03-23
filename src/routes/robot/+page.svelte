<script>
	import Navbar from "$lib/Navbar.svelte";

	const robotParts = [
		{
			title: 'Mecanum Drive Train',
			image: '/mecanum.jpg',
			description: `Our robot uses a mecanum drive system for full omnidirectional movement. This allows us to strafe, pivot, and make precise movements on the field, giving us superior agility during autonomous and tele-op periods.`
		},
		{
			title: 'Clintake Combination',
			image: '/clintake.jpg',
			description: `We use a hybrid claw and intake mechanism that can grab and pull in game elements quickly. The claw provides strong grip while the intake rollers allow for efficient collection during motion. We call it the Clintake!`
		},
		{
			title: 'Software State Machine',
			image: '/state_machine.jpg',
			description: `Instead of writing long if-else chains, we designed our robot’s behavior using a state machine. Each subsystem operates through well-defined states like IDLE, INTAKING, LIFTING, and DROPPING. This makes our autonomous and tele-op code easier to debug, extend, and maintain—while keeping transitions smooth and predictable.`
		}
	];
</script>

<Navbar />
<div class="min-h-screen bg-red-400 text-white px-6 py-10 space-y-16">
	<!-- Hero Section -->
	<section class="text-center space-y-4">
		<h1 class="text-5xl font-bold">Meet Our Robot</h1>
		<p class="text-xl max-w-2xl mx-auto">
			Built for versatility, precision, and performance. Here's a closer look at the key mechanisms that power our competitive edge.
		</p>
	</section>

	<!-- Robot Mechanisms -->
	<section class="max-w-6xl mx-auto space-y-12">
		{#each robotParts as part}
			<div class="flex flex-col md:flex-row items-center gap-8 bg-white text-red-500 rounded-xl shadow-lg overflow-hidden p-6">
				<!-- Image -->
				<img src={part.image} alt={part.title} class="w-full md:w-1/2 h-64 object-cover rounded-lg" />

				<!-- Text Content -->
				<div class="space-y-3 md:w-1/2">
					<h2 class="text-3xl font-bold">{part.title}</h2>
					<p class="text-sm">{part.description}</p>
				</div>
			</div>
		{/each}
	</section>
</div>