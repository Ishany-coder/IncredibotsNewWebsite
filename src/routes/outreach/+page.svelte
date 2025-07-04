<script>
    import Navbar from '$lib/Navbar.svelte';

    const outreachProjects = [
        {
            title: "Seaforest Initiative",
            icon: "🌱",
            description: "Working with local communities to plant trees and promote environmental sustainability.",
            tag: "Environment",
            link: "/outreach/Seaforest",
            tagColor: "bg-green-400",
            hoverColor: "green-500",
        },
        //remove scouting chatbot until bugs fixed
        // {
        //     title: "AI Scouting Chatbot",
        //     icon: "🤖",
        //     description: "Created an innovative chatbot to help teams with robotics questions and competition preparation.",
        //     tag: "Technology",
        //     link: "/outreach/scoutingChatbot",
        //     tagColor: "bg-blue-400",
        //     hoverColor: "blue-500",
        // },
        {
            title: "Arduino Education",
            icon: "📚",
            description: "Teaching younger kids the basics of Arduino and interacting with hardware. Click here to watch our comprehensive video series!",
            tag: "Technology",
            link: "https://theincredibots.trainercentralsite.com/course/introduction-to-arduino-build-your-first-automated-devices#/home",
            tagColor: "bg-blue-400",
            hoverColor: "blue-500",
        },
        {
            title: "Community Events",
            icon: "🤝",
            description: "Participating in community events to showcase robotics, technology, and inspire the next generation of engineers.",
            tag: "Community",
            link: "/outreach/community-events",
            tagColor: "bg-purple-400",
            hoverColor: "purple-500",
        },
        {
            title: "FLL Mentorship",
            icon: "👥",
            description: "Supporting and guiding younger FIRST LEGO League teams in their robotics journey.",
            tag: "Community",
            link: "/outreach/mentorship",
            tagColor: "bg-purple-400",
            hoverColor: "purple-500",
        },
        {
            title: "Sonic Dunk!",
            icon: "🏀",
            description: "Our 2023-24 FLL innovation project dedicated to making basketball accessible to visually impaired athletes.",
            tag: "Community",
            link: "https://nettle-tin-b81.notion.site/Sonic-Dunk-1c5ecd35b1c8417c94f096eab2dd1c58",
            tagColor: "bg-purple-400",
            hoverColor: "purple-500",
        }
    ];
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-br from-red-400 to-red-600 pt-16">

    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden skew-y-[-3deg] transform -mt-10 bg-black/40">
        <div class="absolute inset-0 -skew-y-[3deg]">
            <img src="/Events/outreach.png " alt="Outreach Banner" class="w-full h-full object-cover opacity-30" />
        </div>
        <div class="relative z-10 text-center text-white px-4 -skew-y-[3deg]">
            <span class="inline-block bg-purple-600 px-4 py-1 rounded-full text-sm mb-4">Making a Difference</span>
            <h1 class="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Our Outreach Programs
            </h1>
            <p class="text-xl max-w-2xl mx-auto text-gray-200">
                Discover how we're impacting our community through technology and innovation.
            </p>
        </div>
    </section>

    <!-- Outreach Cards -->
    <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each outreachProjects as category}
                <a href={category.link} class="block group">
                    <div class="relative bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden h-full border border-white/10 hover:border-purple-400 transition-all duration-300">

                        <!-- Tag -->
                        <div class="absolute top-4 right-4 z-20">
                            <span class="{category.tagColor} text-white px-3 py-1 rounded-full text-sm">
                                {category.tag}
                            </span>
                        </div>

                        <!-- Content -->
                        <div class="p-8 h-full flex flex-col">
                            <div class="text-4xl mb-4">{category.icon}</div>
                            <h2 class="text-3xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                                {category.title}
                            </h2>
                            <p class="text-gray-300 mb-6 flex-grow">
                                {category.description}
                            </p>

                            <!-- Call to Action -->
                            <div class="mt-6 flex items-center text-purple-300 group-hover:text-purple-400 transition-colors">
                                <span class="mr-2">Click to discover more</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</main>