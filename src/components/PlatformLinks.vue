<template>
    <div v-if="active.length > 0 && variant === 'badge'" class="flex flex-wrap items-center gap-2">
        <a
            v-for="platform in active"
            :key="platform.key"
            :href="links[platform.key]"
            target="_blank"
            rel="noopener noreferrer"
            :title="platform.label"
            :aria-label="platform.label"
            class="flex items-center justify-center w-11 h-11 border border-on-surface/15 text-on-surface/50 hover:text-primary hover:border-primary/40 transition-colors"
        >
            <span v-if="platform.icon" class="w-4 h-4 overflow-hidden [&>svg]:h-full [&>svg]:w-auto [&>svg]:block [&>svg]:mx-auto" v-html="platform.icon" />
            <span v-else class="text-[0.5rem] font-bold uppercase tracking-wider">{{ platform.label.slice(0, 2) }}</span>
        </a>
    </div>

    <div v-if="active.length > 0 && variant === 'bare'" class="flex flex-wrap items-center gap-3">
        <a
            v-for="platform in active"
            :key="platform.key"
            :href="links[platform.key]"
            target="_blank"
            rel="noopener noreferrer"
            :title="platform.label"
            :aria-label="platform.label"
            class="inline-flex items-center text-on-surface/20 hover:text-primary transition-colors"
        >
            <span v-if="platform.icon" :class="[size, 'aspect-square block overflow-hidden [&>svg]:h-full [&>svg]:w-full [&>svg]:block']" v-html="platform.icon" />
            <span v-else class="text-[0.5rem] font-bold uppercase tracking-wider">{{ platform.label.slice(0, 2) }}</span>
        </a>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import bandcampIcon from '../assets/icons/bandcamp.svg?raw'
import spotifyIcon from '../assets/icons/spotify.svg?raw'
import appleIcon from '../assets/icons/itunes.svg?raw'
import amazonIcon from '../assets/icons/amazon.svg?raw'
import soundcloudIcon from '../assets/icons/soundcloud.svg?raw'

const props = defineProps({
    links: { type: Object, required: true },
    variant: { type: String, default: 'badge' },
    size: { type: String, default: 'h-4' },
})

const PLATFORMS = [
    { key: 'bandcamp', label: 'Bandcamp', icon: bandcampIcon },
    { key: 'spotify', label: 'Spotify', icon: spotifyIcon },
    { key: 'apple', label: 'Apple Music', icon: appleIcon },
    { key: 'amazon', label: 'Amazon Music', icon: amazonIcon },
    { key: 'soundcloud', label: 'SoundCloud', icon: soundcloudIcon },
    { key: 'deezer', label: 'Deezer', icon: null },
    { key: 'beatport', label: 'Beatport', icon: null },
]

const active = computed(() => PLATFORMS.filter((platform) => props.links[platform.key]))
</script>
