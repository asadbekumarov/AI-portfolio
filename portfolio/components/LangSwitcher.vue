<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});

const toggleLocale = (newLocale: string) => {
    setLocale(newLocale);
};
</script>

<template>
    <div class="flex items-center gap-2">
        <button
            v-for="item in locales"
            :key="item.code"
            class="px-2 py-1 rounded text-xs font-bold transition-all duration-200"
            :style="
                locale === item.code
                    ? 'background: rgba(2, 132, 199, 0.2); color: #e2e8f0; border: 1px solid rgba(2, 132, 199, 0.5);'
                    : 'color: rgba(226, 232, 240, 0.4); hover: color: #e2e8f0;'
            "
            @click="toggleLocale(item.code)"
        >
            {{ item.code.toUpperCase() }}
        </button>
    </div>
</template>
