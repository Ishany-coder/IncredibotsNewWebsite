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
</script>


<Navbar />
<main class="bg-red-400 min-h-screen">
    <!-- Section about our team and our mission -->
    <div class=" bg-red-400 text-white py-2">
        <div class="container mx-auto px-2">
            <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="w-full md:w-1/2 flex">
                    <div class="w-1/2 pr-4">
                        <h3 class="text-2xl font-bold mb-4">Who We Are</h3>
                        <p class="mb-6">We are a rookie team based in Sammamish Washington. Our team loves Robotics and consists of 3 7th graders, 2 8th graders and 2 9th graders! </p>
                    </div>
                    <div class="w-1/2 pl-4">
                        <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
                        <p class="mb-6">Our mission is to promote a better and greener planet, educate the young on robotics and have fun while doing it!</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <img src="Meet_1.jpg" alt="The Incredibots Team Members" class="w-full rounded-lg shadow-lg">
                </div>
            </div>
        </div>
    </div>

    <!-- Our Impact Section -->
    <div class="pb-8 pt-8 bg-red-400 text-white py-2">
        <div class="container mx-auto px-2 text-center">
            <div class="flex items-center justify-center mb-4">
                <div class="flex-1 h-1 bg-white mr-4"></div> <!-- Line on the left -->
                <h2 class="text-3xl font-bold">Our Impact</h2>
                <div class="flex-1 h-1 bg-white ml-4"></div> <!-- Line on the right -->
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <span class="text-4xl font-bold block">500+</span>
                    <span>Using our resources</span>
                </div>
                <div>
                    <span class="text-4xl font-bold block">100+</span>
                    <span>Introduced to Robotics</span>
                </div>
                <div>
                    <span class="text-4xl font-bold block">100+</span>
                    <span>Introduced to FIRST</span>
                </div>
                <div>
                    <span class="text-4xl font-bold block">4</span>
                    <span>Teams Mentored</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Outreach Initiatives Section -->
    <div class="bg-red-400 text-white py-2">
        <div class="container mx-auto px-2">
            <div class="flex items-center justify-center mb-4">
                <div class="flex-1 h-1 bg-white mr-4"></div> <!-- Line on the left -->
                <h2 class="text-3xl font-bold">Our Outreach Initiatives</h2>
                <div class="flex-1 h-1 bg-white ml-4"></div> <!-- Line on the right -->
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <a href="/outreach">
                    <div class="card bg-white text-black p-6 rounded-lg shadow-lg">
                        <div class="flex items-center justify-center mb-4">
                            <h3 class="text-xl font-bold text-black">Impact</h3>
                        </div>
                        <p class="text-black">We built a chatbot which can answer questions, an initiative where we plant trees and so much more! Click here to find out</p>
                    </div>
                </a>
                <a href="outreach/community-events">
                    <div class="card bg-white text-black p-6 rounded-lg shadow-lg">
                        <div class="flex items-center justify-center mb-4">
                            <h3 class="text-xl font-bold">Community Events</h3>
                        </div>
                        <p>Participating in community events to showcase robotics technology and inspire the next generation of engineers. Click here to find out more!</p>
                    </div>
                </a>
                <a href="/outreach/mentorship">
                    <div class="card bg-white text-black p-6 rounded-lg shadow-lg">
                        <div class="flex items-center justify-center mb-4">
                            <h3 class="text-xl font-bold">Mentorship</h3>
                        </div>
                        <p>Supporting younger teams and students interested in FIRST Tech Challenge and robotics. Click here to learn about the amazing teams we helped and how much they improved!</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</main>