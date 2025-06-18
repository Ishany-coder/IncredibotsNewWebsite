<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-br from-red-400 via-red-500 to-red-600">
	<div class="container mx-auto px-4 py-12">
		<div class="text-center mb-16">
			<h1 class="text-6xl font-bold text-white mb-4">Vision System Evolution</h1>
			<p class="text-2xl text-white/90 max-w-4xl mx-auto">
				Our journey from consumer-grade webcams to professional vision systems
			</p>
		</div>

		<div class="relative mb-16">
			<img src="/Robot/Vision/samples.png" alt="Sample Images with Boxes" class="rounded-3xl shadow-xl w-full h-96 object-cover" />
			<div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<div class="text-center text-white px-8">
					<h3 class="text-3xl font-bold mb-2">Early Detection Results</h3>
					<p class="text-lg text-white/90">Initial object detection using Logitech C270</p>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
			<div class="relative group">
				<div class="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0"></div>
				<img src="/Robot/Vision/logitech camera.webp" alt="Logitech C270 Webcam" class="rounded-3xl shadow-xl w-full h-auto max-h-[500px] object-cover transition-transform duration-500 group-hover:scale-105" />
				<div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<div class="text-center text-white px-8">
						<h3 class="text-3xl font-bold mb-4">Logitech C270</h3>
						<p class="text-lg text-gray-300 mb-6">Consumer-grade webcam</p>
						<div class="space-y-3 mt-4">
							<h4 class="text-xl font-semibold text-red-400">Techniques Tried:</h4>
							<ul class="space-y-2 text-red-400">
								<li class="flex items-center">
									<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									Watershed Segmentation
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									Canny Edge Detection
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									Blob Detection
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									Color Thresholding
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="relative group">
				<div class="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0"></div>
				<img src="/Robot/Vision/limelight.webp" alt="Limelight Camera" class="rounded-3xl shadow-xl w-full h-auto max-h-[500px] object-cover transition-transform duration-500 group-hover:scale-105" />
				<div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<div class="text-center text-white px-8">
						<h3 class="text-3xl font-bold mb-4">Limelight</h3>
						<p class="text-lg text-gray-300 mb-6">Professional vision system</p>
						<div class="space-y-3 mt-4">
							<h4 class="text-xl font-semibold text-green-400">Vision Processing:</h4>
							<ul class="space-y-2 text-green-400">
								<li class="flex items-center">
									<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									Separate models for each color:
									<ul class="space-y-1 ml-6 text-green-300">
										<li>Red samples</li>
										<li>Blue samples</li>
										<li>Yellow samples</li>
									</ul>
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									Color-Specific Detection
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									Real-time Processing
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-16 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<h2 class="text-3xl font-bold text-white mb-8">Vision Calculations</h2>
					<div class="space-y-6">
						<div class="space-y-4">
							<h3 class="text-2xl font-bold text-white mb-4">Distance Estimation</h3>
							<ul class="space-y-2 text-white/90">
								<li>Uses camera focal length and known object size</li>
								<li>Calculates distance based on object size in pixels</li>
								<li>Accounts for camera angle and field of view</li>
								<li>Adjusts for different sample sizes</li>
							</ul>
						</div>
						<div class="space-y-4">
							<h3 class="text-2xl font-bold text-white mb-4">Position Estimation</h3>
							<ul class="space-y-2 text-white/90">
								<li>Determines sample position in camera frame</li>
								<li>Calculates horizontal and vertical offset</li>
								<li>Converts pixel coordinates to real-world units</li>
								<li>Accounts for camera mounting angle</li>
							</ul>
						</div>
						<div class="space-y-4">
							<h3 class="text-2xl font-bold text-white mb-4">Camera Calibration</h3>
							<ul class="space-y-2 text-white/90">
								<li>Calibrates for lens distortion</li>
								<li>Adjusts for camera tilt</li>
								<li>Compensates for mounting height</li>
								<li>Maintains accuracy across distances</li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<h2 class="text-3xl font-bold text-white mb-8">Movement Calculations</h2>
					<div class="space-y-6">
						<div class="space-y-4">
							<h3 class="text-2xl font-bold text-white mb-4">Slide Extension</h3>
							<ul class="space-y-2 text-white/90">
								<li>Uses Pythagorean theorem with arm length</li>
								<li>Calculates vertical height based on distance</li>
								<li>Adjusts for arm length limitations</li>
							</ul>
						</div>
						<div class="space-y-4">
							<h3 class="text-2xl font-bold text-white mb-4">Turret Rotation</h3>
							<ul class="space-y-2 text-white/90">
								<li>Points intake at sample location</li>
								<li>Calculates angle based on horizontal distance</li>
								<li>Adjusts for slide extension</li>
							</ul>
						</div>
						<div class="space-y-4">
							<h3 class="text-2xl font-bold text-white mb-4">Claw Orientation</h3>
							<ul class="space-y-2 text-white/90">
								<li>Corrects for turret rotation</li>
								<li>Keeps claw level with robot</li>
								<li>Adjusts wrist angle for sample pickup</li>
								<li>Combines parallel and target angles</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.shadow-xl {
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	code {
		font-family: 'Fira Code', monospace;
		font-weight: 500;
	}

	.object-cover {
		object-fit: cover;
	}

	.min-h-screen {
		min-height: 100vh;
	}
	
	.bg-gradient-to-b {
		background-image: linear-gradient(to bottom, #f56565, #f06b76);
	}
	
	.rounded-full {
		border-radius: 50%;
	}
	
	.transition-all {
		transition: all 0.3s ease;
	}
	
	.text-white {
		color: white;
	}
	
	.bg-red-500 {
		background-color: #f56565;
	}
	
	.hover\:bg-red-400:hover {
		background-color: #fc8181;
	}
	
	.shadow-lg {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.w-80 {
		width: 20rem; /* Make images smaller */
	}

	.border-white {
		border-color: white;
	}
</style>
