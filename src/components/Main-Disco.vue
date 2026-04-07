<template>
    <section class="py-20 bg-primary-600" id="disco">
        <div class="container">
            <div class="grid grid-cols-1">
                <div class="mobile-bg">
                    <h2 class="text-left xl:text-start" id="headline-disco">
                        Discography
                    </h2>
                    <p class="text-left xl:text-start text-justify text-light">
                        To listen to the release, click the cover to open the player.
                    </p>
                    <div id="discogrid" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-start">
                        <a href="#!" class="m-2 block overflow-hidden transition-transform duration-300 hover:scale-105 grayscale hover:grayscale-0" data-year="2022" :data-release-id="release.release_id" v-for="release in releases.sort((a, b) => (a.id > b.id) ? -1 : 1)" :key="release.id">
                            <img :src="require(`@/assets/img/covers/${release.cover}`)" :alt="release.title" />
                        </a>
                        <div class="js-shuffle-sizer"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import releases from '../releases';
</script>
