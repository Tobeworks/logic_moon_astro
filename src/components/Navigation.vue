<template>
    <div class="">
        <header class="fixed md:shadow-xl inset-x-0 top-0 z-50 bg-primary-600 bg-opacity-0 md:bg-opacity-50 md:backdrop-blur-sm text-secondary-500" data-aos="fade-down">

            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class=" hidden md:flex md:flex-1 md:justify-center">
                    <a v-for="(item, index) in navigation" :key="item.name" :href="item.href" class="flex items-center text-base font-semibold leading-6 text-secondary-500 uppercase ml-3 hover:text-secondary-100 scroller hover:no-underline">
                        <span>{{ item.name }}</span>
                        <div v-if="index < navigation.length - 1" class=" h-5 ml-3"></div>
                    </a>
                </div>
            </nav>

            <div class="w-10 h-10 absolute md:hidden top-6 right-6">
                <button class="ring-0 border-0" @click="mobileMenuOpen = true" aria-label="Navigation-Button">
                    <svg viewBox="0 0 16 16" fill="currentColor" class="bi bi-list text-light w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>

            <TransitionRoot :show="mobileMenuOpen" as="template">
                <Dialog as="div" class="lg:hidden">
                    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-gray-900/80" />
                    </TransitionChild>
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-y-full" enter-to="translate-y-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-y-0" leave-to="-translate-y-full">

                        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div class="w-10 h-10 absolute md:hidden top-6 right-6">
                                <button @click="mobileMenuOpen = false" class="mb-4 inline-flex items-center justify-center p-2 rounded-full text-secondary-500 hover:text-secondary-200 ring-0 border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex flex-col items-center justify-center text-center h-screen">
                                <div class="-my-6 divide-y divide-gray-500/10">
                                    <div class="py-6">
                                        <a v-for="item in navigation" :key="item.name" :href="item.href" class="scroller -mx-3 block rounded-lg px-3 py-2 font-semibold text-secondary-600 hover:text-secondary-200 uppercase text-lg" @click="mobileMenuOpen = false">{{ item.name }}</a>
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
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
//import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
const prefix = ref('')

const navigation = computed(() => [
    { name: 'Home', href: `/` },
    { name: 'About', href: `${prefix.value}#about` },
    // { name: 'Music', href: `${prefix.value}#music` },
    { name: 'Playlists', href: `${prefix.value}#playlists` },
    { name: 'Discography', href: `${prefix.value}#disco` },
    { name: 'Cover Art', href: `/cover-art` },
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