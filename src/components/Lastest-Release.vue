<template>
    <section class="main-section" id="latest_release">
        <div class="container">
            <div class="grid grid-cols-1">
                <div>
                    <h2 class="text-left xl:text-start">Latest release</h2>
                    <p class="text-left xl:text-start text-justify" v-if="last_release">
                        {{ last_release.text }}
                    </p>
                    <div class="text-left xl:text-start text-justify my-4" v-if="last_release">
                        <div class="container">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <img :src="require(`@/assets/img/covers/${last_release.cover}`)" class="imgleft" alt="Cover image">
                                </div>
                                <div>
                                    <h3 class="text-left xl:text-start">{{ last_release.title }}</h3>
                                    <div>
                                        <iframe style="border: 0; width: 100%; height: 241px;" :src="`https://bandcamp.com/EmbeddedPlayer/album=${last_release.release_id}/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`" seamless></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import releases from '../releases';
</script>