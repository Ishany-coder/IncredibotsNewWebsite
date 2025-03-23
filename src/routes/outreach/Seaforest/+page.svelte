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
</script>

<div class="bg-white-400 text-black w-max-[600px] min-h-screen h-full">
    <Navbar />
	<div class="max-w-[1200px] mx-auto p-2 md:p-4">
		<div class="flex flex-row gap-x-10 justify-center pb-10">
			<div class="flex flex-col justify-center items-center">
				<span class="text-xs md:text-sm font-bold pb-4 underline">SPONSORED BY</span>
				<img src="/Incorta_Logo.png" alt="Incorta Logo" class="h-16 md:h-24" />
			</div>
			<div class="flex flex-col justify-center items-center">
				<span class="text-xs md:text-sm font-bold pb-4 underline">PLANTED BY</span>
				<a href="https://greenr.gifts/pages/event/incredibots-2024-25" target="_blank">
					<img src="/greenrgifts.png" alt="GreenrGifts Logo" class="h-14 md:h-20" />
				</a>
			</div>
		</div>
		{#if pres.length === 0}
			<div
				class="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible"
			>
				<svg
					class="text-gray-300 animate-spin"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
				>
					<path
						d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
						stroke="currentColor"
						stroke-width="5"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
					<path
						d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
						stroke="currentColor"
						stroke-width="5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="text-gray-900"
					>
					</path>
				</svg>
			</div>
			<div class="flex flex-row justify-center">
				<div class="text-base md:text-2xl font-bold">Loading...</div>
			</div>
		{:else}
			<div class="w-full flex flex-col md:flex-row justify-center">
				<div class="flex flex-col w-full items-center justify-center mb-4">
					<div
						class="text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-bl from-green-500 to-blue-800 bg-clip-text text-transparent leading-normal"
					>
						{totalTrees}
					</div>
					<div class="text-base md:text-2xl lg:text-4xl font-bold">Trees</div>
				</div>
				<!-- <div class="flex flex-col w-full items-center justify-center mb-4">
					<div
						class="text-3xl md:text-6xl font-bold bg-gradient-to-bl from-green-500 to-blue-800 bg-clip-text text-transparent leading-normal"
					>   
						{totalTrees * 0.75}
					</div>
					<div class="text-base md:text-2xl font-bold">Tons of CO2 absorbed per year</div>
				</div> -->
			</div>

			<table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
				<thead
					class="text-xs md:text-base text-white uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400"
				>
					<tr>
						<th scope="col" class="px-6 py-3">Team Name</th>
						<th scope="col" class="px-6 py-3">Cumulative highest alliance points</th>
						<th scope="col" class="px-6 py-3 text-emerald-200">Number of trees planted</th>
					</tr>
				</thead>
				<tbody> 
					{#each pres as p}
						<tr class="border-b border-black text-xs md:text-base">
							<td class="px-6 py-4">{p.TeamNumber} - {p.TeamName}</td>
							<td class="px-6 py-4">{p.HighestScore}</td>
							<td class="px-6 py-4 text-emerald-600 font-bold">{p.NumberOfTrees}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
</div>
