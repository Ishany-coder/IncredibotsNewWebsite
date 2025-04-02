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

<main class="min-h-screen bg-gradient-to-b from-red-500 to-rose-500">
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
            <img src="/Meet_1.jpg" alt="Team Photo" class="w-full h-full object-cover opacity-30">
        </div>
        <div class="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            <h1 class="text-6xl font-bold mb-6">The Incredibots</h1>
            <p class="text-2xl mb-8">FTC Team #26336</p>
            <a href="/about" class="inline-block bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors duration-200">
                Discover Our Team
            </a>
        </div>
    </section>

    <!-- Who We Are Section -->
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-8 text-white">
                    <div class="space-y-4">
                        <h2 class="text-3xl font-bold">Who We Are</h2>
                        <p class="text-lg leading-relaxed">
                            We are a team of middle and high school students from Sammamish, WA. We are passionate about robotics,
                            technology, and making a positive impact in our community. We participate in the FIRST Tech Challenge (FTC) program, where we design, build, and program robots to compete in various challenges.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <h2 class="text-3xl font-bold">Our Mission</h2>
                        <p class="text-lg leading-relaxed">
                            Our mission is to make robotics more accessible and affordable, while supporting sustainable initiatives and promoting a better planet.
                        </p>
                    </div>
                </div>
                <div class="relative group">
                    <img src="/Meet_1.jpg" alt="The Incredibots Team Members" 
                         class="w-full rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-105">
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="/about" class="inline-block bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors duration-200 transform hover:scale-105">
                    Learn More About Us
                </a>
            </div>
        </div>
    </section>

    <!-- FTC Section -->
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <div class="text-center text-white">
                <div class="flex items-center justify-center mb-8">
                    <div class="flex-1 h-1 bg-white/30 mr-4"></div>
                    <h2 class="text-4xl font-bold">FIRST Tech Challenge (FTC)</h2>
                    <div class="flex-1 h-1 bg-white/30 ml-4"></div>
                </div>
                <p class="text-lg text-white/90 max-w-3xl mx-auto mb-8">
                    The FIRST Tech Challenge is a robotics competition where teams of students design, build, and program robots to compete in an annual challenge. Through FTC, we develop STEM skills, teamwork, and problem-solving abilities while inspiring the next generation of engineers and innovators.
                </p>
                <a href="https://www.firstinspires.org/" target="_blank" 
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
                    <div class="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center text-white transform transition-all duration-300 hover:scale-105">
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
                    <div class="flex-1 h-1 bg-white/30 mr-4"></div>
                    <h2 class="text-4xl font-bold">Our Outreach Initiatives</h2>
                    <div class="flex-1 h-1 bg-white/30 ml-4"></div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {#each outreachInitiatives as initiative}
                    <a href={initiative.link} class="block">
                        <div class="bg-white/10 backdrop-blur-md rounded-xl p-8 h-full transform transition-all duration-300 hover:scale-105 text-white">
                            <div class="text-4xl mb-4">{initiative.icon}</div>
                            <h3 class="text-2xl font-bold mb-4">{initiative.title}</h3>
                            <p class="text-white/90">{initiative.description}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>
</main>
