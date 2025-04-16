<script>
    import Navbar from '$lib/Navbar.svelte';

    const impactStats = [
        { number: "800+", label: "Using our resources" },
        { number: "200+", label: "Introduced to Robotics" },
        { number: "100+", label: "Introduced to FIRST" },
        { number: "5", label: "Teams Mentored" }
    ];

    const outreachInitiatives = [
        {
            title: "Impact",
            description: "We built a chatbot which can answer questions, an initiative where we plant trees and so much more!",
            link: "/outreach",
            icon: "🌱"
        },
        {
            title: "Community Events",
            description: "Participating in community events to showcase robotics technology and inspire the next generation of engineers.",
            link: "/outreach/community-events",
            icon: "🤝"
        },
        {
            title: "Mentorship",
            description: "Supporting younger teams and students interested in FIRST Tech Challenge and robotics.",
            link: "/outreach/mentorship",
            icon: "📚"
        }
    ];
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-red-500 to-red-500">
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
            <img src="/Meet_1.jpg" alt="Incredibots team members in a group photo during a robotics competition" class="w-full h-full object-cover opacity-30">
        </div>
        <div class="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            <h1 class="text-6xl font-bold mb-6">The Incredibots</h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
            <p class="text-2xl mb-4">FTC Team #26336</p>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
                We are a <span class="font-bold text-red-200">passionate team</span> of high school students dedicated to <span class="font-bold text-red-200">robotics</span> and <span class="font-bold text-red-200">STEM education</span>. Through <span class="font-bold text-red-200">innovation</span> and <span class="font-bold text-red-200">teamwork</span>, we strive to inspire the next generation of <span class="font-bold text-red-200">engineers</span> and <span class="font-bold text-red-200">leaders</span>.
            </p>
            <a href="/about" class="inline-block bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors duration-200">
                Discover Our Team
            </a>
        </div>
    </section>

    <!-- Who We Are Section -->


    <!-- FTC Section -->
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto bg-black/10 backdrop-blur-md rounded-2xl p-8">
            <div class="text-center text-white">
                <div class="flex items-center justify-center mb-8">
                    <div class="flex-1 h-1 bg-white/30 mr-4"></div>
                    <h2 class="text-4xl font-bold">FIRST Tech Challenge (FTC)</h2>
                    <div class="flex-1 h-1 bg-white/30 ml-4"></div>
                </div>
                <p class="text-lg text-white/90 max-w-3xl mx-auto mb-8">
                    The <span class="font-bold text-red-200">FIRST Tech Challenge</span> is a <span class="font-bold text-red-200">robotics competition</span> where teams of students <span class="font-bold text-red-200">design, build, and program robots</span> to compete in an annual challenge. Through FTC, we develop <span class="font-bold text-red-200">STEM skills</span>, <span class="font-bold text-red-200">teamwork</span>, and <span class="font-bold text-red-200">problem-solving abilities</span> while inspiring the next generation of <span class="font-bold text-red-200">engineers and innovators</span>.
                </p>
                <a href="https://www.firstinspires.org/" target="_blank" rel="noopener noreferrer"
                   class="inline-block bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors duration-200">
                    Learn More
                </a>
            </div>
        </div>
    </section>

    <!-- Impact Stats Section -->
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="text-center text-white mb-12">
                <div class="flex items-center justify-center mb-8">
                    <div class="flex-1 h-1 bg-white/30 mr-4"></div>
                    <h2 class="text-4xl font-bold">Our Impact</h2>
                    <div class="flex-1 h-1 bg-white/30 ml-4"></div>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {#each impactStats as stat}
                    <div class="bg-black/20 backdrop-blur-md rounded-xl p-8 text-center text-white transform transition-all duration-300 hover:scale-105">
                        <span class="block text-5xl font-bold mb-2">{stat.number}</span>
                        <span class="text-lg">{stat.label}</span>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Outreach Initiatives Section -->
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="text-center text-white mb-12">
                <div class="flex items-center justify-center mb-8">
                    <div class="flex-1 h-1 bg-black/30 mr-4"></div>
                    <h2 class="text-4xl font-bold">Our Outreach Initiatives</h2>
                    <div class="flex-1 h-1 bg-black/30 ml-4"></div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {#each outreachInitiatives as initiative}
                    <a href={initiative.link} class="block">
                        <div class="bg-black/20 backdrop-blur-md rounded-xl p-8 h-full transform transition-all duration-300 hover:scale-105 text-white">
                            <div class="text-4xl mb-4">{initiative.icon}</div>
                            <h3 class="text-2xl font-bold mb-4">{initiative.title}</h3>
                            <p class="text-white/90">
                                {#if initiative.title === "Impact"}
                                    We built a <span class="font-bold text-red-200">chatbot</span> which can answer questions, an initiative where we <span class="font-bold text-red-200">plant trees</span> and so much more!
                                {:else if initiative.title === "Community Events"}
                                    Participating in <span class="font-bold text-red-200">community events</span> to showcase <span class="font-bold text-red-200">robotics technology</span> and inspire the next generation of <span class="font-bold text-red-200">engineers</span>.
                                {:else}
                                    Supporting <span class="font-bold text-red-200">younger teams</span> and students interested in <span class="font-bold text-red-200">FIRST Tech Challenge</span> and <span class="font-bold text-red-200">robotics</span>.
                                {/if}
                            </p>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>
</main>
