<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";

	const teamMembers = [
		{ name: 'Ishan', role: 'Programming Co-Lead, Outreach Co-Lead', image: '/Ishan.jpg', rookieYear: '2023-24 FLL Masterpiece', description: 'When in doubt, let Hridu cook'},
		{ name: 'Ishika', role: 'Outreach Co-Lead, Build Team', image: '/Ishika.png', rookieYear: '2023-24 FLL Masterpiece', description: 'figure out something to put here that is not personal info'},
		{ name: 'Rishi', role: 'Programming Co-Lead, Build Team, Design Team', image: '/Rishi.png' , rookieYear: '2023-24 FLL Masterpiece', description: 'When in doubt, ChatGPT it out'},
		{ name: 'Hridhaan', role: 'Build Team, Outreach Team', image: '/Hridhaan.png', rookieYear: '2023-24 FLL Masterpiece', description: 'random kid from fortnite'},
		// { name: 'Arjit', role: 'Programming Team', image: '/Arjit.jpg' , rookieYear: '2024-25 FTC Into the Deep', description: 'figure out something to put here that is not personal info'},
		{ name: 'Anay', role: 'Design Lead, Build Team', image: '/Anay.jpg', rookieYear: '2024-25 FTC Into the Deep', description: 'figure out something to put here that is not personal info'},
		{ name: 'Pia', role: 'Build Team, Outreach Team', image: '/Pia.png', rookieYear: '2024-25 FTC Into the Deep', description: 'figure out something to put here that is not personal info'}
	];

	const fllAchievements = [
		{ title: "Local and Regional Qualifiers", description: "Winner of the Champions Award in qualifiers and semifinals.", icon: "😎"},
 		{ title: 'State Championship', description: 'Won the Innovation Project Award for our project helping the visually impaired play basketball.', icon: '🏅' },
 		{ title: 'WAFFLE', description: 'Overall champions of an international competition.', icon: '🏆' }
	];

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
    <section class="py-16 px-4">    
        <div class="max-w-6xl mx-auto bg-black/10 backdrop-blur-md rounded-2xl p-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-8 text-white">
                    <div class="space-y-4">
                        <h2 class="text-3xl font-bold">Who We Are</h2>
                        <p class="text-lg leading-relaxed">
                            We are a team of <span class="font-bold text-red-200">middle and high school students</span> from <span class="font-bold text-red-200">Sammamish, WA</span>. We are passionate about <span class="font-bold text-red-200">robotics</span>,
                            <span class="font-bold text-red-200">technology</span>, and making a <span class="font-bold text-red-200">positive impact</span> in our community. We participate in the <span class="font-bold text-red-200">FIRST Tech Challenge (FTC)</span> program, where we <span class="font-bold text-red-200">design, build, and program robots</span> to compete in various challenges.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <h2 class="text-3xl font-bold">Our Mission</h2>
                        <p class="text-lg leading-relaxed">
                            Our mission is to make robotics more accessible and affordable, while supporting sustainable initiatives and promoting a better planet.
                        </p>    
                    </div>
                </div>
                <div class="relative group transition-transform duration-300 ease-in-out">
                    <img src="/Meet_1.jpg" alt="Incredibots team members during robotics event" 
                         class="w-full rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-105">
                </div>
            </div>
        </div>
    </section>
	<section class="py-20 px-6 bg-gradient-to-b from-red-400 to-rose-500 backdrop-blur-lg rounded-t-3xl">
		<div class="max-w-6xl mx-auto space-y-10">
			<h2 class="text-4xl font-bold text-red-200 text-center">Our Team</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each teamMembers as member}
					<div class="flip-card">
						<div class="flip-card-inner">
							<!-- Front Side -->
							<div class="flip-card-front">
								<img src={member.image} alt={member.name} class="w-40 h-40 object-cover rounded-full border-4 border-white/30 mb-4">
								<h3 class="text-xl font-bold text-white">{member.name}</h3>
							</div>
							<!-- Back Side -->
							<div class="flip-card-back">
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
.flip-card {
    perspective: 1500px;
    width: 100%;
    height: 300px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease-in-out;
    transform-style: preserve-3d;
}

/* Delay the flip on hover */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
    transition-delay: 0.3s; /* Flip after 2 seconds of hover */
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    text-align: center;
}

/* Now the back gradient is on the front */
.flip-card-front {
    background: linear-gradient(135deg, rgba(233, 30, 64, 0.9), rgba(238, 88, 88, 0.9));  /* Rose to red gradient */
    color: white;
}

/* Front gradient now on the back */
.flip-card-back {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(185, 28, 83, 0.9));  /* Red to darker red gradient */
    color: white;
    transform: rotateY(180deg);
}

/* Image Styling */
.flip-card-front img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 50%;  /* Circular image */
    border: 4px solid white;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Cool shadow effect */
    object-position: center;  /* Center the face of the image */
}

/* Hover effect for the image */
.flip-card-front:hover img {
    transform: scale(1.1); /* Zoom in effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
}

</style>