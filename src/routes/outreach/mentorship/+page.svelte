<script>
	import Navbar from "$lib/Navbar.svelte";
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	const mentor = [
		{
			name: "Cheezits",
			description: "The Cheezits are a team full of energy and determination. Last year, they fought through qualifiers but fell just short of the semifinals. This year, they came back stronger, refining their coding skills, tightening their strategy, and pushing their robot to new limits. Their hard work paid off with a well-earned spot in the semifinals!",
			achievements: [
				"Reached semifinals",
				"Improved coding skills",
				"Strong team strategy"
			]
		},
		{
			name: "Firebolts",
			description: "The Firebolts came into the season with bold ideas and a hunger to innovate. From debugging complex code to rethinking their innovation project, they embraced every challenge. Their resilience and creativity propelled them all the way to the state championship, proving that great ideas and hard work make a winning combination.",
			achievements: [
				"State Championship",
				"Innovative solutions",
				"Team resilience"
			]
		}
	];

	let scrollPosition = 0;
	
	onMount(() => {
			const handleScroll = () => {
				scrollPosition = window.scrollY;
			};
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		});
</script>

<Navbar />
<div class="min-h-screen bg-red-400 text-white px-6 py-10 space-y-16">
	<!-- Hero Section -->
	<section class="text-center space-y-6">
		<h1 class="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
			Mentoring FLL
		</h1>
		<p class="text-xl max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
			Empowering young minds through robotics and mentorship
		</p>
	</section>

	<!-- Team Stories -->
	<section class="max-w-7xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			{#each mentor as mentee, index}
				<article class="bg-white text-red-500 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 p-8 transform hover:scale-[1.02]" in:fade={{ duration: 500, delay: index * 200 }}>
					<div class="flex flex-col md:flex-row gap-8">
						<div class="flex-1">
							<h2 class="text-3xl font-bold mb-4">{mentee.name}</h2>
							<p class="text-gray-700 mb-6">{mentee.description}</p>
							<div class="flex flex-wrap gap-3">
								{#each mentee.achievements as achievement}
									<span class="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
										{achievement}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Interactive Timeline -->
	<section class="max-w-4xl mx-auto space-y-12 mt-16">
		<h2 class="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
			The Journey of Our Teams
		</h2>
		<div class="relative">
			<div class="absolute inset-0 bg-white/10 rounded-full w-1 h-full z-10"></div>
			<div class="space-y-12">
				<!-- Cheezits Timeline -->
				<div class="relative">
					<div class="absolute -left-4 top-4 w-8 h-8 bg-red-500 border-4 border-white rounded-full z-20"></div>
					<div class="bg-white text-red-500 p-8 rounded-2xl shadow-xl relative z-10">
						<h3 class="text-2xl font-semibold mb-4">Cheezits: From Qualifiers to Semis</h3>
						<div class="space-y-4">
							<div class="flex items-start gap-4">
								<span class="text-2xl font-bold text-red-500">🚀</span>
								<div>
									<strong class="block">Last Year:</strong>
									<p class="text-gray-700">The Cheezits showed promise but got knocked out at qualifiers.</p>
								</div>
							</div>
							<div class="flex items-start gap-4">
								<span class="text-2xl font-bold text-red-500">🏆</span>
								<div>
									<strong class="block">This Year:</strong>
									<p class="text-gray-700">They powered through challenges and reached the semifinals!</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Firebolts Timeline -->
				<div class="relative">
					<div class="absolute -left-4 top-4 w-8 h-8 bg-red-500 border-4 border-white rounded-full z-20"></div>
					<div class="bg-white text-red-500 p-8 rounded-2xl shadow-xl relative z-10">
						<h3 class="text-2xl font-semibold mb-4">Firebolts: Sparks Turn to Flames</h3>
						<div class="space-y-4">
							<div class="flex items-start gap-4">
								<span class="text-2xl font-bold text-red-500">💡</span>
								<div>
									<strong class="block">Last Year:</strong>
									<p class="text-gray-700">The Firebolts were eager learners, experimenting and growing.</p>
								</div>
							</div>
							<div class="flex items-start gap-4">
								<span class="text-2xl font-bold text-red-500">🔥</span>
								<div>
									<strong class="block">This Year:</strong>
									<p class="text-gray-700">Their dedication launched them to the state championship!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
