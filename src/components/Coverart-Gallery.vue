<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <button 
              type="button" 
              v-for="(image, index) in images" 
              :key="index" 
              @click="openLightbox(index)" 
              class="bg-surface-container-lowest group cursor-pointer text-left p-0 border-0" 
              data-aos="fade-up" 
              :data-aos-delay="index * 10"
              :aria-label="`View image ${image.title}`"
            >
                <div class="aspect-square overflow-hidden">
                    <img 
                      :src="image.src" 
                      :alt="image.alt" 
                      class="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" 
                      loading="lazy" 
                    />
                </div>
            </button>
        </div>

        <!-- Lightbox Modal -->
        <div 
          v-if="showLightbox" 
          role="dialog" 
          aria-modal="true" 
          :aria-labelledby="`lightbox-title-${currentIndex}`" 
          class="fixed inset-0 z-50 bg-surface-dim flex items-center justify-center" 
          @click.self="closeLightbox" 
          @keydown.esc="closeLightbox" 
          @keydown.left="prevImage" 
          @keydown.right="nextImage" 
          tabindex="0" 
          ref="lightboxRef"
        >
            <!-- Close Button -->
            <button 
              type="button" 
              @click.stop="closeLightbox" 
              aria-label="Close lightbox" 
              class="absolute top-8 right-8 text-on-surface hover:text-primary transition-colors z-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Image -->
            <img 
              :src="images[currentIndex].src" 
              :alt="images[currentIndex].alt" 
              class="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain" 
              @click.stop 
            />

            <!-- Previous Button -->
            <button 
              type="button" 
              @click.stop="prevImage" 
              aria-label="Previous image" 
              class="absolute left-8 top-1/2 transform -translate-y-1/2 text-on-surface hover:text-primary transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                </svg>
            </button>

            <!-- Next Button -->
            <button 
              type="button" 
              @click.stop="nextImage" 
              aria-label="Next image" 
              class="absolute right-8 top-1/2 transform -translate-y-1/2 text-on-surface hover:text-primary transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
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
