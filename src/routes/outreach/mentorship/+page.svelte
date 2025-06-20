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
		},{
		name: "Dynamites",
		description: "The Dynamites are a team of enthusiastic and driven kids we got to know last year. From the start, it was clear they had the potential for greatness. Inspired by their passion, we stepped in to support and guide them—and together, they rose to the challenge and earned their place at States.",
		achievements: [
			"State Competition",
			"Improved Innovation Project",
			"Strong Team Strategy"
		]
		},
		{
		name: "Apollo Robotics School Team",
		description: "The Apollo Robotics School Team is a team of enthusiastic and driven kids we got to know last year. From the start, it was clear they had the potential for greatness. Inspired by their passion, we stepped in to support and guide them—and together, they rose to the challenge and earned their place at Semifinals.",
		achievements: [
			"Semifinals",
			"Improved Innovation Project",
			"Strong Team Strategy"
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
	const journey = [
		{
			title: "Firebolts: Sparks Turn to Flames",
			lastYear: "The Firebolts were eager learners, experimenting and growing.",
			thisYear: "Their dedication launched them to the state championship!"
		},
		{
			title: "Cheezits: From Qualifiers to Semis",
			lastYear: "The Cheezits showed promise but got knocked out at qualifiers.",
			thisYear: "They powered through challenges and reached the semifinals!"
		},
		{
			title: "Beyond Limits: The Apollo Mission",
			lastYear: "Last year, the Apollo Robotics School Team impressed us with their passion and potential.",
			thisYear: "This year, they continued to grow and improve, leading them to a well-earned spot in the semifinals!"
		},
		{
			title: "The Dynamites: Fired Up for the Future",
			lastYear: "Last year the dynamites made it to states where we met them and saw their promising potential.",
			thisYear: "This year with our help they were able to make it back to states!"
		}
	]

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
				{#each journey as journey}
				<div class="relative">
					<div class="absolute -left-4 top-4 w-8 h-8 bg-red-500 border-4 border-white rounded-full z-20"></div>
					<div class="bg-white text-red-500 p-8 rounded-2xl shadow-xl relative z-10">
						<h3 class="text-2xl font-semibold mb-4">{journey.title}</h3>
						<div class="space-y-4">
							<div class="flex items-start gap-4">
								<span class="text-2xl font-bold text-red-500">🚀</span>
								<div>
									<strong class="block">Last Year:</strong>
									<p class="text-gray-700">{journey.lastYear}</p>
								</div>
							</div>
							<div class="flex items-start gap-4">
								<span class="text-2xl font-bold text-red-500">🏆</span>
								<div>
									<strong class="block">This Year:</strong>
									<p class="text-gray-700">{journey.thisYear}</p>
								</div>
							</div>
						</div>
						</div>
					</div>	
				{/each}
			</div>
		</div>
		<!-- <div class="relative">
			<div class="absolute inset-0 bg-white/10 rounded-full w-1 h-full z-10"></div>
			<div class="space-y-12">
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
		</div> -->
	</section>
</div>
