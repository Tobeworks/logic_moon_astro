<template>
    <section class="py-48 px-8 md:px-16 bg-surface" id="contact" aria-labelledby="licensing-contact-heading">
        <div class="max-w-4xl mx-auto">
            <div class="mb-24 text-center" data-animate>
                <span class="text-[0.625rem] uppercase tracking-[0.2em] text-primary mb-4 block">
                    LICENSING REQUEST
                </span>
                <h2 id="licensing-contact-heading" class="text-4xl md:text-7xl font-bold tracking-tight uppercase">
                    GET LICENSED
                </h2>
            </div>

            <form class="space-y-16" name="licensing-form" @submit.prevent="sendForm" action="#contact" method="post" aria-label="Licensing request form">

                <!-- Personal Info -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div class="relative group" data-animate>
                        <label for="first_name" class="sr-only">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            v-model="form.first_name"
                            id="first_name"
                            required
                            :disabled="form_disabled"
                            placeholder="First Name"
                            autocomplete="given-name"
                            class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface"
                            aria-required="true"
                        />
                    </div>
                    <div class="relative group" data-animate>
                        <label for="last_name" class="sr-only">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            v-model="form.last_name"
                            id="last_name"
                            required
                            :disabled="form_disabled"
                            placeholder="Last Name"
                            autocomplete="family-name"
                            class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface"
                            aria-required="true"
                        />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div class="relative group" data-animate>
                        <label for="email" class="sr-only">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            v-model="form.email"
                            id="email"
                            required
                            :disabled="form_disabled"
                            placeholder="Email"
                            autocomplete="email"
                            class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface"
                            aria-required="true"
                        />
                    </div>
                    <div class="relative group" data-animate>
                        <label for="address" class="sr-only">Address</label>
                        <input
                            type="text"
                            name="address"
                            v-model="form.address"
                            id="address"
                            required
                            :disabled="form_disabled"
                            placeholder="Address"
                            autocomplete="street-address"
                            class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface"
                            aria-required="true"
                        />
                    </div>
                </div>

                <div class="relative group" data-animate>
                    <label for="homepage" class="sr-only">Website (optional)</label>
                    <input
                        type="url"
                        name="homepage"
                        v-model="form.homepage"
                        id="homepage"
                        :disabled="form_disabled"
                        placeholder="Website (optional)"
                        autocomplete="url"
                        class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface"
                    />
                </div>

                <!-- Track Info -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div class="relative group" data-animate>
                        <label for="track_name" class="sr-only">Track Title</label>
                        <input
                            type="text"
                            name="track_name"
                            v-model="form.track_name"
                            id="track_name"
                            required
                            :disabled="form_disabled"
                            placeholder="Track Title"
                            class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface"
                            aria-required="true"
                        />
                    </div>
                    <div class="relative group" data-animate>
                        <label for="freesound_ref" class="sr-only">Freesound URL(s) or ID(s)</label>
                        <input
                            type="text"
                            name="freesound_ref"
                            v-model="form.freesound_ref"
                            id="freesound_ref"
                            required
                            :disabled="form_disabled"
                            placeholder="Freesound URL(s) or ID(s)"
                            class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface"
                            aria-required="true"
                        />
                    </div>
                </div>

                <div class="relative group" data-animate>
                    <label for="planned_use" class="sr-only">Planned Use</label>
                    <textarea
                        rows="4"
                        name="planned_use"
                        v-model="form.planned_use"
                        required
                        :disabled="form_disabled"
                        id="planned_use"
                        placeholder="Planned Use: describe how you intend to use the track"
                        class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface resize-none"
                        aria-required="true"
                    ></textarea>
                </div>

                <!-- License Type -->
                <div class="relative group" data-animate>
                    <label for="license_type" class="block text-[0.625rem] uppercase tracking-[0.2em] text-on-surface/50 mb-3">License Type</label>
                    <select
                        name="license_type"
                        v-model="form.license_type"
                        id="license_type"
                        required
                        :disabled="form_disabled"
                        class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal text-on-surface appearance-none cursor-pointer"
                        aria-required="true"
                    >
                        <option value="" disabled>Select a license type</option>
                        <option value="free">Free, Non-Commercial (€0)</option>
                        <option value="indie">Indie License (€15)</option>
                        <option value="commercial">Commercial License (€49)</option>
                        <option value="sync">Sync / Broadcast (on request)</option>
                    </select>
                </div>

                <div class="flex justify-center" data-animate>
                    <button
                        type="submit"
                        class="flex items-center gap-4 text-sm font-bold tracking-wide text-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                        :class="form_disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary-container'"
                        :disabled="form_disabled"
                        aria-label="Submit licensing request"
                    >
                        <ArrowPathIcon v-if="form_disabled" class="w-5 h-5 text-primary animate-spin" />
                        <span v-if="form_disabled">Sending...</span>
                        <template v-else>
                            <span>Submit Request</span>
                            <ArrowRightIcon class="w-5 h-5" />
                        </template>
                    </button>
                </div>
            </form>

            <div v-if="msg_success" class="bg-surface-container border border-outline-variant/20 text-on-surface px-4 py-3 mt-8 text-sm tracking-normal" role="alert" aria-live="polite">
                Your licensing request has been sent. I'll get back to you soon.
            </div>
            <div v-if="msg_error" class="bg-surface-container border border-outline-variant/20 text-primary px-4 py-3 mt-8 text-sm tracking-normal" role="alert" aria-live="polite">
                Something went wrong. Please try again or contact me directly.
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'
import { ref, reactive } from 'vue'
import { ArrowPathIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const form_disabled = ref(false)
const msg_error = ref(false)
const msg_success = ref(false)

const form = reactive({
    first_name: '',
    last_name: '',
    address: '',
    email: '',
    homepage: '',
    track_name: '',
    freesound_ref: '',
    planned_use: '',
    license_type: '',
})

function resetForm() {
    Object.keys(form).forEach(k => form[k] = '')
}

function sendForm() {
    form_disabled.value = true
    msg_error.value = false
    msg_success.value = false

    axios.post('https://api.tobeworks.de/logic-moon/licensing', { ...form })
        .then(response => {
            if (response.data.status === 1) {
                msg_success.value = true
                resetForm()
            } else {
                msg_error.value = true
            }
        })
        .catch(() => {
            msg_error.value = true
        })
        .finally(() => {
            form_disabled.value = false
        })
}
</script>
