<script>
	import Navbar from "$lib/Navbar.svelte";

	const teamMembers = [
		{ name: 'Ishan Ghosh', image: '/Ishan.jpg' },
		{ name: 'Ishika Saini', image: '/Ishika.png' },
		{ name: 'Arjit Singh', image: '/Arjit.jpg' },
		{ name: 'Anay Agrawal', image: '/Anay.jpg' },
		{ name: 'Rishi Ohri', image: '/Rishi.png' },
		{ name: 'Pia Seth', image: '/Pia.png' },
		{ name: 'Hridhaan Damani', image: '/Hridhaan.png' }
	];

	const achievements = {
		ftc: [
			{ title: 'Maxwell League Meet 1', description: 'Winners of the first league meet.', icon: '🥇' },
			{ title: 'Maxwell League Meet 2', description: 'Back-to-back champions at Meet 2.', icon: '🎯' },
			{ title: 'Hawking Interleague', description: 'Victors of the prestigious interleague event.', icon: '⭐' }
		],
		fll: [
			{ title: 'WAFFLE', description: 'Champions of the international innovation competition.', icon: '🏆' },
			{ title: 'States Innovation project winner', description: 'Winner of the states innovation project competition.', icon: '🥇' },
			{ title: 'champions award winner of qualifiers and semifinals', description: 'Winner of the champions award competition.', icon: '🥇' }
		]
	};
</script>

<Navbar />

<main class="min-h-screen bg-red-400">

	<!-- Hero -->
	<section class="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-b-3xl shadow-lg">
		<img src="/Hawking.jpg" alt="Team Banner" class="absolute inset-0 w-full h-full object-cover brightness-75">
		<div class="relative z-10 text-center text-white px-4">
			<h1 class="text-6xl font-extrabold drop-shadow-lg">Meet The Incredibots</h1>
		</div>
	</section>

	<!-- Journey -->
	<section class="py-16 px-6">
		<div class="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-md text-white">
			<div class="grid md:grid-cols-2 gap-10 items-center">
				<div class="space-y-5">
					<h2 class="text-4xl font-bold text-purple-200">Our Journey</h2>
					<p class="text-lg leading-relaxed text-white/90">We're a rookie team that started with FIRST LEGO League and never stopped dreaming big.</p>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="bg-zinc-700/40 p-6 rounded-2xl shadow-sm border border-purple-400/30">
						<h3 class="text-2xl font-semibold text-purple-200 mb-2">Mission</h3>
						<p>Promoting a better and greener planet while educating young minds about robotics.</p>
					</div>
					<div class="bg-zinc-700/40 p-6 rounded-2xl shadow-sm border border-purple-400/30">
						<h3 class="text-2xl font-semibold text-purple-200 mb-2">Vision</h3>
						<p>Inspiring the next generation of innovators through technology and teamwork.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Members -->
	<section class="py-20 px-6">
		<div class="max-w-6xl mx-auto space-y-10">
			<h2 class="text-4xl font-bold text-purple-200 text-center">Our Team</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each teamMembers as member}
					<div class="group bg-white/10 rounded-2xl p-6 shadow-md backdrop-blur-lg transition-transform hover:scale-105 border border-purple-400/20">
						<img src={member.image} alt={member.name} class="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white/30 mb-4">
						<div class="text-center text-white space-y-1">
							<h3 class="text-xl font-bold">{member.name}</h3>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Achievements -->
	<section class="py-20 px-6 bg-white/10 backdrop-blur-lg rounded-t-3xl">
		<div class="max-w-6xl mx-auto space-y-10">
			<h2 class="text-4xl font-bold text-purple-200 text-center">Our Achievements</h2>
			
			<!-- FTC Achievements -->
			<div class="space-y-6">
				<h3 class="text-3xl font-bold text-purple-200 text-center">FTC Achievements</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each achievements.ftc as achievement}
						<div class="bg-white/20 rounded-2xl p-6 shadow-md border border-purple-400/20 transition-transform hover:scale-105">
							<div class="text-4xl mb-4 text-purple-200">{achievement.icon}</div>
							<h3 class="text-xl font-bold text-purple-200 mb-1">{achievement.title}</h3>
							<p class="text-white/80 text-sm">{achievement.description}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- FLL Achievements -->
			<div class="space-y-6">
				<h3 class="text-3xl font-bold text-purple-200 text-center">FLL Achievements</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each achievements.fll as achievement}
						<div class="bg-white/20 rounded-2xl p-6 shadow-md border border-purple-400/20 transition-transform hover:scale-105">
							<div class="text-4xl mb-4 text-purple-200">{achievement.icon}</div>
							<h3 class="text-xl font-bold text-purple-200 mb-1">{achievement.title}</h3>
							<p class="text-white/80 text-sm">{achievement.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

</main>