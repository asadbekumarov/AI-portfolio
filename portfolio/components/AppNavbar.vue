<script setup lang="ts">
interface NavLink {
    label: string;
    href: string;
}

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const navLinks: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const handleScroll = (): void => {
    isScrolled.value = window.scrollY > 24;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToSection = (href: string): void => {
    isMenuOpen.value = false;
    const el = document.querySelector(href);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
};
</script>

<template>
    <nav
        :class="[
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            isScrolled ? 'py-3' : 'py-5',
        ]"
        :style="
            isScrolled
                ? 'background: rgba(3,7,18,0.90); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(2,132,199,0.10); box-shadow: 0 4px 30px rgba(0,0,0,0.4);'
                : ''
        "
        role="navigation"
        aria-label="Main navigation"
    >
        <div class="section-container">
            <div class="flex items-center justify-between">
                <!-- ── Logo ── -->
                <a
                    href="#"
                    class="group flex items-center gap-2.5 focus-visible:outline-none"
                    aria-label="Asadbek Umarov — back to top"
                    @click.prevent="scrollToTop"
                >
                    <div
                        class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black select-none transition-all duration-300 group-hover:scale-105"
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
                        class="hidden sm:block text-sm font-semibold tracking-wide"
                        style="color: #e2e8f0"
                    >
                        Asadbek
                    </span>
                </a>

                <!-- ── Desktop Navigation ── -->
                <ul class="hidden md:flex items-center gap-0.5" role="list">
                    <li v-for="link in navLinks" :key="link.href">
                        <a
                            :href="link.href"
                            class="relative text-sm px-3.5 py-2 rounded-lg transition-all duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]"
                            style="color: rgba(226, 232, 240, 0.55)"
                            onmouseover="this.style.color = '#e2e8f0'"
                            onmouseout="
                                this.style.color = 'rgba(226,232,240,0.55)'
                            "
                            @click.prevent="scrollToSection(link.href)"
                        >
                            {{ link.label }}
                        </a>
                    </li>
                </ul>

                <!-- ── Desktop CTA ── -->
                <div class="hidden md:flex items-center gap-3">
                    <a
                        href="mailto:asadbekumarov922@gmail.com"
                        class="btn-primary"
                        style="padding: 0.5rem 1.25rem; font-size: 0.8125rem"
                    >
                        <svg
                            width="13"
                            height="13"
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
                        Hire Me
                    </a>
                </div>

                <!-- ── Mobile: Hamburger ── -->
                <button
                    class="md:hidden p-2 rounded-xl transition-all duration-200 hover:bg-white/5"
                    style="color: rgba(226, 232, 240, 0.55)"
                    :aria-label="
                        isMenuOpen
                            ? 'Close navigation menu'
                            : 'Open navigation menu'
                    "
                    :aria-expanded="isMenuOpen"
                    aria-controls="mobile-menu"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <Transition name="icon-swap" mode="out-in">
                        <svg
                            v-if="!isMenuOpen"
                            key="open"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            aria-hidden="true"
                        >
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                        <svg
                            v-else
                            key="close"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            aria-hidden="true"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </Transition>
                </button>
            </div>
        </div>

        <!-- ── Mobile Drawer ── -->
        <Transition name="slide-down">
            <div
                v-if="isMenuOpen"
                id="mobile-menu"
                class="md:hidden mx-4 mt-2 rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
                style="
                    background: #0e1628;
                    border: 1px solid rgba(2, 132, 199, 0.14);
                "
            >
                <ul class="flex flex-col p-3 gap-0.5" role="list">
                    <li v-for="link in navLinks" :key="link.href">
                        <a
                            :href="link.href"
                            class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-white/5 font-medium text-sm"
                            style="color: rgba(226, 232, 240, 0.6)"
                            onmouseover="this.style.color = '#e2e8f0'"
                            onmouseout="
                                this.style.color = 'rgba(226,232,240,0.60)'
                            "
                            @click.prevent="scrollToSection(link.href)"
                        >
                            <span
                                class="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style="background: rgba(2, 132, 199, 0.65)"
                                aria-hidden="true"
                            />
                            {{ link.label }}
                        </a>
                    </li>
                </ul>

                <div class="px-3 pb-3">
                    <div
                        class="h-px w-full mb-3"
                        style="background: rgba(2, 132, 199, 0.1)"
                        aria-hidden="true"
                    />
                    <a
                        href="mailto:asadbekumarov922@gmail.com"
                        class="btn-primary w-full"
                    >
                        <svg
                            width="14"
                            height="14"
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
                        Hire Me
                    </a>
                </div>
            </div>
        </Transition>
    </nav>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition:
        opacity 0.22s ease,
        transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.97);
}

.icon-swap-enter-active,
.icon-swap-leave-active {
    transition:
        opacity 0.12s ease,
        transform 0.12s ease;
}
.icon-swap-enter-from {
    opacity: 0;
    transform: rotate(-45deg) scale(0.7);
}
.icon-swap-leave-to {
    opacity: 0;
    transform: rotate(45deg) scale(0.7);
}
</style>
