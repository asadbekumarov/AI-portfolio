<script setup lang="ts">
interface SocialLink {
    name: string;
    href: string;
    icon: "linkedin" | "globe" | "email" | "phone";
    external: boolean;
}

interface NavLink {
    label: string;
    href: string;
}

const currentYear = new Date().getFullYear();

const navLinks: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
    // { label: "Resume", href: "/resume.pdf" },
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
        class="relative"
        style="
            background: #030712;
            border-top: 1px solid rgba(2, 132, 199, 0.1);
        "
        role="contentinfo"
    >
        <!-- Top accent line: blue → teal gradient -->
        <div
            class="pointer-events-none absolute top-0 left-0 right-0"
            style="
                height: 1px;
                background: linear-gradient(
                    90deg,
                    transparent 0%,
                    rgba(2, 132, 199, 0.5) 30%,
                    rgba(4, 124, 88, 0.5) 70%,
                    transparent 100%
                );
            "
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
                            class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black transition-all duration-300 group-hover:scale-105"
                            style="
                                color: #e2e8f0;
                                background: linear-gradient(
                                    135deg,
                                    #0284c7 0%,
                                    #047c58 100%
                                );
                                box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3);
                            "
                            aria-hidden="true"
                        >
                            AU
                        </div>
                        <span
                            class="text-sm font-semibold tracking-wide"
                            style="color: #e2e8f0"
                        >
                            Asadbek Umarov
                        </span>
                    </a>

                    <p
                        class="text-xs leading-relaxed max-w-xs"
                        style="color: rgba(226, 232, 240, 0.44)"
                    >
                        Junior Frontend Developer crafting modern, responsive
                        web experiences with React, TypeScript &amp; Next.js.
                    </p>

                    <!-- Location + availability -->
                    <div
                        class="flex items-center gap-2 mt-3 justify-center lg:justify-start"
                    >
                        <span class="relative flex h-2 w-2" aria-hidden="true">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-65"
                                style="background: #047c58"
                            />
                            <span
                                class="relative inline-flex rounded-full h-2 w-2"
                                style="background: #047c58"
                            />
                        </span>
                        <span
                            class="text-xs font-semibold"
                            style="color: rgba(226, 232, 240, 0.82)"
                        >
                            Open to Work
                        </span>
                        <span style="color: rgba(226, 232, 240, 0.15)">·</span>
                        <span
                            class="text-xs"
                            style="color: rgba(226, 232, 240, 0.38)"
                        >
                            Tashkent, Uzbekistan
                        </span>
                    </div>
                </div>

                <!-- Nav Links -->
                <nav aria-label="Footer navigation">
                    <p
                        class="text-xs font-bold tracking-widest uppercase text-center lg:text-left mb-4"
                        style="color: rgba(226, 232, 240, 0.25)"
                    >
                        Navigation
                    </p>
                    <ul
                        class="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2"
                        role="list"
                    >
                        <li v-for="link in navLinks" :key="link.href">
                            <a
                                :href="link.href"
                                class="text-sm transition-colors duration-200"
                                style="color: rgba(226, 232, 240, 0.44)"
                                onmouseover="this.style.color = '#e2e8f0'"
                                onmouseout="
                                    this.style.color = 'rgba(226,232,240,0.44)'
                                "
                                @click.prevent="scrollToSection(link.href)"
                            >
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- Connect Column -->
                <div>
                    <p
                        class="text-xs font-bold tracking-widest uppercase text-center lg:text-left mb-4"
                        style="color: rgba(226, 232, 240, 0.25)"
                    >
                        Connect
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
                            class="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                            style="
                                background: rgba(14, 22, 40, 0.8);
                                border: 1px solid rgba(2, 132, 199, 0.14);
                            "
                            onmouseover="
                                this.style.background = 'rgba(2,132,199,0.12)';
                                this.style.borderColor = 'rgba(2,132,199,0.35)';
                            "
                            onmouseout="
                                this.style.background = 'rgba(14,22,40,0.8)';
                                this.style.borderColor = 'rgba(2,132,199,0.14)';
                            "
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
                        class="text-xs mt-3 text-center lg:text-left"
                        style="color: rgba(226, 232, 240, 0.28)"
                    >
                        asadbekumarov922@gmail.com
                    </p>
                </div>
            </div>

            <!-- ── Horizontal Divider ── -->
            <div
                class="w-full h-px"
                style="background: rgba(2, 132, 199, 0.1)"
                aria-hidden="true"
            />

            <!-- ── Bottom Row ── -->
            <div
                class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6"
            >
                <p
                    class="text-xs order-2 sm:order-1"
                    style="color: rgba(226, 232, 240, 0.28)"
                >
                    &copy; {{ currentYear }} Asadbek Umarov. All rights
                    reserved.
                </p>

                <p
                    class="text-xs order-1 sm:order-2 flex items-center gap-1.5"
                    style="color: rgba(226, 232, 240, 0.28)"
                >
                    Built with
                    <span class="font-semibold" style="color: #0284c7"
                        >Nuxt 3</span
                    >
                    <span style="color: rgba(226, 232, 240, 0.15)">&amp;</span>
                    <span class="font-semibold" style="color: #0284c7"
                        >TypeScript</span
                    >
                    <span style="color: rgba(226, 232, 240, 0.15)">·</span>
                    <span>Deployed on</span>
                    <span class="font-semibold" style="color: #047c58"
                        >Vercel</span
                    >
                </p>
            </div>
        </div>
    </footer>
</template>
