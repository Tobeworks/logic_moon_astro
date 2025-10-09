<template>
    <div class="w-full">

        <div v-if="loading" class="flex items-center gap-3 px-4 py-3 bg-primary/30 rounded-lg">
            <Loader2 class="w-5 h-5 flex-shrink-0 animate-spin text-secondary-400" />
            <span class="text-secondary-400/80 text-sm">Loading streaming links...</span>
        </div>

        <div v-else-if="error" class="text-red-400/80 text-sm px-4 py-3 bg-red-500/10 rounded-lg">
            {{ error }}
        </div>

        <a v-else-if="pageUrl" :href="pageUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-4 py-3 bg-primary-500 border border-secondary-400 text-secondary-400 rounded-lg font-medium text-sm hover:bg-secondary-400 hover:text-primary-500 transition-all group">
            <Music class="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span>Stream on all platforms</span>
            <ExternalLink class="w-4 h-4 ml-auto flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { Music, ExternalLink, Loader2 } from 'lucide-vue-next'

const props = defineProps({
    url: {
        type: String,
        required: true
    }
})

const pageUrl = ref('')
const loading = ref(false)
const error = ref('')

const fetchSongLink = async () => {
    if (!props.url) {
        error.value = 'No URL provided'
        return
    }

    loading.value = true
    error.value = ''
    pageUrl.value = ''

    try {
        const apiUrl = `https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(props.url)}`
        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error('API request failed')
        }

        const data = await response.json()
        pageUrl.value = data.pageUrl
    } catch (err) {
        error.value = 'Could not load streaming links'
        console.error('Error fetching song link:', err)
    } finally {
        loading.value = false
    }
}

onMounted(() => fetchSongLink())

watch(() => props.url, fetchSongLink)
</script>