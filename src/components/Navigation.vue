<template>
    <div class="">
        <header class="fixed inset-x-0 top-0 z-50 bg-surface/90 backdrop-blur-md text-on-surface" data-aos="fade-down">

            <nav class="flex items-center justify-between px-8 py-10" aria-label="Main">
                <Transition name="logo-slide">
                    <a v-if="logoVisible" href="/" class="text-xl font-bold tracking-tighter text-on-surface hover:text-primary no-underline uppercase" id="navigation-logo">
                        Logic Moon
                    </a>
                </Transition>
                <div class="hidden md:flex md:flex-1 md:justify-end gap-12 h-8 items-center">
                    <a v-for="(item, index) in navigation" :key="item.name" :href="item.href" 
                       class="uppercase tracking-[0.05em] text-sm font-medium transition-opacity duration-300 hover:no-underline"
                       :class="isActive(item.href) ? 'text-primary border-b border-primary pb-1' : 'text-on-surface opacity-60 hover:opacity-100'">
                        {{ item.name }}
                    </a>
                </div>
            </nav>

            <div class="w-10 h-10 absolute md:hidden top-9 right-6">
                <button type="button" class="ring-0 border-0 text-on-surface hover:text-primary transition-colors" @click="mobileMenuOpen = true" aria-label="Open main menu">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="square" stroke-linejoin="miter" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            <TransitionRoot :show="mobileMenuOpen" as="template">
                <Dialog as="div" class="fixed inset-0 z-100" @close="mobileMenuOpen = false">
                    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black/50" />
                    </TransitionChild>
                    <TransitionChild as="template" enter="transition-transform ease-out duration-300" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition-transform ease-in duration-300" leave-from="translate-x-0" leave-to="translate-x-full">
                        <DialogPanel class="fixed inset-0 overflow-y-auto flex flex-col items-center justify-center px-8 bg-surface-dim">
                            <button type="button" @click="mobileMenuOpen = false" class="absolute top-8 right-8 text-on-surface hover:text-primary transition-colors p-2 focus:outline-none focus-visible:outline-none" aria-label="Close menu">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8" aria-hidden="true">
                                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div class="text-center space-y-1">
                                <a v-for="(item, index) in navigation" :key="item.name" :href="item.href"
                                   class="nav-item block py-3 font-bold uppercase text-2xl tracking-widest transition-colors"
                                   :class="isActive(item.href) ? 'text-primary' : 'text-on-surface opacity-70 hover:opacity-100 hover:text-primary'"
                                   :style="{ animationDelay: `${100 + index * 50}ms` }"
                                   @click="mobileMenuOpen = false">{{ item.name }}</a>
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
const logoVisible = ref(true)
const currentPath = ref('')

const navigation = computed(() => [
    { name: 'Home', href: `/` },
    { name: 'News', href: '/news' },
    { name: 'About', href: `/logic-moon-bio` },
    { name: 'Discography', href: `/discography` },
    { name: 'Playlists', href: `${prefix.value}#playlists` },
    { name: 'Cover Art', href: `/cover-art` },
    { name: 'Sounds', href: `/sounds` },
    { name: 'Contact', href: `${prefix.value}#contact` },
])

const isActive = (href) => {
    if (!currentPath.value) return false
    if (href === '/') return currentPath.value === '/'
    if (href.startsWith('#') || href.startsWith('/#')) return false
    return currentPath.value.startsWith(href)
}

onMounted(() => {
    currentPath.value = window.location.pathname;

    if (currentPath.value !== '/') {
        prefix.value = '/';
    } else {
        prefix.value = ''
    }

    // On homepage mobile: hide logo until hero heading scrolls out of viewport
    if (currentPath.value === '/') {

        const isMobile = () => true

        if (isMobile()) {
            logoVisible.value = false
        }

        const heroHeading = document.querySelector('h1')
        if (heroHeading) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (!isMobile()) {
                        logoVisible.value = true
                        return
                    }
                    logoVisible.value = !entry.isIntersecting
                },
                { threshold: 0 }
            )
            observer.observe(heroHeading)
        }
    }
})


</script>

<style scoped>
@keyframes nav-item-enter {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.nav-item {
    animation: nav-item-enter 0.35s ease-out both;
}

.logo-slide-enter-active {
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.logo-slide-enter-from {
    opacity: 0;
    transform: translateY(-12px);
}
.logo-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
}
</style>
