<template>
    <section class="py-32 px-8 md:px-16 bg-surface" :id="sectionId">
        <div class="container mx-auto">
            <!-- Header -->
            <div class="flex justify-between items-end mb-24" data-aos="fade-up" v-if="showHeader">
                <div>
                    <span class="text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">{{ headerLabel }}</span>
                    <h2 class="text-4xl md:text-6xl font-bold tracking-tight">{{ title }}</h2>
                </div>
                <button 
                  v-if="!showAllReleases && !isFullPage"
                  @click="scrollToGrid" 
                  class="uppercase text-[10px] tracking-widest border-b border-on-surface/20 pb-1 hover:border-primary hover:text-primary transition-all">
                    VIEW ALL →
                </button>
            </div>

            <!-- Latest Release Section (only on homepage) -->
            <div class="mb-24" v-if="last_release && !showAllReleases && !isFullPage" data-aos="fade-up">
                <span class="text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">LATEST RELEASE</span>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div class="bg-surface-container-lowest overflow-hidden">
                        <img :src="`/images/covers/${last_release.cover}`" :alt="last_release.title" class="w-full aspect-square object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div class="flex flex-col justify-end space-y-6">
                        <div>
                            <h3 class="text-2xl md:text-3xl font-bold text-on-surface mb-4">{{ last_release.title }}</h3>
                            <p v-if="last_release.text" class="text-on-surface-variant font-light leading-relaxed mb-6">{{ last_release.text }}</p>
                        </div>
                        <div v-if="last_release.bandcamp">
                            <AlbumLinks :url="last_release.bandcamp" />
                        </div>
                        <div v-if="last_release.release_id" class="bg-surface-container-lowest p-4">
                            <iframe class="border-0 w-full" :src="`https://bandcamp.com/EmbeddedPlayer/album=${last_release.release_id}/size=large/bgcol=141312/linkcol=e3c7a9/artwork=none/transparent=true/`" style="height: 120px;" seamless title="Bandcamp Player"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Discography Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12" id="discogrid">
                <div 
                    v-for="(release, index) in displayedReleases" 
                    :key="release.id"
                    :class="index % 4 === 1 || index % 4 === 3 ? 'mt-12 md:mt-0' : ''"
                    class="flex flex-col gap-6"
                    data-aos="fade-up"
                    :data-aos-delay="index * 50"
                >
                    <button 
                        type="button" 
                        class="aspect-square bg-surface-container-lowest overflow-hidden group cursor-pointer text-left"
                        @click="openModalPlayer(release)"
                        :aria-label="`Play album ${release.title}`"
                        :disabled="!release.release_id"
                    >
                        <img 
                            :src="`/images/covers/${release.cover}`" 
                            :alt="release.title" 
                            class="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
                            :class="{ 'brightness-75': !release.release_id }"
                        />
                    </button>
                    <div>
                        <h4 class="font-bold text-lg text-on-surface">{{ release.title }}</h4>
                        <p class="text-xs opacity-50 uppercase tracking-widest mt-1 text-on-surface">
                            {{ release.year }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- View All Button (only on homepage) -->
            <div class="flex justify-center mt-16" v-if="!showAllReleases && !isFullPage" data-aos="fade-up">
                <a 
                  href="/discography" 
                  class="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all no-underline">
                    View Complete Discography ({{ sortedReleases.length }} Releases)
                </a>
            </div>
        </div>
    </section>

    <!-- Modal Player -->
    <Modal :is-open="openPlayer" @close="openPlayer = false">
        <div v-if="selectedRelease" class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="order-1">
                <div class="bg-surface-container-lowest overflow-hidden">
                    <img :src="`/images/covers/${selectedRelease.cover}`" :alt="selectedRelease.title" class="w-full aspect-square object-cover" />
                </div>
            </div>

            <div class="order-2 flex flex-col space-y-6">
                <div>
                    <div class="text-xs text-on-surface/40 mb-2 font-mono uppercase tracking-[0.2em]">{{ selectedRelease.year }}</div>
                    <h2 class="text-2xl md:text-3xl font-bold text-on-surface mb-4">{{ selectedRelease.title }}</h2>

                    <div v-if="selectedRelease.bandcamp" class="mb-6">
                        <AlbumLinks :url="selectedRelease.bandcamp" />
                    </div>

                    <p v-if="selectedRelease.text" class="text-on-surface-variant font-light leading-relaxed">{{ selectedRelease.text }}</p>
                </div>

                <div v-if="selectedRelease.release_id" class="bg-surface-container-lowest p-4">
                    <iframe :src="`https://bandcamp.com/EmbeddedPlayer/album=${selectedRelease.release_id}/size=large/bgcol=141312/linkcol=e3c7a9/artwork=small/transparent=true/`" class="w-full border-0" style="height: 300px;" seamless title="Bandcamp Player"></iframe>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import releases from '../releases.js';
import Modal from './Modal.vue';
import AlbumLinks from './Album-Links.vue';

const props = defineProps({
    isFullPage: {
        type: Boolean,
        default: false
    },
    sectionId: {
        type: String,
        default: 'disco'
    },
    headerLabel: {
        type: String,
        default: 'COLLECTION'
    },
    title: {
        type: String,
        default: 'DISCOGRAPHY'
    },
    showHeader: {
        type: Boolean,
        default: true
    }
});

const last_release = ref();
const openPlayer = ref(false);
const selectedRelease = ref(null);
const showAllReleases = ref(false);
const showitems = 8; // 2 rows x 4 columns

onMounted(() => {
    getLatestRelease();
});

const getLatestRelease = () => {
    const res = releases[0];
    last_release.value = res;
    return res;
};

const openModalPlayer = (release) => {
    if (!release.release_id) return;
    selectedRelease.value = release;
    openPlayer.value = true;
};

const sortedReleases = computed(() => {
    return releases.sort((a, b) => (a.id > b.id ? -1 : 1));
});

const displayedReleases = computed(() => {
    if (props.isFullPage || showAllReleases.value) {
        return sortedReleases.value;
    }
    // On homepage: skip the latest release (already shown in Latest Release section) + show next 8
    return sortedReleases.value.slice(1, showitems + 1);
});

const scrollToGrid = () => {
    const grid = document.getElementById('discogrid');
    if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>
