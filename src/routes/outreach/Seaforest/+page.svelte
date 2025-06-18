<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import { onMount } from 'svelte';
	import { read, utils } from 'xlsx';

	/* the component state is an array of presidents */
	type President = {
		TeamName: string;
		TeamNumber: number;
		LeagueName: string;
		HighestScore: number;
		NumberOfTrees: number;
	};
	let pres: President[] = [];
	let totalTrees = 0;
	let searchQuery: string = ""; // Ensure this is initialized

	/* Fetch and update the state once */
	onMount(async () => {
		const f = await (
			await fetch(
				'https://docs.google.com/spreadsheets/d/1pJ1pzgyvZSGs1bXTUgrjp_o1aY4r5oDo62sCScL_HGI/export?format=xlsx'
			)
		).arrayBuffer();
		const wb = read(f); // parse the array buffer
		const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
		pres = utils.sheet_to_json(ws); // generate objects and update state

		// iterate through pres to sum up the highest scores and number of trees
		// by team number. Create a new json with team name, team number, league name, cumulative highest score and cumulative trees planted
		type TeamScore = {
			TeamName: string;
			TeamNumber: number;
			LeagueName: string;
			HighestScore: number;
			NumberOfTrees: number;
		};
		let teamScores: Record<number, TeamScore> = {};
		pres.forEach((p: President) => {
			if (teamScores[p.TeamNumber]) {
				teamScores[p.TeamNumber].HighestScore += p.HighestScore;
				teamScores[p.TeamNumber].NumberOfTrees += p.NumberOfTrees;
			} else {
				teamScores[p.TeamNumber] = {
					TeamName: p.TeamName,
					TeamNumber: p.TeamNumber,
					LeagueName: p.LeagueName,
					HighestScore: p.HighestScore,
					NumberOfTrees: p.NumberOfTrees
				};
			}
		});

		// calculate total number of trees planted
		pres.forEach((p) => {
			if (p.NumberOfTrees > 0) {
				totalTrees += p.NumberOfTrees;
			}
		});

		// Sort the pres array by number of trees followed by highest score
		pres = Object.values(teamScores).sort((a, b) => {
			if (a.NumberOfTrees === b.NumberOfTrees) {
				return b.HighestScore - a.HighestScore;
			}
			return b.NumberOfTrees - a.NumberOfTrees;
		});
	});

	// Filtered teams based on search query
	$: filteredTeams = pres.filter((team) => {
		const query = searchQuery.toLowerCase();
		return (
			team.TeamName.toLowerCase().includes(query) ||
			team.TeamNumber.toString().includes(query)
		);
	});
</script>

<div class="bg-gradient-to-br from-green-100 via-blue-200 to-indigo-200 min-h-screen text-black">
    <Navbar />
	<div class="max-w-screen-xl mx-auto p-6 md:p-8">
		<!-- Sponsor and Planted by Sections -->
		<div class="flex flex-wrap gap-8 justify-center mb-12">
			<div class="flex flex-col justify-center items-center">
				<span class="text-xs md:text-sm font-semibold text-gray-800 pb-4">SPONSORED BY</span>
				<img src="/Sponsors/IncortaLogo.png" alt="Incorta Logo" class="h-16 md:h-24" />
			</div>
			<div class="flex flex-col justify-center items-center">
				<span class="text-xs md:text-sm font-semibold text-gray-800 pb-4">PLANTED BY</span>
				<a href="https://greenr.gifts/pages/event/incredibots-2024-25" target="_blank">
					<img src="/Sponsors/greenrgifts.png" alt="GreenrGifts Logo" class="h-14 md:h-20" />
				</a>
			</div>
		</div>

		<!-- Search Box -->
		<div class="mb-8 flex justify-center">
			<input
				type="text"
				placeholder="Search by Team Name or Number"
				bind:value={searchQuery}
				class="w-full md:w-1/3 px-4 py-3 border border-green-300 rounded-md text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
			/>
		</div>

		<!-- Trees Count -->
		<div class="flex flex-col md:flex-row justify-center mb-12">
			<div class="flex flex-col items-center">
				<div class="text-5xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-bl from-green-500 to-blue-800 bg-clip-text text-transparent leading-tight">
					{totalTrees}
				</div>
				<div class="text-lg md:text-2xl font-bold text-gray-800">Trees</div>
			</div>
		</div>

		<!-- Team Cards -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
			{#each filteredTeams as p}
				<div class="p-6 rounded-lg shadow-lg hover:shadow-xxl transition-all duration-300 border border-green-300 hover:border-green-500">
					<h3 class="text-2xl font-semibold text-green-800">{p.TeamName} ({p.TeamNumber})</h3>
					<p class="text-gray-600 mt-2">Most Trees Planted In: {p.LeagueName}</p>
					<p class="text-gray-600 mt-2">Cumulative Score: {p.HighestScore}</p>
					<p class="text-emerald-600 font-bold mt-4">Trees Planted: {p.NumberOfTrees}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
