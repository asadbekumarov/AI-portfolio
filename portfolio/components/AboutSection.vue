<script setup lang="ts">
interface StatItem {
    value: string;
    label: string;
}

interface InfoItem {
    emoji: string;
    label: string;
    value: string;
}

const stats: StatItem[] = [
    { value: "4+", label: "Projects Shipped" },
    { value: "1+", label: "Year of Experience" },
    { value: "100%", label: "Remote Ready" },
];

const quickInfo: InfoItem[] = [
    { emoji: "📍", label: "Location", value: "Tashkent, Uzbekistan" },
    { emoji: "💼", label: "Status", value: "Open to Work" },
    { emoji: "🌐", label: "Availability", value: "Remote & On-site" },
    { emoji: "⚡", label: "Focus", value: "Frontend Development" },
];
</script>

<template>
    <section
        id="about"
        class="section-padding relative"
        aria-labelledby="about-heading"
    >
        <!-- Top divider -->
        <div class="section-divider" aria-hidden="true" />

        <!-- Widened container — max-w-7xl breaks out of the narrow section-container -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Two-column grid, activates at md, generous gap that grows at xl -->
            <div
                class="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start"
            >
                <!-- ══════════════════════════════════════
                     LEFT — Text Content
                ══════════════════════════════════════ -->
                <div class="w-full max-w-xl">
                    <span class="section-label mb-3 scroll-animate">
                        About Me
                    </span>

                    <h2
                        id="about-heading"
                        class="section-title mt-2 mb-8 scroll-animate delay-100"
                    >
                        Passionate about building
                        <span class="gradient-text"> great experiences</span>
                    </h2>

                    <!-- Bio paragraphs -->
                    <div
                        class="space-y-5 leading-relaxed text-[0.9375rem] scroll-animate delay-200"
                        style="color: rgba(226, 232, 240, 0.62)"
                    >
                        <p>
                            I'm
                            <strong style="color: #e2e8f0; font-weight: 600">
                                Asadbek Umarov </strong
                            >, a Junior Frontend Developer from Tashkent,
                            Uzbekistan, with a deep passion for crafting clean,
                            performant, and visually polished web applications.
                        </p>
                        <p>
                            My journey began at
                            <strong style="color: #e2e8f0; font-weight: 600">
                                Najot Ta'lim </strong
                            >, where I built a strong foundation in modern
                            frontend technologies. Since then I've applied that
                            knowledge across real-world projects — from
                            <strong style="color: #e2e8f0; font-weight: 600">
                                e-commerce platforms
                            </strong>
                            and
                            <strong style="color: #e2e8f0; font-weight: 600">
                                e-sports systems
                            </strong>
                            to
                            <strong style="color: #e2e8f0; font-weight: 600">
                                Telegram mini-apps
                            </strong>
                            and
                            <strong style="color: #e2e8f0; font-weight: 600">
                                mobile vocabulary tools </strong
                            >.
                        </p>
                        <p>
                            I'm currently freelancing at
                            <strong style="color: #e2e8f0; font-weight: 600">
                                Soft Turtkul </strong
                            >, building production-grade interfaces with
                            React.js, TypeScript, and Tailwind CSS. I'm actively
                            seeking junior roles or internship opportunities
                            where I can contribute, grow, and make a real
                            impact.
                        </p>
                    </div>

                    <!-- Quick Info Grid — single col on mobile, 2-col from sm -->
                    <div
                        class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 scroll-animate delay-300"
                        aria-label="Quick information"
                    >
                        <div
                            v-for="item in quickInfo"
                            :key="item.label"
                            class="glass-card flex items-center gap-4 p-4"
                        >
                            <span
                                class="text-2xl flex-shrink-0 leading-none"
                                aria-hidden="true"
                            >
                                {{ item.emoji }}
                            </span>
                            <div class="min-w-0">
                                <p
                                    class="text-xs font-medium mb-0.5"
                                    style="color: rgba(226, 232, 240, 0.44)"
                                >
                                    {{ item.label }}
                                </p>
                                <p
                                    class="text-sm font-semibold truncate"
                                    style="color: #e2e8f0"
                                >
                                    {{ item.value }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- CTAs -->
                    <div
                        class="flex flex-wrap sm:flex-nowrap gap-3 mt-10 scroll-animate delay-400"
                    >
                        <a
                            href="mailto:asadbekumarov922@gmail.com"
                            class="btn-primary flex-1 sm:flex-none justify-center"
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/asadbek-umarov-ab9385376"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-secondary flex-1 sm:flex-none justify-center"
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <path
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>

                <!-- ══════════════════════════════════════
                     RIGHT — Visual Card Column
                ══════════════════════════════════════ -->
                <div
                    class="w-full max-w-md mx-auto lg:mx-0 space-y-5 scroll-animate delay-150"
                >
                    <!-- Identity / Avatar Card -->
                    <div
                        class="glass-card relative overflow-hidden p-10 text-center"
                        style="border-color: rgba(2, 132, 199, 0.2)"
                    >
                        <!-- Glow backdrop -->
                        <div
                            class="absolute inset-0 pointer-events-none"
                            style="
                                background: radial-gradient(
                                    ellipse 80% 50% at 50% -10%,
                                    rgba(2, 132, 199, 0.16) 0%,
                                    transparent 70%
                                );
                            "
                            aria-hidden="true"
                        />

                        <div class="relative z-10">
                            <!-- Avatar initials -->
                            <div
                                class="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center text-2xl font-black mb-5"
                                style="
                                    color: #e2e8f0;
                                    background: linear-gradient(
                                        135deg,
                                        #0284c7 0%,
                                        #047c58 100%
                                    );
                                    box-shadow: 0 8px 32px
                                        rgba(2, 132, 199, 0.35);
                                "
                                aria-hidden="true"
                            >
                                AU
                            </div>

                            <h3
                                class="text-xl font-bold"
                                style="color: #e2e8f0"
                            >
                                Asadbek Umarov
                            </h3>
                            <p
                                class="text-sm mt-1.5"
                                style="color: rgba(226, 232, 240, 0.55)"
                            >
                                Junior Frontend Developer
                            </p>

                            <!-- Availability badge -->
                            <div
                                class="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full"
                                style="
                                    background: rgba(4, 124, 88, 0.1);
                                    border: 1px solid rgba(4, 124, 88, 0.28);
                                "
                            >
                                <span
                                    class="relative flex h-2 w-2"
                                    aria-hidden="true"
                                >
                                    <span
                                        class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                        style="background: #047c58"
                                    />
                                    <span
                                        class="relative inline-flex rounded-full h-2 w-2"
                                        style="background: #047c58"
                                    />
                                </span>
                                <span
                                    class="text-xs font-semibold"
                                    style="color: rgba(226, 232, 240, 0.88)"
                                >
                                    Available for Work
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Stats Row — three equal columns -->
                    <div
                        class="grid grid-cols-3 gap-3"
                        aria-label="Professional stats"
                    >
                        <div
                            v-for="stat in stats"
                            :key="stat.label"
                            class="glass-card p-5 text-center"
                        >
                            <p class="text-2xl font-black gradient-text">
                                {{ stat.value }}
                            </p>
                            <p
                                class="text-xs font-medium mt-1.5 leading-tight"
                                style="color: rgba(226, 232, 240, 0.44)"
                            >
                                {{ stat.label }}
                            </p>
                        </div>
                    </div>

                    <!-- LinkedIn Card Link -->
                    <a
                        href="https://www.linkedin.com/in/asadbek-umarov-ab9385376"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="glass-card flex items-center gap-4 p-5 group"
                        aria-label="View Asadbek's LinkedIn profile"
                    >
                        <!-- LinkedIn icon box — blue -->
                        <div
                            class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                            style="
                                background: rgba(2, 132, 199, 0.12);
                                border: 1px solid rgba(2, 132, 199, 0.26);
                            "
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0284c7"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <path
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </div>

                        <div class="flex-1 min-w-0">
                            <p
                                class="text-sm font-semibold transition-colors duration-200"
                                style="color: #e2e8f0"
                                onmouseover="this.style.color = '#0284c7'"
                                onmouseout="this.style.color = '#e2e8f0'"
                            >
                                LinkedIn Profile
                            </p>
                            <p
                                class="text-xs truncate mt-0.5"
                                style="color: rgba(226, 232, 240, 0.44)"
                            >
                                asadbek-umarov-ab9385376
                            </p>
                        </div>

                        <svg
                            class="flex-shrink-0 transition-colors duration-200"
                            style="color: rgba(226, 232, 240, 0.25)"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            aria-hidden="true"
                        >
                            <path
                                d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                            />
                        </svg>
                    </a>

                    <!-- Portfolio Link -->
                    <a
                        href="https://portfolio-umarov-asadbek.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="glass-card flex items-center gap-4 p-5 group"
                        aria-label="View Asadbek's existing portfolio"
                    >
                        <!-- Globe icon box — teal -->
                        <div
                            class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                            style="
                                background: rgba(4, 124, 88, 0.1);
                                border: 1px solid rgba(4, 124, 88, 0.24);
                            "
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#047c58"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path
                                    d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                                />
                            </svg>
                        </div>

                        <div class="flex-1 min-w-0">
                            <p
                                class="text-sm font-semibold transition-colors duration-200"
                                style="color: #e2e8f0"
                                onmouseover="this.style.color = '#0284c7'"
                                onmouseout="this.style.color = '#e2e8f0'"
                            >
                                Portfolio Website
                            </p>
                            <p
                                class="text-xs truncate mt-0.5"
                                style="color: rgba(226, 232, 240, 0.44)"
                            >
                                portfolio-umarov-asadbek.vercel.app
                            </p>
                        </div>

                        <svg
                            class="flex-shrink-0 transition-colors duration-200"
                            style="color: rgba(226, 232, 240, 0.25)"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            aria-hidden="true"
                        >
                            <path
                                d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
