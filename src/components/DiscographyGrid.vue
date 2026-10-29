<template>
    <div>
        <!-- Latest Release Section (only on homepage) -->
        <div class="mb-10 md:mb-24" v-if="last_release && !isFullPage" data-animate>
            <span class="text-[0.625rem] uppercase tracking-[0.2em] text-primary mb-4 block">Latest Release</span>
            <div class="grid grid-cols-[7rem_1fr] md:grid-cols-2 gap-x-4 gap-y-4 md:gap-12 items-start">
                <div class="bg-surface-container-lowest overflow-hidden">
                    <img :src="`/images/covers/${last_release.cover}`" :alt="last_release.title" loading="lazy" class="w-full aspect-square object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div class="flex flex-col justify-end self-center md:self-auto space-y-3 md:space-y-6">
                    <div>
                        <h3 class="text-lg md:text-3xl font-bold text-on-surface mb-1 md:mb-4">{{ last_release.title }}</h3>
                        <p v-if="last_release.text" class="hidden md:block text-on-surface-variant font-light leading-relaxed mb-6">{{ last_release.text }}</p>
                    </div>
                    <PlatformLinks :links="last_release" />
                    <!-- full player with tracklist from md up; hidden lazy iframes are not loaded -->
                    <div v-if="last_release.release_id" class="hidden md:block bg-surface-container-lowest p-4">
                        <iframe class="border-0 w-full" loading="lazy" :src="`https://bandcamp.com/EmbeddedPlayer/album=${last_release.release_id}/size=large/bgcol=141312/linkcol=e3c7a9/artwork=none/transparent=true/`" style="height: 220px;" seamless title="Bandcamp Player"></iframe>
                    </div>
                </div>
                <!-- slim player below the card on phones -->
                <div v-if="last_release.release_id" class="md:hidden col-span-2 bg-surface-container-lowest p-2">
                    <iframe class="border-0 w-full h-[7.5rem]" loading="lazy" :src="`https://bandcamp.com/EmbeddedPlayer/album=${last_release.release_id}/size=large/bgcol=141312/linkcol=e3c7a9/tracklist=false/artwork=none/transparent=true/`" seamless title="Bandcamp Player"></iframe>
                </div>
            </div>
        </div>

        <!-- Discography Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-12" id="discogrid">
            <div
                v-for="(release, index) in displayedReleases"
                :key="release.id"
                :class="index % 4 === 1 || index % 4 === 3 ? 'sm:max-md:mt-12' : ''"
                class="flex flex-col gap-3 md:gap-6"
                data-animate
            >
                <a
                    :href="`/discography/${release.slug}`"
                    class="aspect-square bg-surface-container-lowest overflow-hidden group cursor-pointer block"
                    :aria-label="`View release ${release.title}`"
                >
                    <img
                        :src="`/images/covers/${release.cover}`"
                        :alt="release.title"
                        loading="lazy"
                        class="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-700"
                    />
                </a>
                <div>
                    <h4 class="font-bold text-sm md:text-lg text-on-surface leading-5 md:leading-6">
                        <a :href="`/discography/${release.slug}`" class="font-bold no-underline hover:text-primary transition-colors">{{ release.title }}</a>
                    </h4>
                    <div class="text-xs opacity-50 uppercase tracking-widest mt-1 text-on-surface">{{ release.year }}</div>
                    <div class="hidden md:block">
                        <PlatformLinks :links="release" variant="bare" class="mt-2" />
                    </div>
                </div>
            </div>
        </div>

        <!-- View All Button (only on homepage) -->
        <div class="flex justify-center mt-8 md:mt-16" v-if="!isFullPage" data-animate>
            <a
              href="/discography"
              class="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all no-underline">
                View Complete Discography ({{ sortedReleases.length }} Releases)
            </a>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import releases from '../releases.js';
import PlatformLinks from './PlatformLinks.vue';

const props = defineProps({
    isFullPage: { type: Boolean, default: false },
    sectionId:  { type: String,  default: 'disco' },
});

const showitems       = 8;

const sortedReleases = computed(() => [...releases].sort((a, b) => b.id - a.id));
const last_release   = computed(() => sortedReleases.value[0]);

const displayedReleases = computed(() =>
    props.isFullPage ? sortedReleases.value : sortedReleases.value.slice(1, showitems + 1)
);
</script>
