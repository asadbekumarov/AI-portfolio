<script setup lang="ts">
interface Project {
    title: string;
    subtitleKey: string;
    category: string;
    statusKey: string;
    descriptionKey: string;
    highlights: string[];
    technologies: string[];
}

// Note: For a real production app, project descriptions should also be in i18n files.
// For now, we use keys and map them.
const projects: Project[] = [
    {
        title: "Mann Home",
        subtitleKey: "projects.items.mann_home.subtitle",
        category: "Web App",
        statusKey: "projects.status.development",
        descriptionKey: "projects.items.mann_home.description",
        highlights: [
            "RTK Query integration",
            "Responsive UI",
            "Modular architecture",
        ],
        technologies: ["React.js", "TypeScript", "RTK Query", "Tailwind CSS"],
    },
    {
        title: "PUBG Tournament",
        subtitleKey: "projects.items.pubg.subtitle",
        category: "Web App",
        statusKey: "projects.status.completed",
        descriptionKey: "projects.items.pubg.description",
        highlights: [
            "Dynamic brackets",
            "Next.js SSR/SSG",
            "Real-time updates",
        ],
        technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Darrow",
        subtitleKey: "projects.items.darrow.subtitle",
        category: "Telegram Mini App",
        statusKey: "projects.status.development",
        descriptionKey: "projects.items.darrow.description",
        highlights: [
            "Telegram API",
            "Taxi & Food flows",
            "Mobile-first",
        ],
        technologies: ["React.js", "TypeScript", "Tailwind CSS", "Telegram API"],
    },
    {
        title: "VocabApp",
        subtitleKey: "projects.items.vocab.subtitle",
        category: "Mobile App",
        statusKey: "projects.status.completed",
        descriptionKey: "projects.items.vocab.description",
        highlights: [
            "Batch word entry",
            "Spaced repetition",
            "Smart quizzes",
        ],
        technologies: ["React Native", "TypeScript", "Mobile"],
    },
];

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
            class="pointer-events-none absolute inset-0 projects-glow"
            aria-hidden="true"
        />

        <div class="section-container relative">
            <!-- ── Section Header ── -->
            <div class="text-center mb-14">
                <span class="section-label mb-3 scroll-animate">{{ $t('projects.label') }}</span>

                <h2
                    id="projects-heading"
                    class="section-title mt-2 scroll-animate delay-100"
                >
                    {{ $t('projects.title') }} <span class="gradient-text">{{ $t('projects.title_accent') }}</span>
                </h2>

                <p
                    class="mt-4 max-w-xl mx-auto text-base leading-relaxed scroll-animate delay-200 text-slate-400/45"
                >
                    {{ $t('projects.description') }}
                </p>
            </div>

            <!-- ── Project Cards Grid ── -->
            <div class="grid sm:grid-cols-2 gap-6">
                <article
                    v-for="(project, index) in projects"
                    :key="project.title"
                    class="glass-card flex flex-col scroll-animate group"
                    :style="`transition-delay: ${index * 0.1}s;`"
                    :aria-label="`Project: ${project.title}`"
                >
                    <div
                        class="flex flex-col flex-1 p-7 rounded-2xl transition-transform duration-300 group-hover:-translate-y-1 h-full"
                    >
                        <!-- ── Card Header ── -->
                        <div
                            class="flex items-start justify-between gap-4 mb-5"
                        >
                            <div class="flex-1 min-w-0">
                                <!-- Category badge -->
                                <div class="flex items-center gap-1.5 mb-2">
                                    <span class="text-sm" aria-hidden="true">
                                        {{ categoryIcon[project.category] ?? "📁" }}
                                    </span>
                                    <span
                                        class="text-xs font-semibold tracking-wider uppercase text-slate-400/35"
                                    >
                                        {{ project.category }}
                                    </span>
                                </div>

                                <!-- Title -->
                                <h3
                                    class="text-lg font-bold leading-tight mb-0.5 text-slate-200"
                                >
                                    {{ project.title }}
                                </h3>

                                <!-- Subtitle -->
                                <p
                                    class="text-sm font-medium text-slate-400/45"
                                >
                                    {{ project.subtitleKey.includes('.') ? $t(project.subtitleKey) : project.subtitleKey }}
                                </p>
                            </div>

                            <!-- Status chip -->
                            <span
                                class="text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 whitespace-nowrap"
                                :class="project.statusKey.includes('development') ? 'status-dev' : 'status-completed'"
                                :aria-label="`Status: ${$t(project.statusKey)}`"
                            >
                                {{ project.statusKey.includes('.') ? $t(project.statusKey) : project.statusKey }}
                            </span>
                        </div>

                        <!-- ── Description ── -->
                        <p
                            class="text-sm leading-relaxed mb-5 text-slate-400/55"
                        >
                            {{ project.descriptionKey.includes('.') ? $t(project.descriptionKey) : project.descriptionKey }}
                        </p>

                        <!-- ── Highlights ── -->
                        <ul
                            class="space-y-2.5 mb-6 flex-1"
                            aria-label="Key highlights"
                        >
                            <li
                                v-for="highlight in project.highlights"
                                :key="highlight"
                                class="flex items-start gap-2.5 text-xs leading-relaxed text-slate-200/70"
                            >
                                <!-- Bullet dot — blue accent -->
                                <span
                                    class="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-600/70"
                                    aria-hidden="true"
                                />
                                {{ highlight }}
                            </li>
                        </ul>

                        <!-- ── Divider ── -->
                        <div
                            class="h-px w-full mb-4 bg-sky-500/10"
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
                    {{ $t('projects.cta_full') }}
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

<style scoped>
.projects-glow {
    background: radial-gradient(
        ellipse 70% 40% at 50% 100%,
        rgba(4, 124, 88, 0.06) 0%,
        transparent 70%
    );
}
.status-dev {
    color: rgba(226, 232, 240, 0.88);
    background: rgba(4, 124, 88, 0.1);
    border-color: rgba(4, 124, 88, 0.28);
}
.status-completed {
    color: rgba(226, 232, 240, 0.88);
    background: rgba(2, 132, 199, 0.1);
    border-color: rgba(2, 132, 199, 0.28);
}
</style>
