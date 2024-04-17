<template>
    <section class="main-section bg-primary-500 text-secondary-400" id="disco">
        <div class="grid grid-cols-1 w-2/3 mx-auto">
            <div class="mobile-bg">
                <h2 class="text-left xl:text-start" id="headline-disco">Discography</h2>
                <p class="text-left xl:text-start text-light">
                    To listen to the release, click the cover to open the player.
                </p>
                <div id="discogrid" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-start">
                    <a href="#!" class="grid-item m-2 pointer" data-year="2022" :data-release-id="release.release_id" v-for="release in releases.sort((a, b) => (a.id > b.id) ? -1 : 1)" :key="release.id">
                        <img :src="`/images/covers/${release.cover}`" :alt="release.title">
                    </a>
                    <div class="js-shuffle-sizer"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import releases from '../releases.js';

onMounted(() => {
    getLatestRelease();
    klickDisco();
});

const getLatestRelease = () => {
    const res = releases[0];
    last_release.value = res;
    return res;
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
            covers[count].setAttribute('data-bs-toggle', 'modal');
            covers[count].setAttribute('data-bs-target', '#modalplayer');
        }
        count++;
    });

}
</script>