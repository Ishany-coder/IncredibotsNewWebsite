<script>
    import Navbar from "$lib/Navbar.svelte";

    // List of outreach events
    let events = [
        {
            title: "Tree Planting Initiative",
            description: "Our team collaborated with the community to plant trees and promote environmental sustainability.",
            link: "/outreach/Seaforest"
        },
        {
            title: "AI Chatbot Development",
            description: "We developed an AI chatbot to answer questions and assist users in learning about robotics.",
            link: "/outreach/scoutingChatbot"
        },
        {
            title: "Community Workshops",
            description: "We hosted workshops to teach robotics and coding to students in our community.",
            link: "/outreach/community-events"
        },
        {
            title: "teaching robotics to the young",
            description: "We made videos to teach younger kids the basics of arduino and interacting with hardware click here to watch!",
            link: "https://theincredibots.trainercentralsite.com/course/introduction-to-arduino-build-your-first-automated-devices#/home"
        }
    ];
</script>

<Navbar />

<section class="bg-red-400 py-12">
    <div class="container mx-auto px-6">
        <h1 class="text-4xl font-bold text-white text-center mb-8">Our Outreach Initiatives</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each events as event}
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold mb-4">{event.title}</h2>
                    <p class="text-gray-700 mb-4">{event.description}</p>
					{#if event.link}
                        <a
                            href={event.link}
                            class="text-blue-500 font-bold hover:underline"
                            target="{event.link.startsWith('http') ? '_blank' : '_self'}"
                        >
                            Learn More
                        </a>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>
<div class="section bg-red-400 text-white">
    <div class="container mx-auto text-center">
        <div class="flex items-center justify-center mb-8">
            <div class="flex-1 h-1 bg-white mr-4" style="margin-left: 20px;"></div> <!-- Line on the left -->
            <h2 class="text-3xl font-bold">Our Impact</h2>
            <div class="flex-1 h-1 bg-white ml-4" style="margin-right: 20px;"></div> <!-- Line on the right -->
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <span class="text-4xl font-bold block">500+</span>
                <span>Students Reached</span>
            </div>
            <div>
                <span class="text-4xl font-bold block">20+</span>
                <span>Events Hosted</span>
            </div>
            <div>
                <span class="text-4xl font-bold block">1000+</span>
                <span>Volunteer Hours</span>
            </div>
        </div>
    </div>
</div>
