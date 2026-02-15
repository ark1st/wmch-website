<script lang="ts">
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import { Menu, Sun, BookOpen, Heart, ChevronRight, Youtube, MapPin, Phone, Mail } from 'lucide-svelte';
	
	let mobileMenuOpen = false;
</script>

<svelte:head>
	<title>세계선교교회 | 하나님 나라의 망대</title>
	<meta name="description" content="하나님 나라의 망대 - 세계선교교회. 오직 그리스도로 하나된 복음공동체." />
	<meta property="og:title" content="세계선교교회 | 하나님 나라의 망대" />
	<meta property="og:description" content="오직 그리스도로 하나된 복음공동체 - 세계선교교회" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="ko_KR" />
	<link rel="preconnect" href="https://www.youtube.com" />
	<link rel="preconnect" href="https://www.google.com" />
	<link rel="dns-prefetch" href="https://www.youtube.com" />
	<link rel="dns-prefetch" href="https://www.google.com" />
</svelte:head>

<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-black focus:text-white focus:px-4 focus:py-2">본문으로 바로가기</a>

<div class="min-h-screen bg-white text-slate-900">
	<!-- Navbar -->
	<nav class="fixed top-0 w-full z-50 bg-white/95 border-b border-slate-200">
		<div class="container mx-auto px-6 py-4 flex justify-between items-center">
			<div class="flex items-center space-x-3">
				<img 
					src={`${base}/wmch-logo.png`} 
					alt="세계선교교회 로고" 
					class="h-10 w-auto"
				/>
				<h1 class="text-lg font-semibold">세계선교교회</h1>
			</div>
			<button 
				type="button"
				class="p-2 hover:bg-slate-100 transition-colors"
				on:click={() => mobileMenuOpen = !mobileMenuOpen}
				aria-label="메뉴 열기"
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-navigation"
			>
				<Menu class="w-6 h-6" />
			</button>
		</div>
	</nav>

	<!-- Main Content -->
	<main id="main-content" class="pt-20 pb-16">
		<!-- Hero Section -->
		<section class="px-6 py-24 text-center border-b border-slate-100">
			<div class="max-w-3xl mx-auto space-y-10" in:fade={{ duration: 400 }}>
				<!-- Badge -->
				<div class="inline-flex items-center space-x-2 border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700">
					<span>2026</span>
				</div>

				<!-- Main Title -->
				<h1 class="text-5xl md:text-6xl font-bold leading-tight text-slate-900 tracking-tight">
					하나님 나라의 망대
				</h1>

				<!-- Scripture -->
				<div class="space-y-4">
					<p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
						"너희는 먼저 그의 나라와 그의 의를 구하라<br />
						그리하면 이 모든 것을 너희에게 더하시리라"
					</p>
					<p class="text-sm text-slate-500">마태복음 6:33-34</p>
				</div>

				<!-- Action Buttons -->
				<div id="mobile-navigation" class="sr-only" aria-hidden="true"></div>
				<div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
					<button class="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center">
						메시지 보기
						<ChevronRight class="w-4 h-4 ml-1" />
					</button>
					<button class="w-full sm:w-auto px-6 py-3 border border-slate-300 text-slate-900 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-center">
						<Youtube class="w-4 h-4 mr-2" />
						유튜브 채널
					</button>
				</div>
			</div>
		</section>

		<!-- Church Introduction Section -->
		<section class="px-6 py-20">
			<div class="max-w-4xl mx-auto">
				<!-- Section Header -->
				<div class="text-center mb-16 space-y-4">
					<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">교회 소개</p>
					<h2 class="text-4xl md:text-5xl font-bold text-slate-900">
						세계선교교회
					</h2>
					<p class="text-xl text-slate-600 font-medium">
						예수님이 원하시는 교회
					</p>
					<p class="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
						세계선교교회는 오직 그리스도로 하나된 복음공동체입니다.<br />
						복음 안에 바로 서서 한국교회와 세계를 섬기겠습니다.
					</p>
				</div>

				<!-- Church Logo Card -->
				<div class="border border-slate-200 mb-16">
					<div class="aspect-video bg-slate-50 flex items-center justify-center py-12 border-b border-slate-200">
						<img 
							src={`${base}/wmch-logo.png`} 
							alt="세계선교교회 로고" 
							class="max-h-64 w-auto"
						/>
					</div>
				</div>

				<!-- Church Vision Cards -->
				<div class="grid md:grid-cols-3 gap-6 mb-16">
					<!-- Mission -->
					<div class="border border-slate-200 p-8 hover:border-slate-300 transition-colors">
						<div class="text-3xl mb-4">🕊️</div>
						<h3 class="text-lg font-semibold mb-3 text-slate-900">사명</h3>
						<p class="text-slate-600 text-sm leading-relaxed">
							오직 그리스도로<br />
							하나된 복음공동체를<br />
							세워갑니다
						</p>
					</div>

					<!-- Vision -->
					<div class="border border-slate-200 p-8 hover:border-slate-300 transition-colors">
						<div class="text-3xl mb-4">🌍</div>
						<h3 class="text-lg font-semibold mb-3 text-slate-900">비전</h3>
						<p class="text-slate-600 text-sm leading-relaxed">
							237나라, 5천 종족<br />
							세계복음화를<br />
							이루어갑니다
						</p>
					</div>

					<!-- Value -->
					<div class="border border-slate-200 p-8 hover:border-slate-300 transition-colors">
						<div class="text-3xl mb-4">✝️</div>
						<h3 class="text-lg font-semibold mb-3 text-slate-900">핵심 가치</h3>
						<p class="text-slate-600 text-sm leading-relaxed">
							말씀 중심<br />
							기도 중심<br />
							전도·선교 중심
						</p>
					</div>
				</div>

				<!-- Church Info -->
				<div class="border border-slate-200 p-8">
					<h3 class="text-xl font-semibold mb-6 text-center text-slate-900">오시는 길</h3>
					<div class="grid md:grid-cols-3 gap-8">
						<div class="flex items-start space-x-3">
							<div class="w-10 h-10 border border-slate-300 flex items-center justify-center flex-shrink-0">
								<MapPin class="w-5 h-5 text-slate-600" />
							</div>
							<div>
								<h4 class="font-medium mb-1 text-slate-900">주소</h4>
								<p class="text-sm text-slate-600">경기도 안양시 동안구<br />관양1동 1443-9<br />우편번호: 431-807</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<div class="w-10 h-10 border border-slate-300 flex items-center justify-center flex-shrink-0">
								<Phone class="w-5 h-5 text-slate-600" />
							</div>
							<div>
								<h4 class="font-medium mb-1 text-slate-900">연락처</h4>
								<p class="text-sm text-slate-600">031-384-6494<br />031-384-2222<br />팩스: 031-388-0173</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<div class="w-10 h-10 border border-slate-300 flex items-center justify-center flex-shrink-0">
								<Mail class="w-5 h-5 text-slate-600" />
							</div>
							<div>
								<h4 class="font-medium mb-1 text-slate-900">교통</h4>
								<p class="text-sm text-slate-600">주차: 교회 내 주차장<br />대중교통: 지도 참조</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- YouTube Section (강단 말씀) -->
		<section class="px-6 py-20 bg-slate-50">
			<div class="max-w-4xl mx-auto">
				<!-- Section Header -->
				<div class="text-center mb-12 space-y-3">
					<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">강단 말씀</p>
					<h2 class="text-3xl md:text-4xl font-bold text-slate-900">
						최신 설교 영상
					</h2>
					<p class="text-lg text-slate-600">
						하나님의 말씀으로 은혜받으세요
					</p>
				</div>

				<!-- Video Container -->
				<div class="border border-slate-200 bg-white mb-8">
					<div class="aspect-video">
						<iframe 
							class="w-full h-full"
							src="https://www.youtube.com/embed?listType=user_uploads&list=wmch1979" 
							frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
							referrerpolicy="strict-origin-when-cross-origin" 
							sandbox="allow-scripts allow-same-origin allow-presentation" 
							allowfullscreen={true}
							loading="lazy"
							title="세계선교교회 설교 영상"
						></iframe>
					</div>
				</div>

				<!-- YouTube Button -->
				<div class="text-center">
					<a 
						href="https://youtube.com/@wmch1979" 
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
						</svg>
						<span>유튜브 채널 구독하기</span>
					</a>
				</div>
			</div>
		</section>

		<!-- Three Courts Section (세 가지 뜰) -->
		<section class="px-6 py-20">
			<div class="max-w-6xl mx-auto">
				<!-- Section Title -->
				<div class="text-center mb-16 space-y-3">
					<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">세 가지 뜰</p>
					<h2 class="text-3xl md:text-4xl font-bold text-slate-900">
						성전의 세 가지 뜰
					</h2>
					<p class="text-lg text-slate-600 max-w-2xl mx-auto">
						성전의 구조처럼 우리도 단계적으로 성장하며<br />
						하나님께 나아가는 여정을 걷습니다
					</p>
				</div>

				<!-- Cards Grid -->
				<div class="grid md:grid-cols-3 gap-8">
					<!-- Court 1 -->
					<div class="border border-slate-200 hover:border-slate-300 transition-colors">
						<div class="aspect-video bg-slate-50 flex items-center justify-center border-b border-slate-200">
							<div class="text-center">
								<div class="w-16 h-16 border border-slate-300 flex items-center justify-center mx-auto mb-3">
									<svg class="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
									</svg>
								</div>
								<p class="text-slate-500 text-xs font-medium">이방인의 뜰</p>
							</div>
						</div>
						<div class="p-6">
							<h3 class="text-lg font-semibold mb-2 text-slate-900">1. 이방인의 뜰</h3>
							<p class="text-slate-600 text-sm mb-3">모든 민족이 하나님을 예배하는 곳</p>
							<ul class="space-y-1.5 text-slate-600 text-sm">
								<li>• 복음의 문이 열린 곳</li>
								<li>• 모든 이를 환영하는 공간</li>
								<li>• 세계 선교의 시작점</li>
							</ul>
						</div>
					</div>

					<!-- Court 2 -->
					<div class="border border-slate-200 hover:border-slate-300 transition-colors">
						<div class="aspect-video bg-slate-50 flex items-center justify-center border-b border-slate-200">
							<div class="text-center">
								<div class="w-16 h-16 border border-slate-300 flex items-center justify-center mx-auto mb-3">
									<svg class="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
									</svg>
								</div>
								<p class="text-slate-500 text-xs font-medium">여인의 뜰</p>
							</div>
						</div>
						<div class="p-6">
							<h3 class="text-lg font-semibold mb-2 text-slate-900">2. 여인의 뜰</h3>
							<p class="text-slate-600 text-sm mb-3">가정과 다음 세대를 세우는 곳</p>
							<ul class="space-y-1.5 text-slate-600 text-sm">
								<li>• 가정을 회복하는 은혜</li>
								<li>• 후대를 양육하는 공동체</li>
								<li>• 사랑과 돌봄의 사역</li>
							</ul>
						</div>
					</div>

					<!-- Court 3 -->
					<div class="border border-slate-200 hover:border-slate-300 transition-colors">
						<div class="aspect-video bg-slate-50 flex items-center justify-center border-b border-slate-200">
							<div class="text-center">
								<div class="w-16 h-16 border border-slate-300 flex items-center justify-center mx-auto mb-3">
									<svg class="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
									</svg>
								</div>
								<p class="text-slate-500 text-xs font-medium">이스라엘의 뜰</p>
							</div>
						</div>
						<div class="p-6">
							<h3 class="text-lg font-semibold mb-2 text-slate-900">3. 이스라엘의 뜰</h3>
							<p class="text-slate-600 text-sm mb-3">언약을 붙잡고 증인으로 서는 곳</p>
							<ul class="space-y-1.5 text-slate-600 text-sm">
								<li>• 렘넌트로 세워지는 공동체</li>
								<li>• 현장에서 증인으로 살아감</li>
								<li>• 세계복음화의 주역</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Three Watchtowers Section -->
		<section class="px-6 py-20 bg-slate-50">
			<div class="max-w-6xl mx-auto">
				<!-- Section Title -->
				<div class="text-center mb-16 space-y-3">
					<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">세 가지 망대</p>
					<h2 class="text-3xl md:text-4xl font-bold text-slate-900">
						하나님 나라의 망대
					</h2>
					<p class="text-lg text-slate-600 max-w-2xl mx-auto">
						오늘, 구원의 길, 3뜰의 망대를 세워<br />
						하나님 나라를 바라보며 살아갑니다
					</p>
				</div>

				<!-- Watchtower 1 -->
				<div class="mb-12">
					<div class="bg-white border border-slate-200 p-8">
						<h3 class="text-2xl font-bold mb-3 text-center text-slate-900">
							1. '삼 오늘'의 망대
						</h3>
						<p class="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
							매일 하나님 나라의 절대 망대가 나의 망대 되는 증거
						</p>
						
						<div class="grid md:grid-cols-3 gap-6">
							<div class="flex flex-col items-center p-6 hover:bg-slate-50 transition-colors">
								<div class="w-16 h-16 border border-slate-300 flex items-center justify-center mb-4">
									<Sun class="w-8 h-8 text-slate-600" />
								</div>
								<h4 class="text-lg font-semibold mb-2 text-slate-900">오늘의 말씀</h4>
								<p class="text-slate-600 text-sm text-center">
									매일 하나님의 말씀으로<br />
									하루를 시작하며<br />
									언약을 붙잡습니다
								</p>
							</div>

							<div class="flex flex-col items-center p-6 hover:bg-slate-50 transition-colors">
								<div class="w-16 h-16 border border-slate-300 flex items-center justify-center mb-4">
									<BookOpen class="w-8 h-8 text-slate-600" />
								</div>
								<h4 class="text-lg font-semibold mb-2 text-slate-900">오늘의 기도</h4>
								<p class="text-slate-600 text-sm text-center">
									기도로 하나님과 교제하며<br />
									성령 충만과<br />
									응답을 경험합니다
								</p>
							</div>

							<div class="flex flex-col items-center p-6 hover:bg-slate-50 transition-colors">
								<div class="w-16 h-16 border border-slate-300 flex items-center justify-center mb-4">
									<Heart class="w-8 h-8 text-slate-600" />
								</div>
								<h4 class="text-lg font-semibold mb-2 text-slate-900">오늘의 전도</h4>
								<p class="text-slate-600 text-sm text-center">
									복음을 전하며<br />
									증인으로 살아가며<br />
									세계복음화를 이룹니다
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Watchtower 2 -->
				<div class="mb-12">
					<div class="bg-white border border-slate-200 p-8">
						<h3 class="text-2xl font-bold mb-3 text-center text-slate-900">
							2. '구원의 길' 망대
						</h3>
						<p class="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
							매일 구원의 길을 그리고 묵상하며 내 안에 망대를 세워야 합니다
						</p>

						<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
							<div class="border border-slate-200 p-4 hover:border-slate-300 transition-colors">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-6 h-6 border border-slate-300 flex items-center justify-center flex-shrink-0">
										<span class="text-slate-700 font-semibold text-xs">1</span>
									</div>
									<h4 class="font-semibold text-sm text-slate-900">창조의 원리</h4>
								</div>
								<p class="text-slate-600 text-xs">하나님의 형상대로 지음 받은 영적 존재</p>
							</div>

							<div class="border border-slate-200 p-4 hover:border-slate-300 transition-colors">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-6 h-6 border border-slate-300 flex items-center justify-center flex-shrink-0">
										<span class="text-slate-700 font-semibold text-xs">2</span>
									</div>
									<h4 class="font-semibold text-sm text-slate-900">근본 문제</h4>
								</div>
								<p class="text-slate-600 text-xs">하나님 떠남, 죄와 저주, 사탄의 종</p>
							</div>

							<div class="border border-slate-200 p-4 hover:border-slate-300 transition-colors">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-6 h-6 border border-slate-300 flex items-center justify-center flex-shrink-0">
										<span class="text-slate-700 font-semibold text-xs">3</span>
									</div>
									<h4 class="font-semibold text-sm text-slate-900">불신자 상태</h4>
								</div>
								<p class="text-slate-600 text-xs">영적, 우상, 정신, 육신, 내세, 후손 문제</p>
							</div>

							<div class="border border-slate-200 p-4 hover:border-slate-300 transition-colors">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-6 h-6 border border-slate-300 flex items-center justify-center flex-shrink-0">
										<span class="text-slate-700 font-semibold text-xs">4</span>
									</div>
									<h4 class="font-semibold text-sm text-slate-900">예수 그리스도</h4>
								</div>
								<p class="text-slate-600 text-xs">모든 문제 해결자, 십자가의 구원</p>
							</div>

							<div class="border border-slate-200 p-4 hover:border-slate-300 transition-colors">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-6 h-6 border border-slate-300 flex items-center justify-center flex-shrink-0">
										<span class="text-slate-700 font-semibold text-xs">5</span>
									</div>
									<h4 class="font-semibold text-sm text-slate-900">하나님 만나는 길</h4>
								</div>
								<p class="text-slate-600 text-xs">예수님을 영접하라 (지금, 당장)</p>
							</div>

							<div class="border border-slate-200 p-4 hover:border-slate-300 transition-colors">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-6 h-6 border border-slate-300 flex items-center justify-center flex-shrink-0">
										<span class="text-slate-700 font-semibold text-xs">6</span>
									</div>
									<h4 class="font-semibold text-sm text-slate-900">하나님 자녀 축복</h4>
								</div>
								<p class="text-slate-600 text-xs">신분, 성령, 천국, 천사, 권세, 사명</p>
							</div>

							<div class="border border-slate-200 p-4 hover:border-slate-300 transition-colors col-span-2">
								<div class="flex items-center space-x-2 mb-2">
									<div class="w-6 h-6 border border-slate-300 flex items-center justify-center flex-shrink-0">
										<span class="text-slate-700 font-semibold text-xs">7</span>
									</div>
									<h4 class="font-semibold text-sm text-slate-900">5가지 확신</h4>
								</div>
								<p class="text-slate-600 text-xs">구원, 인도, 승리, 기도응답, 사죄의 확신</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Watchtower 3 -->
				<div>
					<div class="bg-white border border-slate-200 p-8">
						<h3 class="text-2xl font-bold mb-3 text-center text-slate-900">
							3. '삼 뜰'의 망대
						</h3>
						<p class="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
							현장에서 응답과 증거를 가지고 증인으로 세워지며<br />
							하나님이 기념비 세우고 가는 삶
						</p>

						<div class="grid md:grid-cols-3 gap-6">
							<div class="border border-slate-200 p-6 hover:border-slate-300 transition-colors">
								<div class="flex items-center justify-center mb-4">
									<div class="w-12 h-12 border border-slate-300 flex items-center justify-center">
										<svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
								</div>
								<h4 class="text-lg font-semibold mb-2 text-center text-slate-900">이방인의 뜰</h4>
								<p class="text-slate-600 text-sm text-center mb-3">
									모든 민족에게 복음을 전하며<br />
									세계복음화를 이루는 곳
								</p>
								<ul class="space-y-1 text-slate-600 text-sm">
									<li>• 237나라, 5천 종족</li>
									<li>• 세계 선교의 문</li>
								</ul>
							</div>

							<div class="border border-slate-200 p-6 hover:border-slate-300 transition-colors">
								<div class="flex items-center justify-center mb-4">
									<div class="w-12 h-12 border border-slate-300 flex items-center justify-center">
										<svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
										</svg>
									</div>
								</div>
								<h4 class="text-lg font-semibold mb-2 text-center text-slate-900">여인의 뜰</h4>
								<p class="text-slate-600 text-sm text-center mb-3">
									가정을 회복하고<br />
									후대를 양육하는 곳
								</p>
								<ul class="space-y-1 text-slate-600 text-sm">
									<li>• 가정 회복의 은혜</li>
									<li>• 후대 언약 전달</li>
								</ul>
							</div>

							<div class="border border-slate-200 p-6 hover:border-slate-300 transition-colors">
								<div class="flex items-center justify-center mb-4">
									<div class="w-12 h-12 border border-slate-300 flex items-center justify-center">
										<svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
										</svg>
									</div>
								</div>
								<h4 class="text-lg font-semibold mb-2 text-center text-slate-900">이스라엘의 뜰</h4>
								<p class="text-slate-600 text-sm text-center mb-3">
									언약을 붙잡고<br />
									렘넌트로 세워지는 곳
								</p>
								<ul class="space-y-1 text-slate-600 text-sm">
									<li>• 렘넌트 양육</li>
									<li>• 증인의 삶</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section class="px-6 py-20">
			<div class="max-w-6xl mx-auto">
				<div class="text-center mb-12 space-y-3">
					<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">오시는 길</p>
					<h2 class="text-3xl md:text-4xl font-bold text-slate-900">
						세계선교교회에 오신 것을 환영합니다
					</h2>
				</div>

				<div class="grid md:grid-cols-2 gap-8">
					<!-- Map -->
					<div class="border border-slate-200 h-[400px]">
						<iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.123!2d126.9537!3d37.3894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6rK96riw64-EIOyViOyWkeyLnCDrj5nslYjqtawg6rSA7JaRMeuPmSAxNDQzLTk!5e0!3m2!1sko!2skr!4v1738332000000!5m2!1sko!2skr" 
							class="w-full h-full"
							style="border:0;" 
							referrerpolicy="no-referrer-when-downgrade" 
							sandbox="allow-scripts allow-same-origin allow-popups allow-forms" 
							allowfullscreen={true}
							loading="lazy"
							title="세계선교교회 위치"
						></iframe>
					</div>

					<!-- Contact Info Cards -->
					<div class="space-y-4">
						<div class="border border-slate-200 p-6 hover:border-slate-300 transition-colors">
							<div class="flex items-start gap-4">
								<div class="text-3xl">📍</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold mb-2 text-slate-900">주소</h3>
									<p class="text-slate-600 text-sm mb-1">경기도 안양시 동안구 관양1동 1443-9</p>
									<p class="text-slate-500 text-sm">우편번호: 431-807</p>
								</div>
							</div>
						</div>

						<div class="border border-slate-200 p-6 hover:border-slate-300 transition-colors">
							<div class="flex items-start gap-4">
								<div class="text-3xl">☎️</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold mb-2 text-slate-900">전화</h3>
									<p class="text-slate-600 text-sm mb-1">031-384-6494</p>
									<p class="text-slate-600 text-sm mb-1">031-384-2222</p>
									<p class="text-slate-500 text-sm">팩스: 031-388-0173</p>
								</div>
							</div>
						</div>

						<div class="border border-slate-200 p-6 hover:border-slate-300 transition-colors">
							<div class="flex items-start gap-4">
								<div class="text-3xl">🚗</div>
								<div class="flex-1">
									<h3 class="text-lg font-semibold mb-2 text-slate-900">교통</h3>
									<p class="text-slate-600 text-sm mb-1">주차: 교회 내 주차장 이용</p>
									<p class="text-slate-500 text-sm">대중교통: 지도 참조</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="border-t border-slate-200 py-12 px-6 text-center bg-slate-50">
		<div class="max-w-2xl mx-auto">
			<div class="flex items-center justify-center space-x-3 mb-4">
				<img 
					src={`${base}/wmch-logo.png`} 
					alt="세계선교교회 로고" 
					loading="lazy"
					decoding="async"
					class="h-10 w-auto"
				/>
				<span class="font-semibold text-slate-900">세계선교교회</span>
			</div>
			<p class="text-slate-600 text-sm mb-1">© 2026 World Mission Church</p>
			<p class="text-slate-500 text-xs">하나님 나라의 망대를 세우는 교회</p>
		</div>
	</footer>
</div>
