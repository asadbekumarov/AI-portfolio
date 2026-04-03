<script setup lang="ts">
interface EducationItem {
    institution: string;
    program: string;
    credential: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
    tags: string[];
}

const education: EducationItem[] = [
    {
        institution: "Najot Ta'lim",
        program: "Frontend Development",
        credential: "Web Development Certificate",
        period: "Completed Mar 2024",
        location: "Tashkent, Uzbekistan",
        description:
            "Completed an intensive, project-driven frontend development program at one of Uzbekistan's leading tech education centers. The curriculum combined modern JavaScript fundamentals with hands-on React ecosystem training and real-world UI development practice.",
        highlights: [
            "Modern JavaScript (ES6+) — closures, async/await, modules, and beyond",
            "TypeScript fundamentals — strict typing, interfaces, and generics",
            "React.js ecosystem — components, hooks, context, and state management",
            "Responsive design with Tailwind CSS and CSS best practices",
            "Git version control and professional collaborative development workflows",
            "Project-based learning with real deliverables and code reviews",
        ],
        tags: [
            "JavaScript",
            "TypeScript",
            "React.js",
            "Tailwind CSS",
            "Git",
            "HTML5",
            "CSS3",
        ],
    },
];
</script>

<template>
    <section
        id="education"
        class="section-padding relative"
        aria-labelledby="education-heading"
    >
        <!-- Top gradient divider -->
        <div class="section-divider" aria-hidden="true" />

        <!-- Background glow — teal -->
        <div
            class="pointer-events-none absolute inset-0 education-glow"
            aria-hidden="true"
        />

        <div class="section-container relative">
            <!-- ── Section Header ── -->
            <div class="text-center mb-14">
                <span class="section-label mb-3 scroll-animate">{{ $t('education.label') }}</span>
                <h2
                    id="education-heading"
                    class="section-title mt-2 scroll-animate delay-100"
                >
                    {{ $t('education.title') }} <span class="gradient-text">{{ $t('education.title_accent') }}</span>
                </h2>
                <p
                    class="mt-4 max-w-xl mx-auto text-base leading-relaxed scroll-animate delay-200 text-slate-400/45"
                >
                    {{ $t('education.description') }}
                </p>
            </div>

            <!-- ── Education Card ── -->
            <div class="max-w-3xl mx-auto">
                <div
                    v-for="edu in education"
                    :key="edu.institution"
                    class="glass-card p-7 sm:p-10 scroll-animate delay-200 border-sky-500/20"
                >
                    <!-- ── Card Header ── -->
                    <div class="flex flex-wrap items-start gap-5 mb-7">
                        <!-- Institution icon — blue → teal gradient -->
                        <div
                            class="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 edu-icon-box"
                            aria-hidden="true"
                        >
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0284c7"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                        </div>

                        <!-- Institution details -->
                        <div class="flex-1 min-w-0">
                            <h3
                                class="text-xl font-bold leading-tight text-slate-200"
                            >
                                {{ edu.institution }}
                            </h3>
                            <p
                                class="text-base font-semibold mt-0.5 text-sky-600"
                            >
                                {{ edu.program }}
                            </p>
                            <p
                                class="text-sm mt-0.5 text-slate-400/45"
                            >
                                {{ edu.credential }}
                            </p>

                            <!-- Meta badges: period + location -->
                            <div
                                class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3"
                            >
                                <!-- Period -->
                                <span
                                    class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-[#0d2138]/80 border border-sky-500/15 text-slate-200/60"
                                >
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        aria-hidden="true"
                                    >
                                        <rect
                                            x="3"
                                            y="4"
                                            width="18"
                                            height="18"
                                            rx="2"
                                            ry="2"
                                        />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {{ edu.period }}
                                </span>

                                <!-- Location -->
                                <span
                                    class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-[#0d2138]/80 border border-sky-500/15 text-slate-200/60"
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                                        />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {{ edu.location }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Horizontal divider -->
                    <div
                        class="w-full h-px mb-7 bg-sky-500/10"
                        aria-hidden="true"
                    />

                    <!-- Description -->
                    <p
                        class="text-sm leading-relaxed mb-7 text-slate-400/60"
                    >
                        {{ edu.description }}
                    </p>

                    <!-- Curriculum Highlights -->
                    <div class="mb-7">
                        <h4
                            class="text-xs font-bold uppercase tracking-widest mb-4 text-slate-400/30"
                        >
                            {{ $t('education.curriculum') }}
                        </h4>

                        <ul
                            class="grid sm:grid-cols-2 gap-x-6 gap-y-3"
                            aria-label="Topics covered"
                        >
                            <li
                                v-for="highlight in edu.highlights"
                                :key="highlight"
                                class="flex items-start gap-3 text-sm text-slate-200/80"
                            >
                                <!-- Blue check icon -->
                                <span
                                    class="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center bg-sky-500/10 border border-sky-500/25"
                                    aria-hidden="true"
                                >
                                    <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0284c7"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                {{ highlight }}
                            </li>
                        </ul>
                    </div>

                    <!-- Horizontal divider -->
                    <div
                        class="w-full h-px mb-5 bg-sky-500/10"
                        aria-hidden="true"
                    />

                    <!-- Technology Tags -->
                    <div>
                        <h4
                            class="text-xs font-bold uppercase tracking-widest mb-3 text-slate-400/30"
                        >
                            {{ $t('education.technologies') }}
                        </h4>
                        <div
                            class="flex flex-wrap gap-2"
                            aria-label="Technologies studied"
                        >
                            <span
                                v-for="tag in edu.tags"
                                :key="tag"
                                class="tag-pill"
                            >
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- ── Continuous Learning Note ── -->
                <div
                    class="glass-card mt-5 p-5 flex items-center gap-4 scroll-animate delay-300 border-sky-500/15 bg-sky-500/5"
                >
                    <div
                        class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl bg-sky-500/10 border border-sky-500/20"
                        aria-hidden="true"
                    >
                        📚
                    </div>
                    <div>
                        <p class="text-sm font-semibold text-slate-200">
                            {{ $t('education.continuous_learning') }}
                        </p>
                        <p
                            class="text-xs mt-0.5 text-slate-400/45"
                            v-html="$t('education.learning_note', {
                                tech: `<strong class='text-sky-600 font-medium'>advanced React patterns</strong>, <strong class='text-sky-600 font-medium'>Next.js App Router</strong>, and <strong class='text-sky-600 font-medium'>web performance optimization</strong>`
                            })"
                        ></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.education-glow {
    background: radial-gradient(
        ellipse 55% 35% at 80% 40%,
        rgba(4, 124, 88, 0.06) 0%,
        transparent 70%
    );
}
.edu-icon-box {
    background: linear-gradient(
        135deg,
        rgba(2, 132, 199, 0.16) 0%,
        rgba(4, 124, 88, 0.12) 100%
    );
    border: 1px solid rgba(2, 132, 199, 0.26);
}
</style>
