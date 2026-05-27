<template>
  <div>
    <!-- Coverflow Stage -->
    <div
      class="relative flex items-center justify-center overflow-hidden"
      style="height: 440px; perspective: 1200px;"
      @wheel.prevent="onWheel"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
    >
      <div
        v-for="(release, i) in visibleReleases"
        :key="release.id"
        class="absolute cursor-pointer select-none"
        style="width: 260px; transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.35s ease;"
        :style="cardStyle(i)"
        @click="onCardClick(i, release)"
      >
        <div class="aspect-square overflow-hidden">
          <img
            :src="`/images/covers/${release.cover}`"
            :alt="release.title"
            loading="lazy"
            class="w-full h-full object-cover transition-all duration-500"
            :class="i === centerIndex ? 'grayscale-0' : 'grayscale-50'"
          />
        </div>
        <div
          class="mt-4 text-center transition-opacity duration-300"
          :class="i === centerIndex ? 'opacity-100' : 'opacity-0'"
        >
          <h4 class="font-bold text-sm text-on-surface truncate px-2">{{ release.title }}</h4>
          <p class="text-xs opacity-50 uppercase tracking-widest mt-1 text-on-surface">{{ release.year }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex items-center justify-center gap-6 mt-6">
      <button
        @click="prev"
        :disabled="currentIndex === 0"
        class="p-2 text-on-surface/40 hover:text-on-surface disabled:opacity-20 transition-colors duration-200"
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <span class="text-xs uppercase tracking-widest text-on-surface/30 tabular-nums">
        {{ currentIndex + 1 }} / {{ sortedReleases.length }}
      </span>
      <button
        @click="next"
        :disabled="currentIndex === sortedReleases.length - 1"
        class="p-2 text-on-surface/40 hover:text-on-surface disabled:opacity-20 transition-colors duration-200"
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  </div>

  <!-- Modal Player -->
  <Modal :is-open="openPlayer" @close="openPlayer = false">
    <div v-if="selectedRelease" class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="order-1">
        <div class="bg-surface-container-lowest overflow-hidden">
          <img :src="`/images/covers/${selectedRelease.cover}`" :alt="selectedRelease.title" class="w-full aspect-square object-cover" />
        </div>
      </div>
      <div class="order-2 flex flex-col space-y-6">
        <div>
          <div class="text-sm text-on-surface/60 mb-2 font-mono uppercase tracking-[0.2em]">{{ selectedRelease.year }}</div>
          <h2 class="text-2xl md:text-3xl font-bold text-on-surface mb-4">{{ selectedRelease.title }}</h2>
          <div v-if="selectedRelease.bandcamp" class="mb-6">
            <AlbumLinks :url="selectedRelease.bandcamp" />
          </div>
          <p v-if="selectedRelease.text" class="text-on-surface-variant font-light leading-relaxed">{{ selectedRelease.text }}</p>
        </div>
        <div v-if="selectedRelease.release_id" class="bg-surface-container-lowest p-4">
          <iframe :src="`https://bandcamp.com/EmbeddedPlayer/album=${selectedRelease.release_id}/size=large/bgcol=141312/linkcol=e3c7a9/artwork=small/transparent=true/`" class="w-full border-0" style="height: 300px;" seamless title="Bandcamp Player"></iframe>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import releases from '../releases.js';
import Modal from './Modal.vue';
import AlbumLinks from './Album-Links.vue';

const props = defineProps({
  isFullPage: { type: Boolean, default: false },
  sectionId:  { type: String,  default: 'disco' },
  active:     { type: Boolean, default: false },
});

const currentIndex    = ref(0);
const openPlayer      = ref(false);
const selectedRelease = ref(null);

const WINDOW = 3;

const sortedReleases = computed(() => [...releases].sort((a, b) => b.id - a.id));

const centerIndex = computed(() => Math.min(WINDOW, currentIndex.value));

const visibleReleases = computed(() => {
  const all   = sortedReleases.value;
  const start = Math.max(0, currentIndex.value - WINDOW);
  const end   = Math.min(all.length - 1, currentIndex.value + WINDOW);
  return all.slice(start, end + 1);
});

function cardStyle(i) {
  const offset    = i - centerIndex.value;
  const absOffset = Math.abs(offset);
  const translateX = offset * 210;
  const rotateY    = offset * -42;
  const scale      = Math.max(0.5, 1 - absOffset * 0.15);
  const opacity    = Math.max(0.15, 1 - absOffset * 0.28);
  const zIndex     = 10 - absOffset;
  return {
    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity,
    zIndex,
    transformOrigin: 'center center',
  };
}

function prev() {
  if (currentIndex.value > 0) currentIndex.value--;
}
function next() {
  if (currentIndex.value < sortedReleases.value.length - 1) currentIndex.value++;
}

// Wheel: cooldown 350ms so trackpad doesn't skip multiple items
let lastWheelTime = 0;
function onWheel(e) {
  const now   = Date.now();
  if (now - lastWheelTime < 350) return;
  const delta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  if (delta > 5)       { next(); lastWheelTime = now; }
  else if (delta < -5) { prev(); lastWheelTime = now; }
}

// Touch: only react to horizontal swipes (ignore vertical scroll)
let touchStartX = 0;
let touchStartY = 0;
function onTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}
function onTouchEnd(e) {
  const dx = touchStartX - e.changedTouches[0].clientX;
  const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
  // Only handle clearly horizontal swipes
  if (Math.abs(dx) < dy * 1.2 || Math.abs(dx) < 60) return;
  if (dx > 0) next();
  else        prev();
}

// Keyboard
function onKeyDown(e) {
  if (!props.active) return;
  if (e.key === 'ArrowLeft')  prev();
  if (e.key === 'ArrowRight') next();
}

function onCardClick(i, release) {
  const offset = i - centerIndex.value;
  if (offset !== 0) {
    currentIndex.value += offset;
    return;
  }
  if (!release.release_id) return;
  selectedRelease.value = release;
  openPlayer.value = true;
}

onMounted(()   => window.addEventListener('keydown', onKeyDown));
onUnmounted(() => window.removeEventListener('keydown', onKeyDown));
</script>
