<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";

	const teamMembers = [
		{ name: 'Ishan G', role: 'Programming Co-Lead, Outreach Team', image: '/Ishan.jpg', rookieYear: '2023-24 FLL Masterpiece', description: 'Ishan is a 7th grader from Pine Lake Middle School who loves to code, work with others and help them out, whether he is at home or at robotics coding and helping others is his favorite thing to do.'},
		{ name: 'Ishika S', role: 'Outreach Lead, Build Team', image: '/Ishika.png', rookieYear: '2023-24 FLL Masterpiece', description: 'Ishika is a 9th grader who loves building, coding and helping others out her passion for robotics is amazing and is one trait that makes her a great leader'},
		{ name: 'Rishi O', role: 'Programming Co-Lead, Build Team, Design Team', image: '/Rishi.png' , rookieYear: '2023-24 FLL Masterpiece', description: 'Rishi is a 8th grader in Pine Lake Middle School who loves robotics overall no matter what role it is, whether its building, programming,designing or helping others he loves it all.'},
		{ name: 'Arjit S', role: 'Programming Team', image: '/Arjit.jpg' , rookieYear: '2024-25 FTC Into the Deep', description: 'Arjit is a 9th grader who loves to code and help others out, he is a great programmer and is always willing to help others out.'},
		{ name: 'Anay A', role: 'Design Lead, Outreach Team', image: '/Anay.jpg', rookieYear: '2024-25 FTC Into the Deep', description: 'Anay is a 7th grader in Pine Lake Middle School who loves to design on onshape and come up with creative solutions to problems.'},
		{ name: 'Pia S', role: 'Build Team, Outreach Team', image: '/Pia.png', rookieYear: '2024-25 FTC Into the Deep', description: 'Pia is an 8th grader at Pine Lake Middle School who specializes in hardware and wiring. She keeps the robot running smoothly with her expert wiring skills and problem-solving abilities she knows what to do when everything else goes wrong.'},
		{ name: 'Hridhaan D', role: 'Build Team, Outreach Team', image: '/Hridhaan.png', rookieYear: '2023-24 FLL Masterpiece', description: 'Hridhaan is a 7th grader in Pine Lake Middle School who loves to building and designing whether its on Onshape, with legos, with real life materials or with chips like arduino unos.'}
	];

	let flipped: Record<number, boolean> = {};

	function toggleFlip(index: number) {
		flipped[index] = !flipped[index];
		flipped = { ...flipped }; // Ensure reactivity
	}
	const fllAchievements = [
 		{ title: 'State Championship', description: 'Won the Innovation Project Award for our project helping the visually impaired play basketball.', icon: '🏅' },
 		{ title: 'WAFFLE', description: 'Overall champions of an international competition.', icon: '🏆' },
 		{title: "Champions Award", description: "Winner of the champions award in qualifiers and semifinals.", icon: "🥇"}
]
const ftcAchievements = [
 		{ title: 'Maxwell League Meet 1', description: 'Winners of the first league meet.', icon: '🥇' },
 		{ title: 'Maxwell League Meet 2', description: 'Back-to-back champions at Meet 2.', icon: '🎯' },
 		{ title: 'Hawking Interleague', description: 'Best robot at interleague.', icon: '⭐' }
 	];
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
							<div class="absolute w-full h-full bg-red-400 rounded-2xl p-6 shadow-md backdrop-blur-lg flex flex-col items-center justify-center border border-white/20">
								<img src={member.image} alt={member.name} class="w-40 h-40 object-cover rounded-full border-4 border-white/30 mb-4">
								<h3 class="text-xl font-bold text-white">{member.name}</h3>
							</div>
							<div class="absolute w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl p-6 shadow-md backdrop-blur-lg flex flex-col items-center justify-center border border-white/20 rotate-y-180 backface-hidden">
								<h3 class="text-xl font-bold text-white">{member.name}</h3>
								<p class="text-white/90 text-center mt-2">{member.role}</p>
								<p class="text-white/80 text-center mt-1 text-sm">{member.rookieYear}</p>
								{#if member.description}
									<p class="text-white/80 text-center mt-4 text-sm italic">{member.description}</p>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
		<!-- Achievements -->
		<section class="py-20 px-6 bg-gradient-to-b from-red-400 to-rose-500 backdrop-blur-lg rounded-t-3xl">
			<div class="max-w-6xl mx-auto space-y-10">
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
				<h3 class="text-3xl font-bold text-red-200 text-center">FIRST Tech Challenge (FTC)</h3>
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