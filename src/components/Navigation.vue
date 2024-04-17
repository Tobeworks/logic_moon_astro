<template>
    <div class="">
        <header class="fixed md:shadow-xl inset-x-0 top-0 z-50 bg-primary-600 bg-opacity-0 md:bg-opacity-50 md:backdrop-blur-sm text-secondary-500">

            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="hidden lg:flex lg:flex-1 lg:justify-center">
                    <a v-for="(item, index) in navigation" :key="item.name" :href="item.href" class="flex items-center text-base font-semibold leading-6 text-secondary-600 uppercase ml-3 hover:text-secondary-100 scroller">
                        <span>{{ item.name }}</span>
                        <div v-if="index < navigation.length - 1" class=" h-5 ml-3"></div>
                    </a>
                </div>
            </nav>

            <TransitionRoot :show="mobileMenuOpen" as="template">
                <Dialog as="div" class="lg:hidden">

                    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-gray-900/80" />
                    </TransitionChild>
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-y-full" enter-to="translate-y-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-y-0" leave-to="-translate-y-full">
                        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div class="flex items-center justify-between text-secondary-500">
                                <a href="tel:+436765019239" class="flex items-center -m-1.5 p-1.5">
                                    <span class="sr-only">Kitz Concierge</span>
                                    <PhoneIcon class="h-6 w-6 mr-2" aria-hidden="true" />
                                    <div>+43 676 5019239</div>
                                </a>
                                <button type="button" class="-m-2.5 rounded-md p-2.5 text-secondary-500" @click="mobileMenuOpen = false">
                                    <span class="sr-only">Schließen</span>
                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            <div class="flex flex-col items-center justify-center text-center h-screen">
                                <div class="-my-6 divide-y divide-gray-500/10">
                                    <div class="space-y-2 flex items-center justify-center">
                                        <img class="h-8 w-auto" :src="keys.src" alt="Kitz Concierge" />
                                    </div>
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
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/vue/24/outline'


const prefix = ref('')

const navigation = computed(() => [
    { name: 'Home', href: `${prefix.value}#` },
    { name: 'About', href: `${prefix.value}#about` },
    { name: 'Music', href: `${prefix.value}#music` },
    { name: 'Mastering', href: `${prefix.value}#mastering` },
    { name: 'Discography', href: `${prefix.value}#disco` },
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

const mobileMenuOpen = ref(false)
</script>