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
            class="pointer-events-none absolute inset-0"
            style="
                background: radial-gradient(
                    ellipse 55% 35% at 80% 40%,
                    rgba(4, 124, 88, 0.06) 0%,
                    transparent 70%
                );
            "
            aria-hidden="true"
        />

        <div class="section-container relative">
            <!-- ── Section Header ── -->
            <div class="text-center mb-14">
                <span class="section-label mb-3 scroll-animate"
                    >Background</span
                >
                <h2
                    id="education-heading"
                    class="section-title mt-2 scroll-animate delay-100"
                >
                    Education &amp; <span class="gradient-text">Training</span>
                </h2>
                <p
                    class="mt-4 max-w-xl mx-auto text-base leading-relaxed scroll-animate delay-200"
                    style="color: rgba(226, 232, 240, 0.44)"
                >
                    A solid academic foundation built through intensive,
                    hands-on training at a recognized tech education
                    institution.
                </p>
            </div>

            <!-- ── Education Card ── -->
            <div class="max-w-3xl mx-auto">
                <div
                    v-for="edu in education"
                    :key="edu.institution"
                    class="glass-card p-7 sm:p-10 scroll-animate delay-200"
                    style="border-color: rgba(2, 132, 199, 0.18)"
                >
                    <!-- ── Card Header ── -->
                    <div class="flex flex-wrap items-start gap-5 mb-7">
                        <!-- Institution icon — blue → teal gradient -->
                        <div
                            class="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style="
                                background: linear-gradient(
                                    135deg,
                                    rgba(2, 132, 199, 0.16) 0%,
                                    rgba(4, 124, 88, 0.12) 100%
                                );
                                border: 1px solid rgba(2, 132, 199, 0.26);
                            "
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
                                class="text-xl font-bold leading-tight"
                                style="color: #e2e8f0"
                            >
                                {{ edu.institution }}
                            </h3>
                            <p
                                class="text-base font-semibold mt-0.5"
                                style="color: #0284c7"
                            >
                                {{ edu.program }}
                            </p>
                            <p
                                class="text-sm mt-0.5"
                                style="color: rgba(226, 232, 240, 0.44)"
                            >
                                {{ edu.credential }}
                            </p>

                            <!-- Meta badges: period + location -->
                            <div
                                class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3"
                            >
                                <!-- Period -->
                                <span
                                    class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg"
                                    style="
                                        background: rgba(13, 33, 56, 0.8);
                                        border: 1px solid
                                            rgba(2, 132, 199, 0.15);
                                        color: rgba(226, 232, 240, 0.62);
                                    "
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
                                    class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg"
                                    style="
                                        background: rgba(13, 33, 56, 0.8);
                                        border: 1px solid
                                            rgba(2, 132, 199, 0.15);
                                        color: rgba(226, 232, 240, 0.62);
                                    "
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
                        class="w-full h-px mb-7"
                        style="background: rgba(2, 132, 199, 0.1)"
                        aria-hidden="true"
                    />

                    <!-- Description -->
                    <p
                        class="text-sm leading-relaxed mb-7"
                        style="color: rgba(226, 232, 240, 0.62)"
                    >
                        {{ edu.description }}
                    </p>

                    <!-- Curriculum Highlights -->
                    <div class="mb-7">
                        <h4
                            class="text-xs font-bold uppercase tracking-widest mb-4"
                            style="
                                color: rgba(226, 232, 240, 0.3);
                                letter-spacing: 0.12em;
                            "
                        >
                            Curriculum Highlights
                        </h4>

                        <ul
                            class="grid sm:grid-cols-2 gap-x-6 gap-y-3"
                            aria-label="Topics covered"
                        >
                            <li
                                v-for="highlight in edu.highlights"
                                :key="highlight"
                                class="flex items-start gap-3 text-sm"
                                style="color: rgba(226, 232, 240, 0.82)"
                            >
                                <!-- Blue check icon -->
                                <span
                                    class="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                                    style="
                                        background: rgba(2, 132, 199, 0.12);
                                        border: 1px solid
                                            rgba(2, 132, 199, 0.26);
                                    "
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
                        class="w-full h-px mb-5"
                        style="background: rgba(2, 132, 199, 0.1)"
                        aria-hidden="true"
                    />

                    <!-- Technology Tags -->
                    <div>
                        <h4
                            class="text-xs font-bold uppercase tracking-widest mb-3"
                            style="
                                color: rgba(226, 232, 240, 0.3);
                                letter-spacing: 0.12em;
                            "
                        >
                            Technologies Studied
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
                    class="glass-card mt-5 p-5 flex items-center gap-4 scroll-animate delay-300"
                    style="
                        border-color: rgba(2, 132, 199, 0.15);
                        background: rgba(2, 132, 199, 0.04);
                    "
                >
                    <div
                        class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                        style="
                            background: rgba(2, 132, 199, 0.1);
                            border: 1px solid rgba(2, 132, 199, 0.2);
                        "
                        aria-hidden="true"
                    >
                        📚
                    </div>
                    <div>
                        <p class="text-sm font-semibold" style="color: #e2e8f0">
                            Continuous Self-Learning
                        </p>
                        <p
                            class="text-xs mt-0.5"
                            style="color: rgba(226, 232, 240, 0.44)"
                        >
                            Beyond formal training — actively deepening
                            expertise in
                            <strong style="color: #0284c7; font-weight: 500"
                                >advanced React patterns</strong
                            >,
                            <strong style="color: #0284c7; font-weight: 500"
                                >Next.js App Router</strong
                            >, and
                            <strong style="color: #0284c7; font-weight: 500"
                                >web performance optimization</strong
                            >
                            through building real projects every day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
