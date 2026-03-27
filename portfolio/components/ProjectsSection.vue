<script setup lang="ts">
interface Project {
    title: string;
    subtitle: string;
    category: string;
    status: "In Development" | "Completed";
    description: string;
    highlights: string[];
    technologies: string[];
}

const projects: Project[] = [
    {
        title: "Mann Home",
        subtitle: "E-Commerce Platform",
        category: "Web App",
        status: "In Development",
        description:
            "A high-performance e-commerce platform for online furniture retail. Focused on core frontend modules with robust state management and seamless API integration for an optimized shopping experience.",
        highlights: [
            "End-to-end RTK Query integration for efficient product data fetching and caching",
            "Responsive, mobile-first UI designed for a premium shopping experience",
            "Modular component architecture built for long-term scalability",
        ],
        technologies: ["React.js", "TypeScript", "RTK Query", "Tailwind CSS"],
    },
    {
        title: "PUBG Tournament Platform",
        subtitle: "E-Sports Management System",
        category: "Web App",
        status: "Completed",
        description:
            "A regional e-sports tournament management system supporting multi-province competitions. Features dynamic UI for tournament brackets, player registration flows, and real-time status updates.",
        highlights: [
            "Dynamic tournament bracket and player registration flow components",
            "SEO-optimized architecture leveraging Next.js SSR and SSG features",
            "High-performance UI built to handle real-time competition data updates",
        ],
        technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Darrow",
        subtitle: "Multi-Service Telegram Mini App",
        category: "Telegram Mini App",
        status: "In Development",
        description:
            "A Telegram-integrated multi-service platform covering taxi booking and food delivery. Built with a strong focus on mobile-first UX and smooth service navigation within the Telegram ecosystem.",
        highlights: [
            "Telegram WebApp API integration for a native in-app user experience",
            "Unified UI spanning both taxi and food delivery service flows",
            "Responsive mobile-first design optimized for Telegram clients",
        ],
        technologies: [
            "React.js",
            "TypeScript",
            "Tailwind CSS",
            "Telegram API",
        ],
    },
    {
        title: "VocabApp",
        subtitle: "Mobile Vocabulary Learning App",
        category: "Mobile App",
        status: "Completed",
        description:
            "A mobile application designed to help language learners efficiently build and retain vocabulary. Features batch word entry, structured daily review sessions, and smart randomized quizzes.",
        highlights: [
            "Batch word entry system enabling fast, frictionless vocabulary input",
            "Daily review sessions structured around spaced repetition principles",
            "Smart randomized quiz engine for active memory reinforcement",
        ],
        technologies: ["React Native", "TypeScript", "Mobile"],
    },
];

// Status chip styles — only palette colors
const statusStyles: Record<string, string> = {
    "In Development":
        "color: rgba(226,232,240,0.88); background: rgba(4,124,88,0.10); border-color: rgba(4,124,88,0.28);",
    Completed:
        "color: rgba(226,232,240,0.88); background: rgba(2,132,199,0.10); border-color: rgba(2,132,199,0.28);",
};

const categoryIcon: Record<string, string> = {
    "Web App": "🌐",
    "Telegram Mini App": "✈️",
    "Mobile App": "📱",
};
</script>

<template>
    <section
        id="projects"
        class="section-padding relative"
        aria-labelledby="projects-heading"
    >
        <!-- Top divider -->
        <div class="section-divider" aria-hidden="true" />

        <!-- Subtle teal glow at bottom -->
        <div
            class="pointer-events-none absolute inset-0"
            style="
                background: radial-gradient(
                    ellipse 70% 40% at 50% 100%,
                    rgba(4, 124, 88, 0.06) 0%,
                    transparent 70%
                );
            "
            aria-hidden="true"
        />

        <div class="section-container relative">
            <!-- ── Section Header ── -->
            <div class="text-center mb-14">
                <span class="section-label mb-3 scroll-animate">Portfolio</span>

                <h2
                    id="projects-heading"
                    class="section-title mt-2 scroll-animate delay-100"
                >
                    Featured <span class="gradient-text">Projects</span>
                </h2>

                <p
                    class="mt-4 max-w-xl mx-auto text-base leading-relaxed scroll-animate delay-200"
                    style="color: rgba(226, 232, 240, 0.44)"
                >
                    Real-world applications built across diverse domains — from
                    e-commerce to e-sports, service platforms, and mobile
                    education.
                </p>
            </div>

            <!-- ── Project Cards Grid ── -->
            <div class="grid sm:grid-cols-2 gap-6">
                <article
                    v-for="(project, index) in projects"
                    :key="project.title"
                    class="glass-card flex flex-col scroll-animate"
                    :style="`transition-delay: ${index * 0.1}s;`"
                    :aria-label="`Project: ${project.title}`"
                >
                    <div
                        class="flex flex-col flex-1 p-7 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                        style="height: 100%"
                    >
                        <!-- ── Card Header ── -->
                        <div
                            class="flex items-start justify-between gap-4 mb-5"
                        >
                            <div class="flex-1 min-w-0">
                                <!-- Category badge -->
                                <div class="flex items-center gap-1.5 mb-2">
                                    <span class="text-sm" aria-hidden="true">
                                        {{
                                            categoryIcon[project.category] ??
                                            "📁"
                                        }}
                                    </span>
                                    <span
                                        class="text-xs font-semibold tracking-wider uppercase"
                                        style="color: rgba(226, 232, 240, 0.35)"
                                    >
                                        {{ project.category }}
                                    </span>
                                </div>

                                <!-- Title -->
                                <h3
                                    class="text-lg font-bold leading-tight mb-0.5"
                                    style="color: #e2e8f0"
                                >
                                    {{ project.title }}
                                </h3>

                                <!-- Subtitle -->
                                <p
                                    class="text-sm font-medium"
                                    style="color: rgba(226, 232, 240, 0.44)"
                                >
                                    {{ project.subtitle }}
                                </p>
                            </div>

                            <!-- Status chip -->
                            <span
                                class="text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 whitespace-nowrap"
                                :style="statusStyles[project.status]"
                                :aria-label="`Status: ${project.status}`"
                            >
                                {{ project.status }}
                            </span>
                        </div>

                        <!-- ── Description ── -->
                        <p
                            class="text-sm leading-relaxed mb-5"
                            style="color: rgba(226, 232, 240, 0.55)"
                        >
                            {{ project.description }}
                        </p>

                        <!-- ── Highlights ── -->
                        <ul
                            class="space-y-2.5 mb-6 flex-1"
                            aria-label="Key highlights"
                        >
                            <li
                                v-for="highlight in project.highlights"
                                :key="highlight"
                                class="flex items-start gap-2.5 text-xs leading-relaxed"
                                style="color: rgba(226, 232, 240, 0.72)"
                            >
                                <!-- Bullet dot — blue accent -->
                                <span
                                    class="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                                    style="background: rgba(2, 132, 199, 0.7)"
                                    aria-hidden="true"
                                />
                                {{ highlight }}
                            </li>
                        </ul>

                        <!-- ── Divider ── -->
                        <div
                            class="h-px w-full mb-4"
                            style="background: rgba(2, 132, 199, 0.1)"
                            aria-hidden="true"
                        />

                        <!-- ── Tech Stack ── -->
                        <div
                            class="flex flex-wrap gap-1.5"
                            aria-label="Technologies used"
                        >
                            <span
                                v-for="tech in project.technologies"
                                :key="tech"
                                class="tag-pill"
                            >
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- ── View Full Portfolio CTA ── -->
            <div class="text-center mt-12 scroll-animate">
                <a
                    href="https://portfolio-umarov-asadbek.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-secondary"
                >
                    <!-- Globe icon -->
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path
                            d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                        />
                    </svg>
                    View Full Portfolio
                    <!-- External link icon -->
                    <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path
                            d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>
