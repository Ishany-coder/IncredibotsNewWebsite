<script>
    import Navbar from '$lib/Navbar.svelte';
    
    // Example for community-events page
    const events = [
        {
            title: "STEM Fair 2024",
            date: "March 15, 2024",
            image: "/stem-fair-2024.jpg",
            description: "Showcased our robot and conducted interactive demonstrations for over 200 students.",
            highlights: [
                "Live robot demonstrations",
                "Interactive coding workshops",
                "Q&A sessions with students"
            ]
        }
        // Add more events as needed
    ];
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-red-400 to-red-500">
    <!-- Hero Section -->
    <section class="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
            <img src="/community-events-hero.jpg" alt="Community Events" class="w-full h-full object-cover opacity-30">
        </div>
        <div class="relative z-10 text-center text-white px-4">
            <h1 class="text-5xl font-bold mb-4">Community Events</h1>
            <p class="text-xl max-w-2xl mx-auto">
                Bringing robotics and technology to our local community.
            </p>
        </div>
    </section>

    <!-- Events List -->
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            {#each events as event}
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 text-white">
                    <div class="grid md:grid-cols-2 gap-8 items-center">
                        <img src={event.image} alt={event.title} 
                             class="rounded-xl w-full h-64 object-cover">
                        <div class="space-y-4">
                            <div class="text-sm font-semibold text-white/80">{event.date}</div>
                            <h2 class="text-3xl font-bold">{event.title}</h2>
                            <p class="text-lg">{event.description}</p>
                            <div class="space-y-2">
                                <h3 class="font-semibold">Highlights:</h3>
                                <ul class="list-disc list-inside space-y-1">
                                    {#each event.highlights as highlight}
                                        <li>{highlight}</li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</main> 