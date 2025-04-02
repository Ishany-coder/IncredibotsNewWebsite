<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";

	const teamMembers = [
		{ name: 'Ishan G', role: 'Programming Co-Lead, Outreach Team', image: '/Ishan.jpg', rookieYear: '2023-24 FLL Masterpiece'},
		{ name: 'Ishika S', role: 'Outreach Lead, Build Team', image: '/Ishika.png', rookieYear: '2023-24 FLL Masterpiece'},
		{ name: 'Rishi O', role: 'Programming Co-Lead, Build Team, Design Team', image: '/Rishi.png' , rookieYear: '2023-24 FLL Masterpiece'},
		{ name: 'Arjit S', role: 'Programming Team', image: '/Arjit.jpg' , rookieYear: '2024-25 FTC Into the Deep'},
		{ name: 'Anay A', role: 'Design Lead, Outreach Team', image: '/Anay.jpg', rookieYear: '2024-25 FTC Into the Deep'},
		{ name: 'Pia S', role: 'Build Team, Outreach Team', image: '/Pia.png', rookieYear: '2024-25 FTC Into the Deep'},
		{ name: 'Hridhaan D', role: 'Build Team, Outreach Team', image: '/Hridhaan.png', rookieYear: '2023-24 FLL Masterpiece' }
	];

	let flipped: Record<number, boolean> = {};

	function toggleFlip(index: number) {
		flipped[index] = !flipped[index];
		flipped = { ...flipped }; // Ensure reactivity
	}
</script>

<Navbar />

<main class="min-h-screen bg-red-400">
	<section class="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-b-3xl shadow-lg">
		<img src="/Hawking.jpg" alt="Team Banner" class="absolute inset-0 w-full h-full object-cover brightness-75">
		<div class="relative z-10 text-center text-white px-4">
			<h1 class="text-6xl font-extrabold drop-shadow-lg">Meet The Incredibots</h1>
		</div>
	</section>

	<section class="py-20 px-6 bg-gradient-to-b from-red-400 to-rose-500 backdrop-blur-lg rounded-t-3xl">
		<div class="max-w-6xl mx-auto space-y-10">
			<h2 class="text-4xl font-bold text-red-200 text-center">Our Team</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each teamMembers as member, index}
					<div class="relative w-full h-64 cursor-pointer perspective" on:click={() => toggleFlip(index)}>
						<div class="w-full h-full transition-transform duration-500 transform-style-preserve-3d" class:rotate-y-180={flipped[index]}>
							<div class="absolute w-full h-full bg-white/10 rounded-2xl p-6 shadow-md backdrop-blur-lg flex flex-col items-center justify-center border border-red-400/20">
								<img src={member.image} alt={member.name} class="w-40 h-40 object-cover rounded-full border-4 border-white/30 mb-4">
								<h3 class="text-xl font-bold text-white">{member.name}</h3>
							</div>
							<div class="absolute w-full h-full bg-gradient-to-b from-gray-800 to-gray-600 rounded-2xl p-6 shadow-md backdrop-blur-lg flex flex-col items-center justify-center border border-red-400/20 rotate-y-180 backface-hidden">
								<h3 class="text-xl font-bold text-red-200">{member.name}</h3>
								<p class="text-white/80 text-center mt-2">{member.role}</p>
								<p class="text-white/60 text-center mt-1 text-sm">{member.rookieYear}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<style>
	.perspective {
		perspective: 1000px;
	}

	.transform-style-preserve-3d {
		transform-style: preserve-3d;
	}

	.rotate-y-180 {
		transform: rotateY(180deg);
	}

	.backface-hidden {
		backface-visibility: hidden;
	}
</style>