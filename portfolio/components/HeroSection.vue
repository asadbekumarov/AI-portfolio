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
    <section
        id="hero"
        class="relative min-h-screen flex items-center bg-grid overflow-hidden"
        aria-label="Introduction"
    >
        <!-- Background orb — top right (blue) -->
        <div
            class="pointer-events-none absolute"
            style="
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
            "
            aria-hidden="true"
        />

        <!-- Background orb — bottom left (teal) -->
        <div
            class="pointer-events-none absolute"
            style="
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
            "
            aria-hidden="true"
        />

        <!-- Content -->
        <div class="section-container relative z-10 pt-32 pb-24 w-full">
            <div class="max-w-4xl mx-auto text-center">
                <!-- Availability badge -->
                <div
                    class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-sm font-medium mb-10"
                    style="
                        border-color: rgba(4, 124, 88, 0.3);
                        background: rgba(4, 124, 88, 0.08);
                        color: rgba(226, 232, 240, 0.88);
                        animation: fadeUp 0.55s cubic-bezier(0.16, 1, 0.3, 1)
                            0.05s both;
                    "
                >
                    <span class="relative flex h-2 w-2" aria-hidden="true">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style="background-color: #047c58"
                        />
                        <span
                            class="relative inline-flex rounded-full h-2 w-2"
                            style="background-color: #047c58"
                        />
                    </span>
                    Available for Opportunities
                </div>

                <!-- Name -->
                <h1
                    class="font-black tracking-tight leading-none mb-5"
                    style="
                        font-size: clamp(3rem, 10vw, 5.5rem);
                        animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)
                            0.12s both;
                    "
                >
                    <span style="color: #e2e8f0">Asadbek</span>
                    <br />
                    <span class="gradient-text-animated">Umarov</span>
                </h1>

                <!-- Role -->
                <p
                    class="text-base sm:text-xl font-medium tracking-wide mb-5"
                    style="
                        color: rgba(226, 232, 240, 0.65);
                        animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)
                            0.2s both;
                    "
                >
                    Frontend Developer
                    <span style="color: #0284c7; margin: 0 0.4rem">·</span>
                    React Specialist
                    <span style="color: #0284c7; margin: 0 0.4rem">·</span>
                    TypeScript Enthusiast
                </p>

                <!-- Tagline -->
                <p
                    class="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
                    style="
                        color: rgba(226, 232, 240, 0.44);
                        animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)
                            0.28s both;
                    "
                >
                    Building fast, modern, and user-friendly web applications
                    that leave a lasting impression. Based in
                    <strong style="color: #e2e8f0; font-weight: 600"
                        >Tashkent, Uzbekistan</strong
                    >
                    — open to remote opportunities worldwide.
                </p>

                <!-- CTA Buttons -->
                <div
                    class="flex flex-wrap items-center justify-center gap-4 mb-16"
                    style="
                        animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)
                            0.36s both;
                    "
                >
                    <a
                        href="#projects"
                        class="btn-primary"
                        @click.prevent="scrollToSection('#projects')"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        View My Projects
                    </a>

                    <a
                        href="#contact"
                        class="btn-secondary"
                        @click.prevent="scrollToSection('#contact')"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <path
                                d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                            />
                        </svg>
                        Get in Touch
                    </a>
                </div>

                <!-- Tech stack pills -->
                <div
                    class="flex flex-wrap items-center justify-center gap-2.5"
                    style="
                        animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)
                            0.44s both;
                    "
                >
                    <span
                        class="text-xs font-semibold tracking-widest uppercase mr-1"
                        style="color: rgba(226, 232, 240, 0.22)"
                    >
                        Stack
                    </span>
                    <span
                        v-for="tech in techStack"
                        :key="tech"
                        class="tag-pill"
                    >
                        {{ tech }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Scroll-down indicator -->
        <div
            class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style="color: rgba(226, 232, 240, 0.22)"
            aria-hidden="true"
        >
            <span
                class="font-medium tracking-widest uppercase"
                style="font-size: 0.6rem; letter-spacing: 0.2em"
            >
                scroll
            </span>
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="animate-bounce"
            >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
            </svg>
        </div>
    </section>
</template>
