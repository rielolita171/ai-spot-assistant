<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	// Svelte 5 Runes
	let { children } = $props();

	// State for the active navigation tab
	let activeTab = $state('home');
</script>

<svelte:head>
	<title>AI Spot Tracker</title>
	<link rel="icon" href={favicon} />
	<!-- Critical for mobile: prevents zooming and fits to screen -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
</svelte:head>

<!-- Main App Container -->
<div class="flex h-screen flex-col bg-stone-50 text-stone-900 select-none">
	
	<!-- Header / Status Bar Area -->
	<header class="bg-white px-4 pt-12 pb-4 border-b border-stone-200">
		<h1 class="text-xl font-bold tracking-tight uppercase">AI Spot Tracker</h1>
	</header>

	<!-- Scrollable Content Area -->
	<main class="flex-1 overflow-y-auto pb-24">
		<div class="mx-auto max-w-md p-4">
			{@render children()}
		</div>
	</main>

	<!-- Persistent Bottom Navigation (FSD FR1-FR9) -->
	<nav class="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t border-stone-200 bg-white/80 pb-8 pt-3 backdrop-blur-md">
		
		<a href="/" onclick={() => activeTab = 'home'} class="flex flex-col items-center gap-1 transition-colors {activeTab === 'home' ? 'text-amber-600' : 'text-stone-400'}">
			<span class="text-2xl">📍</span>
			<span class="text-[10px] font-bold uppercase">Spots</span>
		</a>

		<a href="/discovery" onclick={() => activeTab = 'discovery'} class="flex flex-col items-center gap-1 transition-colors {activeTab === 'discovery' ? 'text-amber-600' : 'text-stone-400'}">
			<span class="text-2xl">🔍</span>
			<span class="text-[10px] font-bold uppercase">Discover</span>
		</a>

		<a href="/tech" onclick={() => activeTab = 'tech'} class="flex flex-col items-center gap-1 transition-colors {activeTab === 'tech' ? 'text-amber-600' : 'text-stone-400'}">
			<span class="text-2xl">📶</span>
			<span class="text-[10px] font-bold uppercase">Vault</span>
		</a>

		<a href="/sync" onclick={() => activeTab = 'sync'} class="flex flex-col items-center gap-1 transition-colors {activeTab === 'sync' ? 'text-amber-600' : 'text-stone-400'}">
			<span class="text-2xl">🔄</span>
			<span class="text-[10px] font-bold uppercase">Sync</span>
		</a>
		
	</nav>
</div>

<style>
	/* Global CSS Reset for Native Feel */
	:global(body) {
		/* Disables pull-to-refresh and bouncy scrolling on Android/iOS */
		overscroll-behavior-y: contain;
		/* Disables the gray highlight when tapping links on mobile */
		-webkit-tap-highlight-color: transparent;
		/* Ensures the app takes up the full screen including notches */
		padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
	}

	/* Prevent standard browser text selection to feel more like an app */
	:global(*) {
		-webkit-touch-callout: none;
	}
</style>