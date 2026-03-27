<script setup lang="ts">
interface SkillCategory {
    emoji: string;
    category: string;
    description: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        emoji: "⚡",
        category: "Core Languages",
        description: "The foundation of every project",
        skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    },
    {
        emoji: "🚀",
        category: "Frameworks & Libraries",
        description: "Building modern, scalable UIs",
        skills: ["React.js", "Next.js", "React Native"],
    },
    {
        emoji: "🎨",
        category: "Styling",
        description: "Crafting beautiful, responsive layouts",
        skills: [
            "Tailwind CSS",
            "CSS Modules",
            "Responsive Design",
            "Mobile-First",
        ],
    },
    {
        emoji: "🔄",
        category: "State & Data",
        description: "Efficient data flow and management",
        skills: ["RTK Query", "Redux Toolkit", "REST APIs", "Async/Await"],
    },
    {
        emoji: "🛠️",
        category: "Tools & Workflow",
        description: "Professional development practices",
        skills: ["Git", "GitHub", "VS Code", "Figma", "npm / yarn"],
    },
    {
        emoji: "💡",
        category: "Soft Skills",
        description: "What makes a great teammate",
        skills: [
            "Problem Solving",
            "Team Collaboration",
            "Attention to Detail",
            "Fast Learner",
        ],
    },
];
</script>

<template>
    <section
        id="skills"
        class="section-padding relative"
        aria-labelledby="skills-heading"
    >
        <!-- Top divider -->
        <div class="section-divider" aria-hidden="true" />

        <!-- Subtle background glow -->
        <div
            class="pointer-events-none absolute inset-0"
            style="
                background: radial-gradient(
                    ellipse 70% 40% at 50% 50%,
                    rgba(2, 132, 199, 0.05) 0%,
                    transparent 70%
                );
            "
            aria-hidden="true"
        />

        <div class="section-container relative">
            <!-- ── Section Header ── -->
            <div class="text-center mb-14">
                <span class="section-label mb-3 scroll-animate">
                    Technical Expertise
                </span>
                <h2
                    id="skills-heading"
                    class="section-title mt-2 scroll-animate delay-100"
                >
                    Skills &amp;
                    <span class="gradient-text">Technologies</span>
                </h2>
                <p
                    class="mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed scroll-animate delay-200"
                    style="color: rgba(226, 232, 240, 0.44)"
                >
                    A focused toolkit forged through real-world projects and
                    continuous self-driven learning.
                </p>
            </div>

            <!-- ── Skills Grid ── -->
            <div
                class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                role="list"
                aria-label="Skill categories"
            >
                <div
                    v-for="(cat, index) in skillCategories"
                    :key="cat.category"
                    class="glass-card p-6 group scroll-animate"
                    :style="`transition-delay: ${0.05 + index * 0.08}s;`"
                    role="listitem"
                >
                    <!-- Card header -->
                    <div class="flex items-start gap-3 mb-4">
                        <!-- Icon box -->
                        <div
                            class="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                            style="
                                background: rgba(2, 132, 199, 0.1);
                                border: 1px solid rgba(2, 132, 199, 0.2);
                            "
                            aria-hidden="true"
                        >
                            {{ cat.emoji }}
                        </div>
                        <div>
                            <h3
                                class="text-sm font-semibold leading-tight"
                                style="color: #e2e8f0"
                            >
                                {{ cat.category }}
                            </h3>
                            <p
                                class="text-xs mt-0.5"
                                style="color: rgba(226, 232, 240, 0.38)"
                            >
                                {{ cat.description }}
                            </p>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div
                        class="h-px w-full mb-4"
                        style="background: rgba(2, 132, 199, 0.1)"
                        aria-hidden="true"
                    />

                    <!-- Skill pills -->
                    <div
                        class="flex flex-wrap gap-2"
                        role="list"
                        :aria-label="`${cat.category} skills`"
                    >
                        <span
                            v-for="skill in cat.skills"
                            :key="skill"
                            class="tag-pill transition-all duration-200 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/12"
                            role="listitem"
                        >
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- ── Bottom note ── -->
            <p
                class="text-center mt-10 text-xs scroll-animate"
                style="color: rgba(226, 232, 240, 0.28); letter-spacing: 0.04em"
            >
                Always learning · Currently exploring
                <strong style="color: #0284c7; font-weight: 600">
                    advanced Next.js patterns
                </strong>
                &amp;
                <strong style="color: #0284c7; font-weight: 600">
                    performance optimization
                </strong>
            </p>
        </div>
    </section>
</template>
