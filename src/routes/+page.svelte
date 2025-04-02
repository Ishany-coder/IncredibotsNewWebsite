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
    <h1 class="text-6xl font-bold mb-6 text-white text-center pt-6">The Incredibots</h1>

    <!-- Who We Are Section -->
    <section class="py-8 px-4">
        <div class="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-6 text-white">
                    <h2 class="text-3xl font-bold">Who We Are</h2>
                    <p class="text-lg">
                        We are a team of middle and high school students from Sammamish, WA. We are passionate about robotics,
                        technology, and making a positive impact in our community. We participate in the FIRST Tech Challenge (FTC) program, where we design, build, and program robots to compete in various challenges.
                    </p>
                    <h2 class="text-3xl font-bold">Our Mission</h2>
                    <p class="text-lg">
                        Our mission is to make robotics more accessible and affordable, while supporting sustainable initiatives and promoting a better planet.
                    </p>
                </div>
                <div class="relative group">
                    <img src="/Meet_1.jpg" alt="The Incredibots Team Members" 
                         class="w-full rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-105">
                </div>
            </div>
        </div>
    </section>

    <!-- FTC Section (NEW SECTION) -->
    <section class="py-16 px-4 bg-white/10 backdrop-blur-md">
        <div class="max-w-6xl mx-auto">
            <div class="text-center text-white mb-12">
                <div class="flex items-center justify-center mb-8">
                    <div class="flex-1 h-1 bg-white/30 mr-4"></div>
                    <h2 class="text-4xl font-bold">FIRST Tech Challenge (FTC)</h2>
                    <div class="flex-1 h-1 bg-white/30 ml-4"></div>
                </div>
                <p class="text-lg text-white/90 max-w-3xl mx-auto">
                    The FIRST Tech Challenge is a robotics competition where teams of students design, build, and program robots to compete in an annual challenge. Through FTC, we develop STEM skills, teamwork, and problem-solving abilities while inspiring the next generation of engineers and innovators.
                </p>
            </div>
            <div class="text-center">
                <button class="px-4 py-2 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"><a href ="https://www.firstinspires.org/" target=_blank>Learn More</a></button>
            </div>
        </div>
    </section>

    <!-- Impact Stats Section -->
    <section class="py-8 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="text-center text-white mb-8">
                <div class="flex items-center justify-center mb-6">
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
    <section class="py-16 px-4 bg-white/10 backdrop-blur-md">
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
                        <div class="bg-white/20 rounded-xl p-8 h-full transform transition-all duration-300 hover:scale-105 text-white">
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
