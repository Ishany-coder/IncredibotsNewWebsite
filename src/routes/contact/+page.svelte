<script>
	import Navbar from "$lib/Navbar.svelte";
	let name = "";
	let email = "";
	let subject = "";
	let message = "";
	let isLoading = false;
	let showAnnouncement = false;

	
	function handleSubmit(){
		showAnnouncement = true;
	}
    function goToYouTube(){
        window.open("https://www.youtube.com/@IncredibotSquad", "_blank")
    }
</script>

<Navbar />
<!-- Background Section -->
<div class="w-full min-h-screen flex flex-col items-center justify-center bg-red-400 text-white px-6">
	<!-- Announcement Banner -->
	{#if showAnnouncement}
		<div class="w-full bg-blue-600 text-white py-3 px-6 text-center font-bold shadow-lg">
			🚀 Thank you for visiting our page! Let’s build something amazing together.
			<button class="ml-4 text-white text-lg hover:text-gray-200" on:click={() => (showAnnouncement = false)}>✖</button>
		</div>
	{/if}
  
	
	<!-- Contact Section -->
	<div class="max-w-6xl w-full text-center mt-8">
		<h1 class="text-6xl font-extrabold mb-4 drop-shadow-lg">Contact Us</h1>
		<p class="text-xl mb-6 text-gray-200 max-w-4xl mx-auto leading-relaxed">
			Have questions about our robotics team or interested in collaborating with <b>The Incredibots</b>?  
			We’d love to connect. Whether you're a mentor, sponsor, or fellow enthusiast, feel free to reach out.
		</p>

		<!-- Contact Info -->
		<div class="flex flex-wrap items-center justify-center gap-6 mb-8">
			<div class="flex items-center space-x-3 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition">
				<svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m8 0a4 4 0 100-8H8a4 4 0 100 8m8 0H8m8 0v4a4 4 0 11-8 0v-4m8 0a4 4 0 01-8 0"></path>
				</svg>
				<a href="mailto:incredibotsftc@gmail.com" class="text-lg hover:underline">incredibotsftc@gmail.com</a>
			</div>

			<div class="flex items-center space-x-3 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition">
				<svg class="w-6 h-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2.2c3.2 0 3.6.01 4.85.07 1.18.05 1.97.24 2.63.51.66.27 1.22.64 1.78 1.2.56.56.93 1.12 1.2 1.78.27.66.46 1.45.51 2.63.06 1.25.07 1.65.07 4.85s-.01 3.6-.07 4.85c-.05 1.18-.24 1.97-.51 2.63-.27.66-.64 1.22-1.2 1.78-.56.56-1.12.93-1.78 1.2-.66.27-1.45.46-2.63.51-1.25.06-1.65.07-4.85.07s-3.6-.01-4.85-.07c-1.18-.05-1.97-.24-2.63-.51-.66-.27-1.22-.64-1.78-1.2-.56-.56-.93-1.12-1.2-1.78-.27-.66-.46-1.45-.51-2.63-.06-1.25-.07-1.65-.07-4.85s.01-3.6.07-4.85c.05-1.18.24-1.97.51-2.63.27-.66.64-1.22 1.2-1.78.56-.56 1.12-.93 1.78-1.2.66-.27 1.45-.46 2.63-.51 1.25-.06 1.65-.07 4.85-.07z"></path>
					<circle cx="12" cy="12" r="3.2"></circle>
					<circle cx="18.4" cy="5.6" r="1.44"></circle>
				</svg>
				<a href="https://www.instagram.com/ftc26336" target="_blank" class="text-lg hover:underline">@ftc26336</a>
			</div>
            <button
            on:click={goToYouTube}
            class="flex items-center gap-2 bg-gray-800 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg shadow transition h-13"
        >
            <!-- YouTube Logo SVG -->
            <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M23.498 6.186a2.94 2.94 0 0 0-2.066-2.07C19.606 3.5 12 3.5 12 3.5s-7.606 0-9.432.616a2.94 2.94 0 0 0-2.066 2.07A30.06 30.06 0 0 0 0 12a30.06 30.06 0 0 0 .502 5.814 2.94 2.94 0 0 0 2.066 2.07C4.394 20.5 12 20.5 12 20.5s7.606 0 9.432-.616a2.94 2.94 0 0 0 2.066-2.07A30.06 30.06 0 0 0 24 12a30.06 30.06 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
            </svg>

            <span>Incredibot Squad</span>
        </button>
		</div>

		<!-- Contact Form (Now Wider) -->
		<form class="p-10 rounded-lg w-full max-w-4xl mx-auto bg-gray-800 shadow-xl" action="https://formsubmit.co/incredibotsftc@gmail.com" method="POST" on:submit={handleSubmit}>
			<p class="text-gray-300 text-lg mb-6">Fill out the form below and we’ll get back to you as soon as possible.</p>

			<input type="text" bind:value={name} placeholder="Your Name" required class="w-full px-5 py-4 rounded bg-gray-600 text-white border border-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400">

			<input type="email" bind:value={email} placeholder="Your Email" required class="w-full px-5 py-4 rounded bg-gray-600 text-white border border-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400">

			<input type="text" bind:value={subject} placeholder="Subject" required class="w-full px-5 py-4 rounded bg-gray-600 text-white border border-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400">

			<textarea bind:value={message} placeholder="Message" required rows="5" class="w-full px-5 py-4 rounded bg-gray-600 text-white border border-gray-500 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

			<input type="hidden" name="_next" value="https://www.theincredibots.com/other/contact">

			<input type="hidden" name="_captcha" value="false">

			<button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-5 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50" disabled={isLoading}>
				{isLoading ? "Sending..." : "Send Message"}
			</button>
		</form>
	</div>
</div>