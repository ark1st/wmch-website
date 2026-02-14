<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { Menu, Sun, BookOpen, Heart, ChevronRight, Youtube, MapPin, Phone, Mail } from 'lucide-svelte';
	
	let mobileMenuOpen = false;
</script>

<svelte:head>
	<title>세계선교교회 | 하나님 나라의 망대</title>
	<meta name="description" content="하나님 나라의 망대 - 세계선교교회" />
	<link rel="preconnect" href="https://www.youtube.com" />
	<link rel="preconnect" href="https://www.google.com" />
	<link rel="dns-prefetch" href="https://www.youtube.com" />
	<link rel="dns-prefetch" href="https://www.google.com" />
</svelte:head>

<div class="min-h-screen bg-gradient-radial from-slate-950 to-slate-900 text-white overflow-x-hidden">
	<!-- Navbar -->
	<nav class="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/5">
		<div class="container mx-auto px-6 py-4 flex justify-between items-center">
			<div class="flex items-center space-x-3">
				<img 
					src="https://raw.githubusercontent.com/ark1st/wmch-website/refs/heads/main/static/wmch-logo.png" 
					alt="세계선교교회 로고" 
					class="h-10 w-auto"
				/>
				<h1 class="text-lg font-bold">세계선교교회</h1>
			</div>
			<button 
				class="p-2 hover:bg-white/10 rounded-lg transition-colors"
				on:click={() => mobileMenuOpen = !mobileMenuOpen}
				aria-label="메뉴 열기"
			>
				<Menu class="w-6 h-6" />
			</button>
		</div>
	</nav>

	<!-- Main Content -->
	<main class="pt-20 pb-16">
		<!-- Hero Section -->
		<section class="px-6 py-16 text-center">
			<div class="max-w-2xl mx-auto space-y-8" in:fade={{ duration: 600 }}>
				<!-- Badge -->
				<div class="inline-flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm border border-amber-500/30 px-4 py-2 rounded-full shadow-lg shadow-amber-500/10">
					<span class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
					<span class="text-sm font-semibold text-amber-200">2026</span>
				</div>

				<!-- Main Title with Gold Gradient -->
				<h1 
					class="text-5xl md:text-6xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 drop-shadow-2xl"
					in:fly={{ y: 30, duration: 800, delay: 200 }}
				>
					하나님 나라의 망대
				</h1>

				<!-- Scripture -->
				<div in:fly={{ y: 30, duration: 800, delay: 400 }}>
					<p class="text-lg md:text-xl italic text-slate-400 leading-relaxed">
						"너희는 먼저 그의 나라와<br class="md:hidden" />
						그의 의를 구하라<br />
						그리하면 이 모든 것을<br class="md:hidden" />
						너희에게 더하시리라"
					</p>
					<p class="text-slate-500 mt-3 text-sm">마태복음 6:33-34</p>
				</div>

				<!-- Action Buttons -->
				<div 
					class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
					in:fly={{ y: 30, duration: 800, delay: 600 }}
				>
					<!-- Primary Button: Gold Gradient -->
					<button 
						class="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black rounded-full font-bold text-lg shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 hover:scale-105 transition-all duration-300 flex items-center justify-center"
					>
						메시지 보기
						<ChevronRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
					</button>

					<!-- Secondary Button: Glassmorphism -->
					<button 
						class="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-amber-500/30 text-white rounded-full font-bold text-lg hover:bg-white/20 hover:border-amber-500/50 transition-all duration-300 flex items-center justify-center"
					>
						<Youtube class="w-5 h-5 mr-2" />
						유튜브 채널
					</button>
				</div>
			</div>
		</section>

		<!-- Church Introduction Section -->
		<section class="px-6 py-16">
			<div 
				class="max-w-4xl mx-auto"
				in:fly={{ y: 50, duration: 800, delay: 800 }}
			>
				<!-- Section Header -->
				<div class="text-center mb-12">
					<div class="inline-block bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 px-4 py-2 rounded-full mb-4">
						<span class="text-amber-300 font-semibold">교회 소개</span>
					</div>
					<h2 class="text-4xl md:text-5xl font-bold mb-6">
						<span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400">
							세계선교교회
						</span>
					</h2>
					<p class="text-slate-300 text-xl mb-4 font-semibold">
						예수님이 원하시는 교회
					</p>
					<p class="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
						세계선교교회는 오직 그리스도로 하나된 복음공동체입니다.<br />
						복음 안에 바로 서서 한국교회와 세계를 섬기겠습니다.
					</p>
				</div>

				<!-- Church Logo Card -->
				<div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-12">
					<!-- Church Logo Image -->
					<div class="aspect-video bg-gradient-to-br from-white/5 to-white/2 flex items-center justify-center border-b border-white/10 py-12">
						<img 
							src="https://raw.githubusercontent.com/ark1st/wmch-website/refs/heads/main/static/wmch-logo.png" 
							alt="세계선교교회 로고" 
							class="max-h-64 w-auto"
						/>
					</div>
				</div>

				<!-- Church Vision Cards -->
				<div class="grid md:grid-cols-3 gap-6 mb-12">
					<!-- Mission -->
					<div class="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-yellow-500/5 border border-amber-500/20 rounded-2xl p-6 hover:bg-amber-500/10 transition-all duration-300">
						<div class="text-4xl mb-4 text-center">🕊️</div>
						<h3 class="text-xl font-bold mb-3 text-center text-amber-300">사명</h3>
						<p class="text-slate-400 text-sm text-center leading-relaxed">
							오직 그리스도로<br />
							하나된 복음공동체를<br />
							세워갑니다
						</p>
					</div>

					<!-- Vision -->
					<div class="backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-2xl p-6 hover:bg-blue-500/10 transition-all duration-300">
						<div class="text-4xl mb-4 text-center">🌍</div>
						<h3 class="text-xl font-bold mb-3 text-center text-blue-300">비전</h3>
						<p class="text-slate-400 text-sm text-center leading-relaxed">
							237나라, 5천 종족<br />
							세계복음화를<br />
							이루어갑니다
						</p>
					</div>

					<!-- Value -->
					<div class="backdrop-blur-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-purple-500/10 transition-all duration-300">
						<div class="text-4xl mb-4 text-center">✝️</div>
						<h3 class="text-xl font-bold mb-3 text-center text-purple-300">핵심 가치</h3>
						<p class="text-slate-400 text-sm text-center leading-relaxed">
							말씀 중심<br />
							기도 중심<br />
							전도·선교 중심
						</p>
					</div>
				</div>

				<!-- Church Info -->
				<div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
					<h3 class="text-2xl font-bold mb-6 text-center text-amber-300">오시는 길</h3>
					<div class="grid md:grid-cols-3 gap-6">
						<div class="flex items-start space-x-3">
							<div class="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
								<MapPin class="w-5 h-5 text-amber-400" />
							</div>
							<div>
								<h4 class="font-semibold mb-1 text-slate-300">주소</h4>
								<p class="text-sm text-slate-400">경기도 안양시 동안구<br />관양1동 1443-9<br />우편번호: 431-807</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<div class="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
								<Phone class="w-5 h-5 text-amber-400" />
							</div>
							<div>
								<h4 class="font-semibold mb-1 text-slate-300">연락처</h4>
								<p class="text-sm text-slate-400">031-384-6494<br />031-384-2222<br />팩스: 031-388-0173</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<div class="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
								<Mail class="w-5 h-5 text-amber-400" />
							</div>
							<div>
								<h4 class="font-semibold mb-1 text-slate-300">교통</h4>
								<p class="text-sm text-slate-400">주차: 교회 내 주차장<br />대중교통: 지도 참조</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- YouTube Section (강단 말씀) -->
		<section class="px-6 py-16">
			<div 
				class="max-w-4xl mx-auto"
				in:fly={{ y: 50, duration: 800, delay: 900 }}
			>
				<!-- Section Header -->
				<div class="text-center mb-12">
					<div class="inline-block bg-gradient-to-r from-red-500/20 to-pink-600/20 border border-red-500/30 px-4 py-2 rounded-full mb-4">
						<span class="text-red-300 font-semibold">강단 말씀</span>
					</div>
					<h2 class="text-4xl font-bold mb-4">
						<span class="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-pink-300">
							최신 설교 영상
						</span>
					</h2>
					<p class="text-slate-400 text-lg max-w-2xl mx-auto">
						하나님의 말씀으로 은혜받으세요
					</p>
				</div>

				<!-- Video Container -->
				<div class="group relative">
					<!-- Glow Effect -->
					<div class="absolute -inset-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
					
					<!-- Video -->
					<div class="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-slate-900/50 border border-white/10">
						<div class="aspect-video">
							<iframe 
								class="w-full h-full"
								src="https://www.youtube.com/embed?listType=user_uploads&list=wmch1979" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen={true}
								loading="lazy"
								title="세계선교교회 설교 영상"
							></iframe>
						</div>
					</div>
				</div>

				<!-- YouTube Button -->
				<div class="text-center mt-8">
					<a 
						href="https://youtube.com/@wmch1979" 
						target="_blank"
						rel="noopener noreferrer"
						class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
					>
						<!-- Shimmer Effect -->
						<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
						
						<svg class="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
						</svg>
						<span class="relative z-10">유튜브 채널 구독하기</span>
					</a>
				</div>
			</div>
		</section>

		<!-- Three Courts Section (세 가지 뜰) -->
		<section class="px-6 py-16 bg-slate-950/50">
			<div class="max-w-6xl mx-auto">
				<!-- Section Title -->
				<div class="text-center mb-16">
					<div class="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/30 px-4 py-2 rounded-full mb-4">
						<span class="text-blue-300 font-semibold">세 가지 뜰</span>
					</div>
					<h2 class="text-4xl font-bold mb-4">
						<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
							성전의 세 가지 뜰
						</span>
					</h2>
					<p class="text-slate-400 text-lg max-w-2xl mx-auto">
						성전의 구조처럼 우리도 단계적으로 성장하며<br />
						하나님께 나아가는 여정을 걷습니다
					</p>
				</div>

				<!-- Cards Grid -->
				<div class="grid md:grid-cols-3 gap-8">
					<!-- Court 1: 이방인의 뜰 -->
					<div 
						class="group backdrop-blur-xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105"
						in:fly={{ y: 50, duration: 800, delay: 1000 }}
					>
						<!-- Image Area -->
						<div class="aspect-video bg-gradient-to-br from-emerald-500/10 to-teal-600/5 flex items-center justify-center border-b border-emerald-500/20">
							<div class="text-center">
								<div class="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border-2 border-emerald-500/30 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
									<svg class="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
									</svg>
								</div>
								<p class="text-emerald-400/60 text-sm font-semibold">이방인의 뜰</p>
							</div>
						</div>

						<!-- Content -->
						<div class="p-8">
							<h3 class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-300">
								1. 이방인의 뜰
							</h3>
							<p class="text-slate-300 leading-relaxed mb-4">
								모든 민족이 하나님을 예배하는 곳
							</p>
							<ul class="space-y-2 text-slate-400 text-sm">
								<li class="flex items-start">
									<span class="text-emerald-400 mr-2">•</span>
									<span>복음의 문이 열린 곳</span>
								</li>
								<li class="flex items-start">
									<span class="text-emerald-400 mr-2">•</span>
									<span>모든 이를 환영하는 공간</span>
								</li>
								<li class="flex items-start">
									<span class="text-emerald-400 mr-2">•</span>
									<span>세계 선교의 시작점</span>
								</li>
							</ul>
						</div>
					</div>

					<!-- Court 2: 여인의 뜰 -->
					<div 
						class="group backdrop-blur-xl bg-gradient-to-br from-pink-500/5 to-rose-500/5 border border-pink-500/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105"
						in:fly={{ y: 50, duration: 800, delay: 1200 }}
					>
						<!-- Image Area -->
						<div class="aspect-video bg-gradient-to-br from-pink-500/10 to-rose-600/5 flex items-center justify-center border-b border-pink-500/20">
							<div class="text-center">
								<div class="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-rose-600/20 border-2 border-pink-500/30 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
									<svg class="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
									</svg>
								</div>
								<p class="text-pink-400/60 text-sm font-semibold">여인의 뜰</p>
							</div>
						</div>

						<!-- Content -->
						<div class="p-8">
							<h3 class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-rose-300">
								2. 여인의 뜰
							</h3>
							<p class="text-slate-300 leading-relaxed mb-4">
								가정과 다음 세대를 세우는 곳
							</p>
							<ul class="space-y-2 text-slate-400 text-sm">
								<li class="flex items-start">
									<span class="text-pink-400 mr-2">•</span>
									<span>가정을 회복하는 은혜</span>
								</li>
								<li class="flex items-start">
									<span class="text-pink-400 mr-2">•</span>
									<span>후대를 양육하는 공동체</span>
								</li>
								<li class="flex items-start">
									<span class="text-pink-400 mr-2">•</span>
									<span>사랑과 돌봄의 사역</span>
								</li>
							</ul>
						</div>
					</div>

					<!-- Court 3: 이스라엘의 뜰 -->
					<div 
						class="group backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-blue-500/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105"
						in:fly={{ y: 50, duration: 800, delay: 1400 }}
					>
						<!-- Image Area -->
						<div class="aspect-video bg-gradient-to-br from-blue-500/10 to-indigo-600/5 flex items-center justify-center border-b border-blue-500/20">
							<div class="text-center">
								<div class="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border-2 border-blue-500/30 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
									<svg class="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
									</svg>
								</div>
								<p class="text-blue-400/60 text-sm font-semibold">이스라엘의 뜰</p>
							</div>
						</div>

						<!-- Content -->
						<div class="p-8">
							<h3 class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">
								3. 이스라엘의 뜰
							</h3>
							<p class="text-slate-300 leading-relaxed mb-4">
								언약을 붙잡고 증인으로 서는 곳
							</p>
							<ul class="space-y-2 text-slate-400 text-sm">
								<li class="flex items-start">
									<span class="text-blue-400 mr-2">•</span>
									<span>렘넌트로 세워지는 공동체</span>
								</li>
								<li class="flex items-start">
									<span class="text-blue-400 mr-2">•</span>
									<span>현장에서 증인으로 살아감</span>
								</li>
								<li class="flex items-start">
									<span class="text-blue-400 mr-2">•</span>
									<span>세계복음화의 주역</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Three Watchtowers Section (세 가지 망대) -->
		<section class="px-6 py-16">
			<div class="max-w-6xl mx-auto">
				<!-- Section Title -->
				<div class="text-center mb-16">
					<div class="inline-block bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 px-4 py-2 rounded-full mb-4">
						<span class="text-amber-300 font-semibold">세 가지 망대</span>
					</div>
					<h2 class="text-4xl font-bold mb-4">
						<span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400">
							하나님 나라의 망대
						</span>
					</h2>
					<p class="text-slate-400 text-lg max-w-2xl mx-auto">
						오늘, 구원의 길, 3뜰의 망대를 세워<br />
						하나님 나라를 바라보며 살아갑니다
					</p>
				</div>

				<!-- Watchtower 1: 삼 오늘의 망대 -->
				<div 
					class="mb-12"
					in:fly={{ y: 50, duration: 800, delay: 1600 }}
				>
					<div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
						<h3 class="text-3xl font-bold mb-4 text-center">
							<span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-400">
								1. '삼 오늘'의 망대
							</span>
						</h3>
						<p class="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
							매일 하나님 나라의 절대 망대가 나의 망대 되는 증거
						</p>
						
						<div class="grid md:grid-cols-3 gap-6">
							<!-- Today's Word -->
							<div 
								class="flex flex-col items-center p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer group"
							>
								<div class="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-2 border-amber-500/30 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<Sun class="w-10 h-10 text-amber-400" />
								</div>
								<h4 class="text-xl font-bold mb-2">오늘의 말씀</h4>
								<p class="text-slate-400 text-sm text-center">
									매일 하나님의 말씀으로<br />
									하루를 시작하며<br />
									언약을 붙잡습니다
								</p>
							</div>

							<!-- Today's Prayer -->
							<div 
								class="flex flex-col items-center p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer group"
							>
								<div class="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-2 border-amber-500/30 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<BookOpen class="w-10 h-10 text-amber-400" />
								</div>
								<h4 class="text-xl font-bold mb-2">오늘의 기도</h4>
								<p class="text-slate-400 text-sm text-center">
									기도로 하나님과 교제하며<br />
									성령 충만과<br />
									응답을 경험합니다
								</p>
							</div>

							<!-- Today's Evangelism -->
							<div 
								class="flex flex-col items-center p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer group"
							>
								<div class="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-2 border-amber-500/30 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<Heart class="w-10 h-10 text-amber-400" />
								</div>
								<h4 class="text-xl font-bold mb-2">오늘의 전도</h4>
								<p class="text-slate-400 text-sm text-center">
									복음을 전하며<br />
									증인으로 살아가며<br />
									세계복음화를 이룹니다
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Watchtower 2: 구원의 길 망대 -->
				<div 
					class="mb-12"
					in:fly={{ y: 50, duration: 800, delay: 1800 }}
				>
					<div class="backdrop-blur-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500">
						<h3 class="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
							2. '구원의 길' 망대
						</h3>
						<p class="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
							매일 구원의 길을 그리고 묵상하며 내 안에 망대를 세워야 합니다
						</p>

						<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
							<!-- Step 1: 창조의 원리 -->
							<div class="backdrop-blur-sm bg-purple-500/5 border border-purple-500/20 rounded-2xl p-4 hover:bg-purple-500/10 transition-all">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
										<span class="text-purple-300 font-bold text-sm">1</span>
									</div>
									<h4 class="font-bold text-purple-300">창조의 원리</h4>
								</div>
								<p class="text-slate-400 text-sm">하나님의 형상대로 지음 받은 영적 존재</p>
							</div>

							<!-- Step 2: 근본 문제 -->
							<div class="backdrop-blur-sm bg-purple-500/5 border border-purple-500/20 rounded-2xl p-4 hover:bg-purple-500/10 transition-all">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
										<span class="text-purple-300 font-bold text-sm">2</span>
									</div>
									<h4 class="font-bold text-purple-300">근본 문제</h4>
								</div>
								<p class="text-slate-400 text-sm">하나님 떠남, 죄와 저주, 사탄의 종</p>
							</div>

							<!-- Step 3: 불신자 상태 -->
							<div class="backdrop-blur-sm bg-purple-500/5 border border-purple-500/20 rounded-2xl p-4 hover:bg-purple-500/10 transition-all">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
										<span class="text-purple-300 font-bold text-sm">3</span>
									</div>
									<h4 class="font-bold text-purple-300">불신자 상태</h4>
								</div>
								<p class="text-slate-400 text-sm">영적, 우상, 정신, 육신, 내세, 후손 문제</p>
							</div>

							<!-- Step 4: 예수는 그리스도 -->
							<div class="backdrop-blur-sm bg-pink-500/5 border border-pink-500/20 rounded-2xl p-4 hover:bg-pink-500/10 transition-all">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
										<span class="text-pink-300 font-bold text-sm">4</span>
									</div>
									<h4 class="font-bold text-pink-300">예수 그리스도</h4>
								</div>
								<p class="text-slate-400 text-sm">모든 문제 해결자, 십자가의 구원</p>
							</div>

							<!-- Step 5: 하나님 만나는 길 -->
							<div class="backdrop-blur-sm bg-pink-500/5 border border-pink-500/20 rounded-2xl p-4 hover:bg-pink-500/10 transition-all">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
										<span class="text-pink-300 font-bold text-sm">5</span>
									</div>
									<h4 class="font-bold text-pink-300">하나님 만나는 길</h4>
								</div>
								<p class="text-slate-400 text-sm">예수님을 영접하라 (지금, 당장)</p>
							</div>

							<!-- Step 6: 하나님 자녀 축복 -->
							<div class="backdrop-blur-sm bg-pink-500/5 border border-pink-500/20 rounded-2xl p-4 hover:bg-pink-500/10 transition-all">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
										<span class="text-pink-300 font-bold text-sm">6</span>
									</div>
									<h4 class="font-bold text-pink-300">하나님 자녀 축복</h4>
								</div>
								<p class="text-slate-400 text-sm">신분, 성령, 천국, 천사, 권세, 사명</p>
							</div>

							<!-- Step 7: 5가지 확신 -->
							<div class="backdrop-blur-sm bg-pink-500/5 border border-pink-500/20 rounded-2xl p-4 hover:bg-pink-500/10 transition-all col-span-2">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
										<span class="text-pink-300 font-bold text-sm">7</span>
									</div>
									<h4 class="font-bold text-pink-300">5가지 확신</h4>
								</div>
								<p class="text-slate-400 text-sm">구원, 인도, 승리, 기도응답, 사죄의 확신</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Watchtower 3: 삼 뜰의 망대 -->
				<div 
					in:fly={{ y: 50, duration: 800, delay: 2000 }}
				>
					<div class="backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-500">
						<h3 class="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
							3. '삼 뜰'의 망대
						</h3>
						<p class="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
							현장에서 응답과 증거를 가지고 증인으로 세워지며<br />
							하나님이 기념비 세우고 가는 삶
						</p>

						<div class="grid md:grid-cols-3 gap-6">
							<!-- 이방인의 뜰 -->
							<div class="backdrop-blur-sm bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 hover:bg-emerald-500/10 transition-all">
								<div class="flex items-center justify-center mb-4">
									<div class="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border-2 border-emerald-500/30 rounded-2xl flex items-center justify-center">
										<svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
								</div>
								<h4 class="text-xl font-bold mb-3 text-center text-emerald-300">이방인의 뜰</h4>
								<p class="text-slate-400 text-sm text-center mb-4">
									모든 민족에게 복음을 전하며<br />
									세계복음화를 이루는 곳
								</p>
								<ul class="space-y-2 text-slate-400 text-sm">
									<li class="flex items-start">
										<span class="text-emerald-400 mr-2">•</span>
										<span>237나라, 5천 종족</span>
									</li>
									<li class="flex items-start">
										<span class="text-emerald-400 mr-2">•</span>
										<span>세계 선교의 문</span>
									</li>
								</ul>
							</div>

							<!-- 여인의 뜰 -->
							<div class="backdrop-blur-sm bg-pink-500/5 border border-pink-500/20 rounded-2xl p-6 hover:bg-pink-500/10 transition-all">
								<div class="flex items-center justify-center mb-4">
									<div class="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-rose-600/20 border-2 border-pink-500/30 rounded-2xl flex items-center justify-center">
										<svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
										</svg>
									</div>
								</div>
								<h4 class="text-xl font-bold mb-3 text-center text-pink-300">여인의 뜰</h4>
								<p class="text-slate-400 text-sm text-center mb-4">
									가정을 회복하고<br />
									후대를 양육하는 곳
								</p>
								<ul class="space-y-2 text-slate-400 text-sm">
									<li class="flex items-start">
										<span class="text-pink-400 mr-2">•</span>
										<span>가정 회복의 은혜</span>
									</li>
									<li class="flex items-start">
										<span class="text-pink-400 mr-2">•</span>
										<span>후대 언약 전달</span>
									</li>
								</ul>
							</div>

							<!-- 이스라엘의 뜰 -->
							<div class="backdrop-blur-sm bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 hover:bg-blue-500/10 transition-all">
								<div class="flex items-center justify-center mb-4">
									<div class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border-2 border-blue-500/30 rounded-2xl flex items-center justify-center">
										<svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
										</svg>
									</div>
								</div>
								<h4 class="text-xl font-bold mb-3 text-center text-blue-300">이스라엘의 뜰</h4>
								<p class="text-slate-400 text-sm text-center mb-4">
									언약을 붙잡고<br />
									렘넌트로 세워지는 곳
								</p>
								<ul class="space-y-2 text-slate-400 text-sm">
									<li class="flex items-start">
										<span class="text-blue-400 mr-2">•</span>
										<span>렘넌트 양육</span>
									</li>
									<li class="flex items-start">
										<span class="text-blue-400 mr-2">•</span>
										<span>증인의 삶</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>

	<!-- Contact Section (오시는 길) -->
	<section class="px-6 py-16 bg-slate-950/50">
		<div class="max-w-6xl mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<div class="inline-block bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 px-4 py-2 rounded-full mb-4">
					<span class="text-amber-300 font-semibold">오시는 길</span>
				</div>
				<h2 class="text-4xl font-bold">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400">
						세계선교교회에 오신 것을 환영합니다
					</span>
				</h2>
			</div>

			<div class="grid md:grid-cols-2 gap-8">
				<!-- Map -->
				<div class="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-slate-900/50 border border-white/10 h-[400px]">
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.123!2d126.9537!3d37.3894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6rK96riw64-EIOyViOyWkeyLnCDrj5nslYjqtawg6rSA7JaRMeuPmSAxNDQzLTk!5e0!3m2!1sko!2skr!4v1738332000000!5m2!1sko!2skr" 
						class="w-full h-full"
						style="border:0;" 
						allowfullscreen={true}
						loading="lazy"
						title="세계선교교회 위치"
					></iframe>
				</div>

				<!-- Contact Info Cards -->
				<div class="space-y-4">
					<!-- Address Card -->
					<div class="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
						<div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
						<div class="relative flex items-start gap-4">
							<div class="text-4xl group-hover:scale-110 transition-transform duration-300">📍</div>
							<div class="flex-1">
								<h3 class="text-xl font-bold mb-2 text-amber-300">주소</h3>
								<p class="text-slate-300 text-sm mb-1">경기도 안양시 동안구 관양1동 1443-9</p>
								<p class="text-slate-400 text-sm">우편번호: 431-807</p>
							</div>
						</div>
					</div>

					<!-- Phone Card -->
					<div class="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
						<div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
						<div class="relative flex items-start gap-4">
							<div class="text-4xl group-hover:scale-110 transition-transform duration-300">☎️</div>
							<div class="flex-1">
								<h3 class="text-xl font-bold mb-2 text-blue-300">전화</h3>
								<p class="text-slate-300 text-sm mb-1">031-384-6494</p>
								<p class="text-slate-300 text-sm mb-1">031-384-2222</p>
								<p class="text-slate-400 text-sm">팩스: 031-388-0173</p>
							</div>
						</div>
					</div>

					<!-- Transport Card -->
					<div class="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
						<div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
						<div class="relative flex items-start gap-4">
							<div class="text-4xl group-hover:scale-110 transition-transform duration-300">🚗</div>
							<div class="flex-1">
								<h3 class="text-xl font-bold mb-2 text-green-300">교통</h3>
								<p class="text-slate-300 text-sm mb-1">주차: 교회 내 주차장 이용</p>
								<p class="text-slate-400 text-sm">대중교통: 지도 참조</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-white/5 py-8 px-6 text-center">
		<div class="max-w-2xl mx-auto">
			<div class="flex items-center justify-center space-x-3 mb-4">
				<img 
					src="https://raw.githubusercontent.com/ark1st/wmch-website/refs/heads/main/static/wmch-logo.png" 
					alt="세계선교교회 로고" 
					loading="lazy"
					decoding="async"
					class="h-10 w-auto"
				/>
				<span class="font-bold">세계선교교회</span>
			</div>
			<p class="text-slate-400 text-sm mb-2">© 2026 World Mission Church</p>
			<p class="text-slate-500 text-xs">하나님 나라의 망대를 세우는 교회</p>
		</div>
	</footer>
</div>

<style>
	/* Radial gradient background */
	.bg-gradient-radial {
		background: radial-gradient(circle at top center, #0f172a 0%, #020617 100%);
	}

	/* Custom animations */
	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	/* Smooth transitions */
	* {
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Custom scrollbar */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #0f172a;
	}

	::-webkit-scrollbar-thumb {
		background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%);
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: linear-gradient(180deg, #fbbf24 0%, #f59e0b 100%);
	}
</style>
