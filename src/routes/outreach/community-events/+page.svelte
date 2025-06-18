<script>
	import Navbar from "$lib/Navbar.svelte";

  const events = [
    {
      title: "FLL Mock Judging and Feedback Session",
      date: "January 5th, 2025",
      time: "3:00 PM – 5:30 PM",
      location: "Sammamish Library",
      description:
        "A mock FLL judging and feedback session organized by The Incredibots. Four FLL teams participated, each spending around 45 minutes presenting their projects, reviewing their robot design, and receiving constructive feedback.",
      image: "/Events/event_4.jpg",
    },
    {
      title: "Build Interactive Prototypes Using Electronics",
      date: "December 7th, 2024",
      time: "4:00 PM – 5:30 PM",
      location: "Bellevue Library",
      description:"Calling all 4th graders and above! This event introduced young innovators to real-world prototyping using electronics. Participants built interactive projects and explored robotics and engineering.",
      image: "/Events/event_2.jpg",
    },
    {
      title: "Discover the Joy of Robotics",
      date: "November 16th, 2024",
      time: "2:00 PM – 4:00 PM",
      location: "Sammamish Library",
      description:
        "The Incredibots shared their journey through the 2023-24 FIRST LEGO League season, showcasing their robot design, challenges, and problem-solving strategies.",
      image: "/Events/event_1.jpg",
    },
    {
      title: "Learn About FIRST LEGO League",
      date: "April 27th, 2024",
      time: "3:30 PM – 5:30 PM",
      location: "Issaquah Library",
      description:
        "The Incredibots, along with Kreative Koalas and Dynamites, shared insights into FIRST LEGO League, including how to start a team and compete. Over 50 families attended!",
      image: "/Events/event_3.jpg",
    },
  ];
</script>
    <Navbar />
<div class="min-h-screen bg-red-400 text-white px-6 py-10 space-y-16">
	<!-- Hero Section -->
	<section class="text-center space-y-4">
		<h1 class="text-5xl font-bold">Community Events</h1>
		<p class="text-xl max-w-2xl mx-auto">
			Stay connected with what’s happening in our community! From tech talks to volunteer drives, we’ve got something for everyone.
		</p>
	</section>

	<!-- Events Grid -->
	<section class="max-w-6xl mx-auto">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each events as event}
				<div class="bg-white text-red-500 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200">
					<img src={event.image} alt={event.title} class="w-full h-40 object-cover" />
					<div class="p-6 space-y-2">
						<h2 class="text-2xl font-semibold">{event.title}</h2>
						<p class="text-sm font-medium">{event.date} — {event.location}</p>
						<p class="text-sm">{event.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Optional CTA
	<section class="text-center">
		<button class="bg-white text-red-500 font-semibold px-6 py-3 rounded-full shadow hover:bg-red-100 transition">
			Submit an Event
		</button>
	</section> -->
</div>