<script setup lang="ts">
interface SocialLink {
    name: string;
    href: string;
    icon: "linkedin" | "globe" | "email" | "phone";
    external: boolean;
}

interface NavLink {
    labelKey: string;
    href: string;
}

const currentYear = new Date().getFullYear();

const navLinks: NavLink[] = [
    { labelKey: "nav.about", href: "#about" },
    { labelKey: "nav.skills", href: "#skills" },
    { labelKey: "nav.experience", href: "#experience" },
    { labelKey: "nav.projects", href: "#projects" },
    { labelKey: "nav.education", href: "#education" },
    { labelKey: "nav.contact", href: "#contact" },
];
const socialLinks: SocialLink[] = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/asadbek-umarov-ab9385376",
        icon: "linkedin",
        external: true,
    },
    {
        name: "Portfolio",
        href: "https://portfolio-umarov-asadbek.vercel.app/",
        icon: "globe",
        external: true,
    },
    {
        name: "Send Email",
        href: "mailto:asadbekumarov922@gmail.com",
        icon: "email",
        external: false,
    },
    {
        name: "Call",
        href: "tel:+998772687865",
        icon: "phone",
        external: false,
    },
];

const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToSection = (href: string): void => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
    <footer
        class="relative bg-[#030712] border-t border-sky-500/10"
        role="contentinfo"
    >
        <!-- Top accent line: blue → teal gradient -->
        <div
            class="pointer-events-none absolute top-0 left-0 right-0 h-px footer-accent-line"
            aria-hidden="true"
        />

        <div class="section-container py-14">
            <!-- ── Top Row ── -->
            <div
                class="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 mb-10"
            >
                <!-- Brand Column -->
                <div class="text-center lg:text-left">
                    <!-- Logo -->
                    <a
                        href="#"
                        class="inline-flex items-center gap-2.5 mb-3 group"
                        aria-label="Asadbek Umarov — back to top"
                        @click.prevent="scrollToTop"
                    >
                        <div
                            class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black transition-all duration-300 group-hover:scale-105 logo-gradient shadow-[0_4px_14px_rgba(2,132,199,0.3)] text-slate-200"
                            aria-hidden="true"
                        >
                            AU
                        </div>
                        <span
                            class="text-sm font-semibold tracking-wide text-slate-200"
                        >
                            Asadbek Umarov
                        </span>
                    </a>

                    <p
                        class="text-xs leading-relaxed max-w-xs text-slate-400/45"
                    >
                        {{ $t('footer.tagline') }}
                    </p>

                    <!-- Location + availability -->
                    <div
                        class="flex items-center gap-2 mt-3 justify-center lg:justify-start"
                    >
                        <span class="relative flex h-2 w-2" aria-hidden="true">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-65 bg-emerald-600"
                            />
                            <span
                                class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"
                            />
                        </span>
                        <span
                            class="text-xs font-semibold text-slate-200/80"
                        >
                            {{ $t('about.info.open_to_work') }}
                        </span>
                        <span class="text-slate-200/15">·</span>
                        <span
                            class="text-xs text-slate-400/40"
                        >
                            {{ $t('hero.location') }}
                        </span>
                    </div>
                </div>

                <!-- Nav Links -->
                <nav aria-label="Footer navigation">
                    <p
                        class="text-xs font-bold tracking-widest uppercase text-center lg:text-left mb-4 text-slate-400/25"
                    >
                        {{ $t('nav.navigation') }}
                    </p>
                    <ul
                        class="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2"
                        role="list"
                    >
                        <li v-for="link in navLinks" :key="link.href">
                            <a
                                :href="link.href"
                                class="text-sm transition-colors duration-200 text-slate-400/45 hover:text-slate-200"
                                @click.prevent="scrollToSection(link.href)"
                            >
                                {{ $t(link.labelKey) }}
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- Connect Column -->
                <div>
                    <p
                        class="text-xs font-bold tracking-widest uppercase text-center lg:text-left mb-4 text-slate-400/25"
                    >
                        {{ $t('nav.connect') }}
                    </p>

                    <div
                        class="flex items-center gap-2.5 justify-center lg:justify-start"
                    >
                        <a
                            v-for="social in socialLinks"
                            :key="social.name"
                            :href="social.href"
                            :target="social.external ? '_blank' : undefined"
                            :rel="
                                social.external
                                    ? 'noopener noreferrer'
                                    : undefined
                            "
                            :aria-label="social.name"
                            class="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 bg-slate-900/80 border border-sky-500/15 hover:bg-sky-500/10 hover:border-sky-500/35"
                        >
                            <!-- LinkedIn -->
                            <svg
                                v-if="social.icon === 'linkedin'"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="rgba(226,232,240,0.55)"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <path
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx="4" cy="4" r="2" />
                            </svg>

                            <!-- Globe -->
                            <svg
                                v-else-if="social.icon === 'globe'"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="rgba(226,232,240,0.55)"
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

                            <!-- Email -->
                            <svg
                                v-else-if="social.icon === 'email'"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="rgba(226,232,240,0.55)"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>

                            <!-- Phone -->
                            <svg
                                v-else-if="social.icon === 'phone'"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="rgba(226,232,240,0.55)"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <path
                                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.41 8a16 16 0 006.59 6.59l1.18-1.34a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                                />
                            </svg>
                        </a>
                    </div>

                    <!-- Email hint -->
                    <p
                        class="text-xs mt-3 text-center lg:text-left text-slate-400/30"
                    >
                        asadbekumarov922@gmail.com
                    </p>
                </div>
            </div>

            <!-- ── Horizontal Divider ── -->
            <div
                class="w-full h-px bg-sky-500/10"
                aria-hidden="true"
            />

            <!-- ── Bottom Row ── -->
            <div
                class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6"
            >
                <p
                    class="text-xs order-2 sm:order-1 text-slate-400/30"
                >
                    &copy; {{ currentYear }} Asadbek Umarov. {{ $t('footer.rights') }}
                </p>

                <p
                    class="text-xs order-1 sm:order-2 flex items-center gap-1.5 text-slate-400/30"
                >
                    {{ $t('footer.built_with') }}
                    <span class="font-semibold text-sky-600">Nuxt 3</span>
                    <span class="text-slate-200/15">&amp;</span>
                    <span class="font-semibold text-sky-600">TypeScript</span>
                    <span class="text-slate-200/15">·</span>
                    <span>{{ $t('footer.deployed_on') }}</span>
                    <span class="font-semibold text-emerald-700">Vercel</span>
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-accent-line {
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(2, 132, 199, 0.5) 30%,
        rgba(4, 124, 88, 0.5) 70%,
        transparent 100%
    );
}
.logo-gradient {
    background: linear-gradient(
        135deg,
        #0284c7 0%,
        #047c58 100%
    );
}
</style>
