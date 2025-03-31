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

<main class="min-h-screen bg-gradient-to-b from-red-400 to-red-500">
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
            <img src="/event_3.jpg" alt="Team Photo" class="w-full h-full object-cover opacity-30">
        </div>
        <div class="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            <h1 class="text-6xl font-bold mb-6">Contact Us</h1>
            <p class="text-2xl mb-8">FTC Team #26336</p>
        </div>
    </section>

	<!-- Contact Information -->
	<section class="py-12 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
				<!-- Email -->
				<a href="mailto:incredibotsftc@gmail.com" 
				   class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white text-center
						  transform transition-all duration-300 hover:scale-105">
					<svg class="w-8 h-8 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					<h3 class="text-lg font-semibold mb-2">Email Us</h3>
					<p>incredibotsftc@gmail.com</p>
				</a>

				<!-- Instagram -->
				<a href="https://www.instagram.com/ftc26336" 
				   target="_blank"
				   class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white text-center
						  transform transition-all duration-300 hover:scale-105">
					<svg class="w-8 h-8 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
					</svg>
					<h3 class="text-lg font-semibold mb-2">Follow Us</h3>
					<p>@ftc26336</p>
				</a>

				<!-- YouTube -->
				<button
					on:click={goToYouTube}
					class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white text-center
						   transform transition-all duration-300 hover:scale-105">
					<svg class="w-8 h-8 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
					</svg>
					<h3 class="text-lg font-semibold mb-2">Watch Us</h3>
					<p>Incredibot Squad</p>
				</button>
			</div>

			<!-- Contact Form -->
			<div class="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8">
				<h2 class="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h2>
				<form action="https://formsubmit.co/incredibotsftc@gmail.com" 
					  method="POST" 
					  on:submit={handleSubmit}
					  class="space-y-6">
					<div>
						<input type="text" 
							   bind:value={name} 
							   placeholder="Your Name" 
							   required 
							   class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30">
					</div>

					<div>
						<input type="email" 
							   bind:value={email} 
							   placeholder="Your Email" 
							   required 
							   class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30">
					</div>

					<div>
						<input type="text" 
							   bind:value={subject} 
							   placeholder="Subject" 
							   required 
							   class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30">
					</div>

					<div>
						<textarea bind:value={message} 
								  placeholder="Your Message" 
								  required 
								  rows="5" 
								  class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30"></textarea>
					</div>

					<input type="hidden" name="_next" value="https://www.theincredibots.com/other/contact">
					<input type="hidden" name="_captcha" value="false">

					<button type="submit" 
							class="w-full bg-white text-red-500 py-3 px-6 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 disabled:opacity-50"
							disabled={isLoading}>
						{isLoading ? "Sending..." : "Send Message"}
					</button>
				</form>
			</div>
		</div>
	</section>

	{#if showAnnouncement}
		<div class="fixed top-0 left-0 right-0 bg-blue-600 text-white py-3 px-6 text-center font-bold shadow-lg z-50">
			🚀 Thank you for visiting our page! Let's build something amazing together.
			<button class="ml-4 text-white text-lg hover:text-gray-200" 
					on:click={() => (showAnnouncement = false)}>✖</button>
		</div>
	{/if}
</main>