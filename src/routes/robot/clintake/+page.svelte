<script>
	import { onMount } from "svelte";
	import Navbar from "$lib/Navbar.svelte";
  
	// Timeline iterations with dates
	const clintakeIterations = [
	  {
		name: "Tongs",
		description: "A standard design that uses a tongs style motion to pick up objects.",
		date: "2023-02-15",
		image: "/tongs.png"  // Ensure this image exists in your public folder
	  },
	  {
		name: "Chopsticks",
		description: "The design features a single moving arm, offering greater precision and flexibility.",
		date: "2023-06-30",
		image: "/chopsticks.png"
	  },
	  {
		name: "Clintake",
		description: "The Clintake is a hybrid claw and intake mechanism designed to quickly grab and pull in game elements.",
		date: "2023-09-20",
		image: "/clintake.png"
	  }
	];
  
	let currentStep = 0;
  
	function goToStep(step) {
	  if (step >= 0 && step < clintakeIterations.length) {
		currentStep = step;
	  }
	}
  
	onMount(() => {
	  document.body.style.scrollBehavior = "smooth";
	});
</script>
  
<Navbar />
  
<main class="min-h-screen bg-gradient-to-b from-red-400 to-red-500 px-4 py-16">
  <!-- Timeline Section -->
  <section class="max-w-6xl mx-auto space-y-12 relative">
    <!-- Timeline Line (behind the raindrops) -->
    <div class="absolute top-8 left-0 w-full h-[2px] bg-white/40"></div>
    
    <!-- Timeline Row -->
    <div class="relative flex justify-between items-center">
      {#each clintakeIterations as iteration, i}
        <div
          class="relative flex flex-col items-center w-16 h-16"
          style="z-index: {i === currentStep ? 10 : 1};"
        >
          <!-- Raindrop Shape -->
          <div
            class="w-16 h-16 bg-gradient-to-b from-red-500 to-red-700 rounded-full transition-all duration-300 flex items-center justify-center"
            style="transform: scale({i === currentStep ? 1.5 : 1});"
            on:click={() => goToStep(i)}
          >
            <span class="text-sm text-white">{iteration.name}</span>
          </div>
        </div>
      {/each}
    </div>
  
    <!-- Content Section with keyed transition -->
    {#key currentStep}
      <div class="transition-all duration-300 transform scale-100 mt-8 text-center">
        <h2 class="text-3xl font-bold text-white">{clintakeIterations[currentStep].name}</h2>
        <p class="text-white/90 leading-relaxed mt-4">{clintakeIterations[currentStep].description}</p>
        {#if clintakeIterations[currentStep].image}
          <img src={clintakeIterations[currentStep].image} alt={clintakeIterations[currentStep].name} class="w-80 h-auto rounded-lg shadow-md mt-4" />
        {/if}
      </div>
    {/key}
  
    <!-- Navigation Arrows -->
    <div class="flex justify-between mt-8">
      <button
        on:click={() => goToStep(currentStep - 1)}
        class="w-16 h-16 bg-red-500 rounded-full shadow-lg hover:bg-red-400 transition-all duration-300 flex items-center justify-center border-4 border-white"
        disabled={currentStep === 0}
        style="transform: rotate(180deg);"
      >
        <span class="text-3xl text-white">&#8594;</span>
      </button>
      <button
        on:click={() => goToStep(currentStep + 1)}
        class="w-16 h-16 bg-red-500 rounded-full shadow-lg hover:bg-red-400 transition-all duration-300 flex items-center justify-center border-4 border-white"
        disabled={currentStep === clintakeIterations.length - 1}
      >
        <span class="text-3xl text-white">&#8594;</span>
      </button>
    </div>
  </section>
</main>
  
<style>
  /* Utility overrides and custom styles */
  .min-h-screen {
    min-height: 100vh;
  }
  
  .bg-gradient-to-b {
    background-image: linear-gradient(to bottom, #f56565, #f06b76);
  }
  
  .rounded-full {
    border-radius: 50%;
  }
  
  .transition-all {
    transition: all 0.3s ease;
  }
  
  .text-white {
    color: white;
  }
  
  .bg-red-500 {
    background-color: #f56565;
  }
  
  .hover\:bg-red-400:hover {
    background-color: #fc8181;
  }
  
  .shadow-lg {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .w-80 {
    width: 20rem; /* Make images smaller */
  }

  .border-white {
    border-color: white;
  }
</style>
