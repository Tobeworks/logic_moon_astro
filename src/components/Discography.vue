<template>
    <section class="main-section bg-primary-500 text-secondary-400" id="disco">
        <div class="grid grid-cols-1 w-full md:w-2/3 mx-auto">
            <div class="mobile-bg">
                <h2 class="text-left xl:text-start" id="headline-disco" data-aos="fade-up">Discography</h2>

                <div class="mx-auto my-12">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4">
                            <h2 class="text-left text-2xl" data-aos="fade-up">Latest release</h2>
                            <p class="text-left" data-aos="fade-up" v-if="last_release">{{ last_release.text }}</p>
                            <div class="text-left my-8">
                                <div class="mx-auto" v-if="last_release">
                                    <div class="flex flex-wrap -mx-4">
                                        <div class="w-full sm:w-1/2 px-4">
                                            <img :src="`/images/covers/${last_release.cover}`" alt="Cover image" class="w-full" data-aos="fade-up" />
                                        </div>
                                        <div class="w-full sm:w-1/2 px-4 flex flex-col justify-end">
                                            <h3 class="text-left text-2xl my-2" data-aos="fade-up">{{ last_release.title }}</h3>
                                            <div>
                                                <iframe style="border: 0; width: 100%; height: 241px;" :src="`https://bandcamp.com/EmbeddedPlayer/album=${last_release.release_id}/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`" seamless data-aos="fade-up">
                                                </iframe>
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
                        <a href="#!" class="grid-item m-2 pointer" :data-year="release.year" :data-release-id="release.release_id" v-for="(release, index) in sortedReleases.slice(0, showitems)" :key="release.id" @click="openModalPlayer(release.release_id)">
                            <img :src="`/images/covers/${release.cover}`" :alt="release.title" data-aos="fade-up" />
                        </a>
                    </div>
                    <div class="flex justify-center">
                        <button @click="showAllReleases = true" class="bg-primary hover:bg-primary text-secondary-400 font-bold py-2 px-4 rounded">
                            {{ `Show all ${sortedReleases.length} releases` }}
                        </button>
                    </div>
                </div>

                <div v-else>
                    <div id="discogrid" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-start">
                        <a href="#!" class="grid-item m-2 pointer" data-year="2022" :data-release-id="release.release_id" v-for="release in sortedReleases" :key="release.id" @click="openModalPlayer(release.release_id)">
                            <img :src="`/images/covers/${release.cover}`" :alt="release.title" data-aos="fade-up" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Modal :is-open="openPlayer" @close="openPlayer = false">
        <div class="mt-10">
            <iframe :src="`https://bandcamp.com/EmbeddedPlayer/album=${modalPlayerReleaseId}/size=large/bgcol=000000/linkcol=ffffff/artwork=small/transparent=true/`" height="300" class=" w-auto"></iframe>
        </div>
    </Modal>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import releases from '../releases.js';
import Modal from './Modal.vue';

const last_release = ref();
const openPlayer = ref(false);
const modalPlayerReleaseId = ref();
const showAllReleases = ref(false);
const showitems = 10

onMounted(() => {
    getLatestRelease();
});

const getLatestRelease = () => {
    const res = releases[0];
    last_release.value = res;
    return res;
};

const openModalPlayer = (release_id) => {
    if (release_id === '') return (openPlayer.value = false);
    openPlayer.value = true;
    modalPlayerReleaseId.value = release_id;
};

const sortedReleases = computed(() => {
    return releases.sort((a, b) => (a.id > b.id ? -1 : 1));
});
</script>