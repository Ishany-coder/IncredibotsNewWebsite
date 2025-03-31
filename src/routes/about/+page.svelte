<script>
	import Navbar from "$lib/Navbar.svelte";

	const teamMembers = [
		{ name: 'Ishan Ghosh', role: 'Team Captain', image: '/Ishan.jpg' },
		{ name: 'Ishika Saini', role: 'Lead Programmer', image: '/Ishika.png' },
		{ name: 'Arjit Singh', role: 'Mechanical Lead', image: '/Arjit.jpg' },
		{ name: 'Anay Agrawal', role: 'Design Lead', image: '/Anay.jpg' },
		{ name: 'Rishi Ohri', role: 'Outreach Lead', image: '/Rishi.png' },
		{ name: 'Pia Seth', role: 'Documentation Lead', image: '/Pia.png' },
		{ name: 'Hridhaan Damani', role: 'Strategy Lead', image: '/Hridhaan.png' }
	];

	const achievements = [
		{ title: 'WAFFLE', description: 'Champions of the international innovation competition.', icon: '🏆' },
		{ title: 'Maxwell League Meet 1', description: 'Winners of the first league meet.', icon: '🥇' },
		{ title: 'Maxwell League Meet 2', description: 'Back-to-back champions at Meet 2.', icon: '🎯' },
		{ title: 'Hawking Interleague', description: 'Victors of the prestigious interleague event.', icon: '⭐' }
	];
</script>

<Navbar />

<main class="min-h-screen bg-zinc-900">
	<!-- Hero Section -->
	<section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
		<div class="absolute inset-0">
			<img src="/Hawking.jpg" alt="Team Banner" class="w-full h-full object-cover">
			<div class="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm"></div>
			<!-- Decorative grid -->
			<div class="absolute inset-0 opacity-10">
				<div class="grid grid-cols-12 h-full">
					{#each Array(12) as _}
						<div class="border-l border-purple-500"></div>
					{/each}
				</div>
			</div>
		</div>
		<div class="relative z-10 text-center text-white px-4">
			<h1 class="text-6xl font-bold mb-4">Meet The Incredibots</h1>
			<p class="text-xl max-w-2xl mx-auto">
				A passionate team of young innovators from Sammamish, Washington.
			</p>
		</div>
	</section>

	<!-- Team Mission -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto bg-zinc-800 rounded-2xl p-8 text-white border border-purple-500/10">
			<div class="grid md:grid-cols-2 gap-12 items-center">
				<div class="space-y-6">
					<h2 class="text-4xl font-bold text-purple-300">Our Journey</h2>
					<p class="text-lg leading-relaxed">
						We're a rookie team that started with FIRST LEGO League and never stopped dreaming big.
					</p>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="bg-zinc-700/50 p-6 rounded-xl border border-purple-500/10">
						<h3 class="text-2xl font-bold mb-2 text-purple-200">Mission</h3>
						<p>Promoting a better and greener planet while educating young minds about robotics.</p>
					</div>
					<div class="bg-zinc-700/50 p-6 rounded-xl border border-purple-500/10">
						<h3 class="text-2xl font-bold mb-2 text-purple-200">Vision</h3>
						<p>Inspiring the next generation of innovators through technology and teamwork.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Members -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-white text-center mb-12">Our Team</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each teamMembers as member}
					<div class="group relative">
						<div class="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md p-6 transition-all duration-300 hover:transform hover:scale-105">
							<img src={member.image} alt={member.name} 
								class="w-48 h-48 object-cover rounded-full mx-auto mb-4 border-4 border-white/50">
							<div class="text-center text-white">
								<h3 class="text-xl font-bold">{member.name}</h3>
								<p class="text-white/80">{member.role}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Achievements -->
	<section class="py-16 px-4 bg-white/10 backdrop-blur-md">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-white text-center mb-12">Our Achievements</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each achievements as achievement}
					<div class="bg-white/20 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
						<div class="text-4xl mb-4">{achievement.icon}</div>
						<h3 class="text-xl font-bold text-white mb-2">{achievement.title}</h3>
						<p class="text-white/80">{achievement.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>