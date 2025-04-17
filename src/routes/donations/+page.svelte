<script>
    import Navbar from "$lib/Navbar.svelte";

    const impactAreas = [
        {
            title: "Competition Support",
            description: "Help cover competition registration fees, travel expenses, and equipment costs.",
            icon: "🏆",
            details: [
                "Regional and State Championship fees",
                "Travel and accommodation for competitions",
                "Robot parts and maintenance",
                "Practice field materials"
            ]
        },
        {
            title: "Outreach Programs",
            description: "Support our community initiatives and STEM education programs.",
            icon: "🌱",
            details: [
                "STEM workshops for local schools",
                "Community robotics demonstrations",
                "Educational materials and resources",
                "Mentorship programs"
            ]
        },
        {
            title: "Team Development",
            description: "Fund team training, workshops, and skill development opportunities.",
            icon: "📚",
            details: [
                "Technical training sessions",
                "Leadership development programs",
                "Team building activities",
                "Professional development workshops"
            ]
        }
    ];

    const sponsorshipLevels = [
        {
            level: "Gold",
            amount: "$1,000+",
            benefits: [
                "Logo placement on robot and team shirts",
                "Featured on all social media",
                "Company spotlight in newsletters",
                "Invitation to team events"
            ]
        },
        {
            level: "Silver",
            amount: "$500 - $999",
            benefits: [
                "Logo on team shirts",
                "Social media recognition",
                "Mention in newsletters",
                "Team event invitations"
            ]
        },
        {
            level: "Bronze",
            amount: "$100 - $499",
            benefits: [
                "Social media shoutout",
                "Newsletter mention",
                "Thank you certificate"
            ]
        }
    ];
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-red-400 to-red-500">
    <!-- Hero Section -->
        <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto py-16">
            <span class="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm mb-4">Support STEM Education</span>
            <h1 class="text-5xl font-bold mb-6">Support Our Mission</h1>
            <p class="text-xl mb-8">
                Help us continue our journey in <span class="font-bold text-red-200">robotics</span>, <span class="font-bold text-red-200">STEM education</span>, and <span class="font-bold text-red-200">community outreach</span>.
            </p>
            <a 
                href="https://your-donation-site.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block bg-white text-red-500 px-12 py-4 rounded-full font-semibold hover:bg-red-100 transition-colors duration-200 text-xl shadow-lg hover:shadow-xl"
            >
                Donate Now
            </a>
        </div>
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-white mb-4">Your Impact</h2>
                <p class="text-xl text-white/80 max-w-3xl mx-auto">
                    Every contribution helps us continue our mission of inspiring the next generation of engineers and innovators.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {#each impactAreas as area}
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white transform transition-all duration-300 hover:scale-105 border border-white/10">
                        <div class="text-4xl mb-4">{area.icon}</div>
                        <h3 class="text-2xl font-bold mb-4">{area.title}</h3>
                        <p class="text-white/90 mb-6">{area.description}</p>
                        <ul class="space-y-2">
                            {#each area.details as detail}
                                <li class="flex items-start">
                                    <span class="text-red-200 mr-2">•</span>
                                    <span class="text-white/90">{detail}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>
    <!-- Call to Action -->
    <section class="py-20 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
            <p class="text-xl text-white/80 mb-8">
                Your support helps us continue our mission of inspiring the next generation of engineers and innovators.
            </p>
            <a 
                href="https://your-donation-site.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block bg-white text-red-500 px-12 py-4 rounded-full font-semibold hover:bg-red-100 transition-colors duration-200 text-xl shadow-lg hover:shadow-xl"
            >
                Donate Now
            </a>
        </div>
    </section>
</main>