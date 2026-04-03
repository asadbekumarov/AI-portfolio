<script setup lang="ts">
const techStack = [
    "React.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "React Native",
];

const scrollToSection = (hash: string): void => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
    <section id="hero" class="relative min-h-screen flex items-center bg-grid overflow-hidden"
        aria-label="Introduction">
        <!-- Background orb — top right (blue) -->
        <div class="pointer-events-none absolute orb-blue" aria-hidden="true" />

        <!-- Background orb — bottom left (teal) -->
        <div class="pointer-events-none absolute orb-teal" aria-hidden="true" />

        <!-- Content -->
        <div class="section-container relative z-10 pt-32 pb-24 w-full">
            <div class="max-w-4xl mx-auto text-center">

                <!-- Name -->
                <h1 class="font-black tracking-tight leading-none mb-5 hero-title scroll-animate">
                    <span class="text-slate-200">{{ $t('hero.name') }}</span>
                    <br />
                    <span class="gradient-text-animated">{{ $t('hero.surname') }}</span>
                </h1>

                <!-- Tagline -->
                <p class="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12 text-slate-400/45 hero-tagline scroll-animate">
                    {{ $t('hero.tagline') }}
                    <strong class="text-slate-200 font-semibold">{{ $t('hero.location') }}</strong>
                    — {{ $t('hero.open_to_work') }}
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-wrap items-center justify-center gap-4 mb-16 hero-ctas scroll-animate">
                    <a href="#projects" class="btn-primary" @click.prevent="scrollToSection('#projects')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        {{ $t('hero.cta_view') }}
                    </a>

                    <a href="#contact" class="btn-secondary" @click.prevent="scrollToSection('#contact')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                        </svg>
                        {{ $t('hero.cta_contact') }}
                    </a>
                </div>

            </div>
        </div>

    </section>
</template>

<style scoped>
.orb-blue {
    top: -220px;
    right: -120px;
    width: 750px;
    height: 750px;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        rgba(2, 132, 199, 0.13) 0%,
        transparent 68%
    );
    filter: blur(55px);
}
.orb-teal {
    bottom: -150px;
    left: -180px;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        rgba(4, 124, 88, 0.09) 0%,
        transparent 68%
    );
    filter: blur(65px);
}
.hero-title {
    font-size: clamp(3rem, 10vw, 5.5rem);
    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
}
.hero-tagline {
    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
}
.hero-ctas {
    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.36s both;
}
</style>
