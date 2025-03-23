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

	const achievements = [
		{ title: 'WAFFLE', description: 'Champions of the international innovation competition.' },
		{ title: 'Maxwell League Meet 1', description: 'Winners of the first league meet.' },
		{ title: 'Maxwell League Meet 2', description: 'Back-to-back champions at Meet 2.' },
		{ title: 'Hawking Interleague', description: 'Victors of the prestigious interleague event.' }
	];
</script>

<Navbar />
<div class="min-h-screen bg-red-400 text-white px-6 py-10 space-y-16">
	<!-- About Us -->
	<section class="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
		<!-- About Text -->
		<div class="md:w-1/2 space-y-6 text-center md:text-left">
			<h1 class="text-5xl font-bold">About Us</h1>
			<p class="text-xl">
				We're a passionate team of builders, coders, and creators who started with FIRST LEGO League—and never stopped dreaming big. Our journey together has been one of learning, exploration, and friendship.
			</p>
		</div>

		<!-- Team Photo -->
		<div class="md:w-1/2">
			<img src="/Hawking.jpg" alt="Our Team Photo" class="w-full rounded-xl shadow-lg" />
		</div>
	</section>

    <section>
		<h2 class="text-3xl font-semibold text-center mb-10">Meet the Team</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
			{#each teamMembers as member}
				<div class="flex flex-col items-center text-center space-y-4">
					<img src={member.image} alt={member.name} class="w-40 h-40 object-cover rounded-full shadow-md border-4 border-white" />
					<p class="text-xl font-medium">{member.name}</p>
				</div>
			{/each}
		</div>
	</section>
	<!-- Our Mission -->
	<section class="text-center space-y-4 max-w-3xl mx-auto">
		<h2 class="text-3xl font-semibold">Our Mission</h2>
		<p class="text-lg">
			To use our creativity, teamwork, and engineering mindset to solve real-world problems and inspire others to innovate with compassion and curiosity.
		</p>
	</section>

	<!-- Achievements -->
	<section class="max-w-6xl mx-auto space-y-8">
		<h2 class="text-3xl font-semibold text-center">🏅 Achievements</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each achievements as a}
				<div class="bg-white text-red-400 rounded-xl p-6 shadow-md text-center space-y-2 hover:scale-105 transition-transform duration-200">
					<h3 class="text-xl font-bold">{a.title}</h3>
					<p class="text-sm">{a.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Team Members -->

</div>