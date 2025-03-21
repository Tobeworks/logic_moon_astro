<template>
    <TransitionRoot :show="isOpen" as="template" @click.outside="handleOutsideClick">
        <Dialog as="div" class="relative z-10" @close="setIsOpen(false)">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-primary-500 bg-opacity-50 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-scroll">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel ref="dialogPanel" class="relative transform overflow-hidden rounded-lg bg-primary text-secondary-300 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                            <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                <button type="button" class="rounded-md bg-primary text-gray-400 hover:text-gray-600" @click="setIsOpen(false)">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="sm:flex sm:items-start h-96 overflow-y-scroll">
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <div class="mt-2">
                                        <slot />
                                    </div>
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
import { ref, watch } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';


const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
});

const isOpenRef = ref(props.isOpen);
const dialogPanel = ref(null);

function setIsOpen(value) {
    isOpenRef.value = value;
    if (!value) {
        emit('close');
    }
}

function handleOutsideClick() {
    setIsOpen(false);
}

watch(isOpenRef, (newValue) => {
    if (!newValue) {
        emit('close');
    }
});

const emit = defineEmits(['close']);
</script>