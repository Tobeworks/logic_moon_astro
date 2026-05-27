<template>
  <section class="py-32 px-8 md:px-16 bg-surface" :id="sectionId">
    <div class="container mx-auto">

      <!-- Header -->
      <div class="flex justify-between items-end mb-24" data-animate>
        <div v-if="showHeader">
          <span class="text-[0.625rem] uppercase tracking-[0.2em] text-primary mb-4 block">{{ headerLabel }}</span>
          <h2 class="text-4xl md:text-6xl font-bold tracking-tight">{{ title }}</h2>
        </div>
        <div v-else></div>

        <!-- View Toggle -->
        <div class="flex items-center gap-1">
          <button
            type="button"
            @click.prevent="activeView = 'grid'"
            :class="activeView === 'grid' ? 'text-primary' : 'text-on-surface/30 hover:text-on-surface/60'"
            class="p-2 transition-colors duration-200 cursor-pointer"
            aria-label="Grid view"
          >
            <LayoutGrid :size="18" />
          </button>
          <button
            type="button"
            @click.prevent="activeView = 'coverflow'"
            :class="activeView === 'coverflow' ? 'text-primary' : 'text-on-surface/30 hover:text-on-surface/60'"
            class="p-2 transition-colors duration-200 cursor-pointer"
            aria-label="Coverflow view"
          >
            <Layers :size="18" />
          </button>
        </div>
      </div>

      <!-- Grid View -->
      <div v-show="activeView === 'grid'">
        <DiscographyGrid
          :is-full-page="isFullPage"
          :section-id="sectionId"
        />
      </div>

      <!-- Coverflow View -->
      <div v-show="activeView === 'coverflow'">
        <DiscographyCoverflow
          :is-full-page="isFullPage"
          :section-id="sectionId"
          :active="activeView === 'coverflow'"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { LayoutGrid, Layers } from 'lucide-vue-next';
import DiscographyGrid from './DiscographyGrid.vue';
import DiscographyCoverflow from './DiscographyCoverflow.vue';

defineProps({
  isFullPage:  { type: Boolean, default: false },
  sectionId:   { type: String,  default: 'disco' },
  headerLabel: { type: String,  default: 'COLLECTION' },
  title:       { type: String,  default: 'DISCOGRAPHY' },
  showHeader:  { type: Boolean, default: true },
});

const activeView = ref('grid');
</script>
