<template>
    <TransitionRoot :show="isOpen" as="template">
        <Dialog as="div" class="relative z-50" @close="handleClose">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" @click="handleClose" />
            </TransitionChild>

            <div class="fixed inset-0 z-50 overflow-hidden">
                <div class="flex min-h-full items-end justify-center">
                    <TransitionChild as="template" enter="ease-out duration-500" enter-from="translate-y-full" enter-to="translate-y-0" leave="ease-in duration-300" leave-from="translate-y-0" leave-to="translate-y-full">
                        <DialogPanel class="relative w-full bg-primary-500 shadow-2xl transform transition-all h-[95vh] md:h-[85vh] md:rounded-t-3xl overflow-hidden flex flex-col">

                            <button type="button" class="absolute right-4 top-4 md:right-6 md:top-6 z-10 rounded-full border border-secondary-400 bg-primary-500 p-3 md:p-2 text-secondary-400 hover:bg-secondary-400 hover:text-primary-500 transition-all shadow-lg" @click="handleClose" aria-label="Close modal">
                                <XMarkIcon class="h-7 w-7 md:h-6 md:w-6" />
                            </button>

                            <div class="flex-1 overflow-y-auto overscroll-contain px-4 py-6 md:px-8 md:py-10" @wheel.stop @touchmove.stop>
                                <div class="max-w-7xl mx-auto">
                                    <slot />
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['close']);

let scrollY = 0;

const lockScroll = () => {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'scroll';
};

const unlockScroll = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, scrollY);
};

const handleClose = () => {
    emit('close');
};

watch(() => props.isOpen, (isOpen) => {
    if (isOpen) {
        lockScroll();
    } else {
        unlockScroll();
    }
});

onMounted(() => {
    if (props.isOpen) {
        lockScroll();
    }
});

onUnmounted(() => {
    unlockScroll();
});
</script>