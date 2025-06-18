<script>
    import Navbar from '$lib/Navbar.svelte';
    // import { onMount } from 'svelte';

    // onMount(() => {
    //     // Save current overflow setting
    //     const original = document.body.style.overflow;
        
    //     // Disable scrolling
    //     document.body.style.overflow = 'hidden';

    //     // Restore on destroy
    //     return () => {
    //         document.body.style.overflow = original;
    //     };
    // });

    const impactStats = [
        { number: "500+", label: "Using our resources" },
        { number: "100+", label: "Introduced to Robotics" },
        { number: "100+", label: "Introduced to FIRST" },
        { number: "4", label: "Teams Mentored" }
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

<main class="min-h-screen bg-gradient-to-b from-red-400 to-red-500">
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
            <img src="/Events/Hawking.jpg" alt="Team Photo" class="w-full">
        </div>
        <div class="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            <h1 class="text-6xl font-bold mb-6">The Incredibots</h1>
            <p class="text-2xl mb-8">FTC Team #26336</p>
            <a href="/about" class="inline-block bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors duration-200">
                Discover Our Story
            </a>
        </div>
    </section>

    <!-- Who We Are Section -->
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-6 text-white">
                    <div class="space-y-4">
                        <h2 class="text-3xl font-bold">Who We Are</h2>
                        <p class="text-lg">
                            We are a rookie FTC team based in Sammamish, Washington. Our team loves robotics and consists of 
                            middle and high schoolers. One of our favorite things to do after a long meeting is eat some tasty snacks.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <h2 class="text-3xl font-bold">Our Mission</h2>
                        <p class="text-lg">
                            Our mission is to promote a better and greener planet, teach others about robotics, 
                            and have fun while doing it!
                        </p>
                    </div>
                </div>
                <div class="relative group">
                    <img src="/Events/Meet_1.jpg" alt="The Incredibots Team Members" 
                         class="w-full rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-105">
                </div>
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