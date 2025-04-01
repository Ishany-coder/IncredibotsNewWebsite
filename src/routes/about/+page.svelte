<script>
	import Navbar from "$lib/Navbar.svelte";

	const teamMembers = [
		{ name: 'Ishan Ghosh', role: 'Programming Co-Lead, Outreach Team', image: '/Ishan.jpg' },
		{ name: 'Ishika Saini', role: 'Outreach Lead, Build Team', image: '/Ishika.png' },
		{ name: 'Rishi Ohri', role: 'Programming Co-Lead, Build Team, Design Team', image: '/Rishi.png' },
		{ name: 'Arjit Singh', role: 'Programming Team', image: '/Arjit.jpg' },
		{ name: 'Anay Agrawal', role: 'Design Lead, Outreach Team', image: '/Anay.jpg' },
		{ name: 'Pia Seth', role: 'Build Team, Outreach Team', image: '/Pia.png' },
		{ name: 'Hridhaan Damani', role: 'Build Team, Outreach Team', image: '/Hridhaan.png' }
	];

	const fllAchievements = [
		{ title: 'State Championship', description: 'Won the Innovation Project Award for our project helping the visually impaired play basketball.', icon: '🏅' },
		{ title: 'WAFFLE', description: 'Overall champions of an international competition.', icon: '🏆' },
		{title: "Champions Award", description: "Winner of the champions award in qualifiers and semifinals.", icon: "🥇"}

	];

	const ftcAchievements = [
		{ title: 'Maxwell League Meet 1', description: 'Winners of the first league meet.', icon: '🥇' },
		{ title: 'Maxwell League Meet 2', description: 'Back-to-back champions at Meet 2.', icon: '🎯' },
		{ title: 'Hawking Interleague', description: 'Best robot at interleague.', icon: '⭐' }
	];
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

	<!-- Team Members -->
	<section class="py-20 px-6 bg-gradient-to-b from-red-400 to-rose-500 backdrop-blur-lg rounded-t-3xl">
		<div class="max-w-6xl mx-auto space-y-10">
			<h2 class="text-4xl font-bold text-red-200 text-center">Our Team</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each teamMembers as member}
					<div class="group bg-white/10 rounded-2xl p-6 shadow-md backdrop-blur-lg transition-transform hover:scale-105 border border-red-400/20">
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
	<section class="py-20 px-6 bg-gradient-to-b from-rose-500 to-red-400 backdrop-blur-lg rounded-t-3xl">
		<div class="max-w-6xl mx-auto space-y-10">
			<!-- <h2 class="text-4xl font-bold text-red-200 text-center">Our Achievements</h2> -->

			<h3 class="text-3xl font-bold text-red-200 text-center">FIRST LEGO League (FLL) Achievements</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each fllAchievements as achievement}
					<div class="bg-white/20 rounded-2xl p-6 shadow-md border border-red-400/20 transition-transform hover:scale-105">
						<div class="text-4xl mb-4 text-red-200">{achievement.icon}</div>
						<h3 class="text-xl font-bold text-red-200 mb-1">{achievement.title}</h3>
						<p class="text-white/80 text-sm">{achievement.description}</p>
					</div>
				{/each}
			</div>

			<h3 class="text-3xl font-bold text-red-200 text-center">FIRST Tech Challenge (FTC) Achievements</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each ftcAchievements as achievement}
					<div class="bg-white/20 rounded-2xl p-6 shadow-md border border-red-400/20 transition-transform hover:scale-105">
						<div class="text-4xl mb-4 text-red-200">{achievement.icon}</div>
						<h3 class="text-xl font-bold text-red-200 mb-1">{achievement.title}</h3>
						<p class="text-white/80 text-sm">{achievement.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

</main>