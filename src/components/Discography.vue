<template>
    <section class="main-section bg-primary-500 text-secondary-400" id="disco">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 w-full md:w-2/3 mx-auto">
                <div class="mobile-bg">
                    <h2 class="text-left xl:text-start" id="headline-disco" data-aos="fade-up">Discography</h2>

                    <div class="mx-auto my-12">
                        <div class="flex flex-wrap -mx-4">
                            <div class="w-full px-4" v-if="last_release">
                                <h3 class="text-left text-xl" data-aos="fade-up">Latest release</h3>
                                <h2 class="text-left text-2xl my-2" data-aos="fade-up">{{ last_release.title }}</h2>
                                <p class="text-left" data-aos="fade-up" v-if="last_release">{{ last_release.text }}</p>
                                <div class="text-left my-8">
                                    <div class="mx-auto">
                                        <div class="flex flex-wrap -mx-4">
                                            <div class="w-full sm:w-1/2 px-4">
                                                <div class="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:brightness-100 brightness-90">
                                                    <img :src="`/images/covers/${last_release.cover}`" alt="Cover image" class="w-full transition-all" data-aos="fade-up" />
                                                </div>
                                            </div>
                                            <div class="w-full sm:w-1/2 px-4 flex flex-col justify-end">
                                                <div>
                                                    <iframe class="border-0 w-full h-60" :src="`https://bandcamp.com/EmbeddedPlayer/album=${last_release.release_id}/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`" seamless data-aos="fade-up" title="Bandcamp Player"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="!showAllReleases">
                        <div id="discogrid" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-start">
                            <button type="button" class="grid-item m-2 pointer relative overflow-hidden transition-transform duration-300 hover:scale-105 border-0 p-0" :data-year="release.year" :data-release-id="release.release_id" v-for="(release, index) in sortedReleases.slice(0, showitems)" :key="release.id" @click="openModalPlayer(release)" :aria-label="`Play album ${release.title}`">
                                <img :src="`/images/covers/${release.cover}`" :alt="release.title" class="w-full brightness-75 transition-all duration-300 group-hover:brightness-100" data-aos="fade-up" />
                            </button>
                        </div>
                        <div class="flex justify-center">
                            <button @click="showAllReleases = true" class="bg-primary hover:bg-primary text-secondary-400 font-bold py-2 px-4 rounded">
                                {{ `Show all ${sortedReleases.length} releases` }}
                            </button>
                        </div>
                    </div>

                    <div v-else>
                        <div id="discogrid" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-start">
                            <button type="button" class="grid-item m-2 pointer relative overflow-hidden transition-transform duration-300 hover:scale-105 border-0 p-0" :data-year="release.year" :data-release-id="release.release_id" v-for="release in sortedReleases" :key="release.id" @click="openModalPlayer(release)" :aria-label="`Play album ${release.title}`">
                                <img :src="`/images/covers/${release.cover}`" :alt="release.title" class="w-full brightness-75 transition-all duration-300 group-hover:brightness-100" data-aos="fade-up" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Modal :is-open="openPlayer" @close="openPlayer = false">
        <div v-if="selectedRelease" class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

            <div class="order-1">
                <div class="relative overflow-hidden rounded-lg shadow-2xl">
                    <img :src="`/images/covers/${selectedRelease.cover}`" :alt="selectedRelease.title" class="w-full" />
                </div>
            </div>

            <div class="order-2 flex flex-col space-y-6">

                <div>
                    <div class="text-sm text-secondary-400/70 mb-2">{{ selectedRelease.year }}</div>
                    <h2 class="text-2xl md:text-3xl font-bold text-secondary-400 mb-4">{{ selectedRelease.title }}</h2>

                    <div v-if="selectedRelease.bandcamp" class="mb-6">
                        <AlbumLinks :url="selectedRelease.bandcamp" />
                    </div>

                    <p v-if="selectedRelease.text" class="text-secondary-400/90 leading-relaxed">{{ selectedRelease.text }}</p>
                </div>

                <div v-if="selectedRelease.release_id" class="bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                    <iframe :src="`https://bandcamp.com/EmbeddedPlayer/album=${selectedRelease.release_id}/size=large/bgcol=000000/linkcol=ffffff/artwork=small/transparent=true/`" class="w-full border-0" style="height: 300px;" seamless title="Bandcamp Player"></iframe>
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

const last_release = ref();
const openPlayer = ref(false);
const selectedRelease = ref(null);
const showAllReleases = ref(false);
const showitems = 12;

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
</script>