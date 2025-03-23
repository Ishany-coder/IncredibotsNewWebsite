<script>
	import Navbar from "$lib/Navbar.svelte";

  const mentor = [
	{
		name: "Cheezits",
		image: "/Cheezits.png",
		description: "The Cheezits are a team full of energy and determination. Last year, they fought through qualifiers but fell just short of the semifinals. This year, they came back stronger, refining their coding skills, tightening their strategy, and pushing their robot to new limits. Their hard work paid off with a well-earned spot in the semifinals!"
	},
	{
		name: "Firebolts",
		image: "/Firebolts.png",
		description: "The Firebolts came into the season with bold ideas and a hunger to innovate. From debugging complex code to rethinking their innovation project, they embraced every challenge. Their resilience and creativity propelled them all the way to the state championship, proving that great ideas and hard work make a winning combination."
	}
  ];
</script>

<Navbar />
<div class="min-h-screen bg-red-400 text-white px-6 py-10 space-y-16">
	<!-- Hero Section -->
	<section class="text-center space-y-4">
		<h1 class="text-5xl font-bold">Mentoring FLL</h1>
		<p class="text-xl max-w-2xl mx-auto">
			Follow the incredible journeys of the teams we mentored!
		</p>
	</section>

	<!-- Events Grid -->
	<section class="max-w-6xl mx-auto">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
			{#each mentor as mentee}
				<div class="bg-white text-red-500 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 p-6">
					<h2 class="text-2xl font-semibold">{mentee.name}</h2>
					<p class="text-sm">{mentee.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Interactive Timeline -->
	<section class="max-w-4xl mx-auto space-y-8 mt-10">
		<h2 class="text-3xl font-bold text-center">The Journey of Our Teams</h2>
		<div class="relative border-l-4 border-white pl-6 space-y-6">
			<!-- Cheezits Timeline -->
			<div class="bg-white text-red-500 p-6 rounded-xl shadow-md relative">
				<span class="absolute -left-4 top-6 w-8 h-8 bg-red-500 border-4 border-white rounded-full"></span>
				<h3 class="text-2xl font-semibold">Cheezits: From Qualifiers to Semis</h3>
				<p class="text-sm"><strong>Last Year:</strong> The Cheezits showed promise but got knocked out at qualifiers.</p>
				<p class="text-sm"><strong>This Year:</strong> They powered through challenges and reached the semifinals!</p>
			</div>

			<!-- Firebolts Timeline -->
			<div class="bg-white text-red-500 p-6 rounded-xl shadow-md relative">
				<span class="absolute -left-4 top-6 w-8 h-8 bg-red-500 border-4 border-white rounded-full"></span>
				<h3 class="text-2xl font-semibold">Firebolts: Sparks Turn to Flames</h3>
				<p class="text-sm"><strong>Last Year:</strong> The Firebolts were eager learners, experimenting and growing.</p>
				<p class="text-sm"><strong>This Year:</strong> Their dedication launched them to the state championship!</p>
			</div>
		</div>
	</section>
</div>
