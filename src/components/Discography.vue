<template>
    <section class="main-section bg-primary-500 text-secondary-400" id="disco">
        <div class="grid grid-cols-1 w-2/3 mx-auto">
            <div class="mobile-bg">
                <h2 class="text-left xl:text-start" id="headline-disco">Discography</h2>
                <div class="mx-auto my-12">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4">
                            <h2 class="text-left text-2xl">Latest release</h2>
                            <p class="text-left" v-if="last_release">
                                {{ last_release.text }}
                            </p>
                            <div class="text-left my-8">
                                <div class="mx-auto" v-if="last_release">
                                    <div class="flex flex-wrap -mx-4">
                                        <div class="w-full sm:w-1/2 px-4">
                                            <img :src="`/images/covers/${last_release.cover}`" alt="Cover image" class="w-full">
                                        </div>
                                        <div class="w-full sm:w-1/2 px-4 flex flex-col justify-end">
                                            <h3 class="text-left text-2xl my-2">{{ last_release.title }}</h3>
                                            <div>
                                                <iframe style="border: 0; width: 100%; height: 241px;" :src="`https://bandcamp.com/EmbeddedPlayer/album=${last_release.release_id}/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`" seamless>

                                                </iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="discogrid" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-start">
                    <a href="#!" class="grid-item m-2 pointer" data-year="2022" :data-release-id="release.release_id" v-for="release in releases.sort((a, b) => (a.id > b.id) ? -1 : 1)" :key="release.id" @click="openModalPlayer(release.release_id)">
                        <img :src="`/images/covers/${release.cover}`" :alt="release.title">
                    </a>
                    <div class="js-shuffle-sizer"></div>
                </div>
            </div>
        </div>
    </section>
    <Modal :is-open="openPlayer" @close="openPlayer = false">
        <div class="mt-10">
            <iframe :src="`https://bandcamp.com/EmbeddedPlayer/album=${modalPlayerReleaseId}/size=large/bgcol=000000/linkcol=ffffff/artwork=small/transparent=true/`" height="300" width="400"></iframe>
        </div>
    </Modal>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import releases from '../releases.js';
import Modal from './Modal.vue';

const last_release = ref();
const openPlayer = ref(false);
const modalPlayerReleaseId = ref();

onMounted(() => {
    getLatestRelease();
    klickDisco();
});

const getLatestRelease = () => {
    const res = releases[0];
    last_release.value = res;
    //console.log(last_release.value);
    return res;
}

const openModalPlayer = (release_id) => {
    if (release_id === '')  return openPlayer.value = false;
    openPlayer.value = true;
    modalPlayerReleaseId.value = release_id;
}

const klickDisco = () => {
    const covers = document.querySelectorAll('.grid-item');
    const modalplayer = document.getElementById('modalplayerframe');


    let count = 0;
    covers.forEach(element => {
        if (element.attributes[2].value !== '') {
            covers[count].addEventListener('click', () => {

                modalplayer.setAttribute('src', `https://bandcamp.com/EmbeddedPlayer/album=${element.getAttribute('data-release-id')}/size=large/bgcol=000000/linkcol=ffffff/artwork=small/transparent=true/`);
            })

            covers[count].classList.add('pointer');
        }
        count++;
    });

}
</script>