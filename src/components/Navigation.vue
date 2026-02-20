<template>
    <div class="">
        <header class="fixed inset-x-0 top-0 z-50 bg-primary-500/70 backdrop-blur-md border-b border-secondary-800 text-secondary-500" data-aos="fade-down">

            <nav class="flex items-center justify-between px-6 py-5 lg:px-10" aria-label="Main">
                <a href="/" class="flex items-center gap-3 text-secondary-200 hover:text-accent-400 transition-colors no-underline font-mono">
                    <span class="w-9 h-9 rounded-full border border-accent-600 bg-primary-800/60 shadow-inner"></span>
                    <span class="text-xs tracking-[0.4em] uppercase text-accent-500">Logic Moon</span>
                </a>
                <div class="hidden md:flex md:flex-1 md:justify-end">
                    <a v-for="(item, index) in navigation" :key="item.name" :href="item.href" class="flex items-center text-xs font-semibold tracking-[0.25em] leading-6 text-secondary-400 uppercase ml-5 hover:text-accent-400 scroller hover:no-underline font-mono">
                        <span>{{ item.name }}</span>
                        <div v-if="index < navigation.length - 1" class="h-4 ml-5"></div>
                    </a>
                </div>
            </nav>

            <div class="w-10 h-10 absolute md:hidden top-5 right-6">
                <button type="button" class="ring-0 border-0 text-secondary-200 hover:text-accent-400 transition-colors" @click="mobileMenuOpen = true" aria-label="Open main menu">
                    <svg viewBox="0 0 16 16" fill="currentColor" class="bi bi-list w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>

            <TransitionRoot :show="mobileMenuOpen" as="template">
                <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false">
                    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-primary-900/80" />
                    </TransitionChild>
                    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">

                        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-primary-900/10">
                            <DialogTitle class="sr-only">Main Menu</DialogTitle>
                            <div class="w-10 h-10 absolute md:hidden top-6 right-6">
                                <button type="button" @click="mobileMenuOpen = false" class="mb-4 inline-flex items-center justify-center p-2 rounded-full text-secondary-300 hover:text-accent-300 ring-0 border-0" aria-label="Close menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex flex-col items-center justify-center text-center h-screen">
                                <div class="-my-6 divide-y divide-secondary-800/30">
                                    <div class="py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href" class="scroller -mx-3 block rounded-lg px-3 py-2 font-semibold text-secondary-300 hover:text-accent-300 uppercase text-lg tracking-[0.2em] font-mono" @click="mobileMenuOpen = false">{{ item.name }}</a>
                            </div>
                        </div>
                    </div>
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </TransitionRoot>
        </header>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'
//import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
const prefix = ref('')

const navigation = computed(() => [
    { name: 'Home', href: `/` },
    { name: 'News', href: '/news' },
    { name: 'About', href: `${prefix.value}#about` },
    // { name: 'Music', href: `${prefix.value}#music` },
    { name: 'Playlists', href: `${prefix.value}#playlists` },
    { name: 'Discography', href: `${prefix.value}#disco` },
    { name: 'Cover Art', href: `/cover-art` },
    { name: 'Sounds', href: `/sounds` },
    { name: 'Label', href: `/label/the-moon-records` },
    { name: 'Contact', href: `${prefix.value}#contact` },
])

onMounted(() => {
    const currentPath = window.location.pathname;

    if (currentPath !== '/') {
        prefix.value = '/';
    }
    else {
        prefix.value = ''
    }
})


</script>
