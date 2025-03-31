<script>
    import Navbar from '$lib/Navbar.svelte';

    const outreachProjects = [
        {
            title: "Environmental Impact",
            icon: "🌱",
            description: "Our initiatives for a greener future",
            tag: "Environment",
            link: "/outreach/environment",
            projects: [
                {
                    name: "Tree Planting Initiative",
                    description: "Working with local communities to plant trees and promote environmental sustainability.",
                    image: "/Meet_1.jpg",
                    stats: "100+ trees planted"
                },
                {
                    name: "AI Chatbot Development",
                    description: "Created an innovative chatbot to help teams with robotics questions and competition preparation.",
                    image: "/Meet_1.jpg",
                    stats: "500+ users helped"
                }
            ]
        },
        {
            title: "Educational Outreach",
            icon: "📚",
            description: "Sharing knowledge and inspiring others",
            tag: "Education",
            link: "/outreach/education",
            projects: [
                {
                    name: "Arduino Workshop Series",
                    description: "Teaching younger students the basics of robotics through hands-on Arduino projects.",
                    image: "/Meet_1.jpg",
                    stats: "50+ students taught"
                },
                {
                    name: "Online Learning Resources",
                    description: "Creating comprehensive video tutorials and documentation for aspiring robotics enthusiasts.",
                    image: "/Meet_1.jpg",
                    stats: "1000+ views"
                }
            ]
        },
        {
            title: "Community Engagement",
            icon: "🤝",
            description: "Making a difference in our local community",
            tag: "Community",
            link: "/outreach/community",
            projects: [
                {
                    name: "FLL Team Mentorship",
                    description: "Supporting and guiding younger FIRST LEGO League teams in their robotics journey.",
                    image: "/Hawking.jpg",
                    stats: "4 teams mentored"
                },
                {
                    name: "STEM Fairs",
                    description: "Participating in local STEM events to showcase robotics and inspire future engineers.",
                    image: "/Hawking.jpg",
                    stats: "10+ events"
                }
            ]
        }
    ];
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-br from-red-400 to-red-600">
    <!-- Hero Section with Diagonal Design -->
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden skew-y-[-3deg] transform -mt-10 bg-black/40">
        <div class="absolute inset-0 -skew-y-[3deg]">
            <img src="/Meet_1.jpg" alt="Outreach Banner" class="w-full h-full object-cover opacity-40">
        </div>
        <div class="relative z-10 text-center text-white px-4 -skew-y-[3deg]">
            <span class="inline-block bg-purple-600 px-4 py-1 rounded-full text-sm mb-4">Making a Difference</span>
            <h1 class="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Our Outreach Programs
            </h1>
            <p class="text-xl max-w-2xl mx-auto text-gray-200">
                Discover how we're impacting our community through technology and innovation
            </p>
        </div>
    </section>

    <!-- Outreach Categories with Unique Style -->
    <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each outreachProjects as category}
                <a href={category.link} class="block group">
                    <div class="relative bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden h-full border border-white/10 hover:border-purple-400 transition-all duration-300">
                        <!-- Tag -->
                        <div class="absolute top-4 right-4 z-20">
                            <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
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
                            
                            <!-- Project Highlights -->
                            <div class="space-y-3">
                                {#each category.projects as project}
                                    <div class="bg-white/5 rounded-lg p-3 text-sm text-gray-300">
                                        <span class="font-semibold text-purple-300">{project.name}</span>
                                        <span class="text-xs bg-purple-600/30 px-2 py-1 rounded-full ml-2">
                                            {project.stats}
                                        </span>
                                    </div>
                                {/each}
                            </div>

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
