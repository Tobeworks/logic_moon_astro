<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            <button type="button" v-for="(image, index) in images" :key="index" @click="openLightbox(index)" class="bg-white shadow-lg hover:shadow-2xl transform transition-all duration-300 cursor-pointer group text-left p-0 border-0" data-aos="fade-up" :aria-label="`View image ${image.title}`">
                <img :src="image.src" :alt="image.alt" class="w-full h-64 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300 aspect-square" loading="lazy" />
            </button>
        </div>

        <div v-if="showLightbox" role="dialog" aria-modal="true" :aria-labelledby="`lightbox-title-${currentIndex}`" class="fixed inset-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center" @click.self="closeLightbox" @keydown.esc="closeLightbox" @keydown.left="prevImage" @keydown.right="nextImage" tabindex="0" ref="lightboxRef">
            <button type="button" @click.stop="closeLightbox" aria-label="Close lightbox" class="absolute top-5 right-8 text-white text-4xl font-bold hover:text-red-400 transition-colors duration-300 z-50">
                &times;
            </button>

            <img :src="images[currentIndex].src" :alt="images[currentIndex].alt" class="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl aspect-square" @click.stop />

            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <div class="bg-black bg-opacity-70 px-6 py-3 rounded-lg backdrop-blur-md">
                    <p class="text-xl font-medium" :id="`lightbox-title-${currentIndex}`">{{ images[currentIndex].title }}</p>
                </div>
            </div>

            <button type="button" @click.stop="prevImage" aria-label="Previous image" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-60 hover:bg-opacity-90 px-5 py-4 rounded-r-lg transition-all duration-300">
                &#10094;
            </button>

            <button type="button" @click.stop="nextImage" aria-label="Next image" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-60 hover:bg-opacity-90 px-5 py-4 rounded-l-lg transition-all duration-300">
                &#10095;
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
    images: {
        type: Array,
        required: true
    }
})

const showLightbox = ref(false)
const currentIndex = ref(0)
const lightboxRef = ref(null)

const openLightbox = async (index) => {
    currentIndex.value = index
    showLightbox.value = true
    document.body.style.overflow = 'hidden'

    await nextTick()
    if (lightboxRef.value) {
        lightboxRef.value.focus()
    }
}

const closeLightbox = () => {
    showLightbox.value = false
    document.body.style.overflow = 'auto'
}

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const handleKeydown = (e) => {
    if (!showLightbox.value) return

    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'auto'
})
</script>