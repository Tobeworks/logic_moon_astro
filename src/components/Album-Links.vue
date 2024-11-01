<template>
    <div class="flex flex-col items-center gap-4 p-4">
        <!-- Loading Spinner -->
        <div v-if="loading" class="flex justify-center items-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-100"></div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="text-red-500">
            {{ error }}
        </div>

        <!-- Result -->
        <div v-if="pageUrl" class="w-full max-w-md">
            <a :href="pageUrl" target="_blank" class="break-all hover:underline">
                Links to all other platforms
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'

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
        const response = await axios.get('https://api.song.link/v1-alpha.1/links', {
            params: {
                url: props.url
            }
        })

        pageUrl.value = response.data.pageUrl
    } catch (err) {
        error.value = 'Failed to fetch song link. Please check the URL and try again.'
        console.error('Error fetching song link:', err)
    } finally {
        loading.value = false
    }
}

// Fetch on mount
onMounted(fetchSongLink)

// Fetch when URL prop changes
watch(() => props.url, fetchSongLink)
</script>