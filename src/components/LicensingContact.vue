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
                            placeholder="Freesound URL(s) or ID(s) of the sound(s)"
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
                        <option value="indie">Indie License (€20)</option>
                        <option value="commercial">Commercial License (€60)</option>
                        <option value="sync">Sync / Broadcast (on request)</option>
                    </select>
                </div>

                <div class="relative group" data-animate>
                    <label class="flex items-start gap-3 text-sm font-light text-on-surface/70 cursor-pointer">
                        <input
                            type="checkbox"
                            name="privacy_consent"
                            v-model="form.privacy_consent"
                            required
                            :disabled="form_disabled"
                            class="mt-1 accent-primary"
                            aria-required="true"
                        />
                        <span>
                            I agree to the processing of my data as described in the
                            <a href="/datenschutz" class="underline text-primary" target="_blank" rel="noopener noreferrer">privacy policy</a>.
                        </span>
                    </label>
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

    <Modal :is-open="free_modal_open" @close="free_modal_open = false">
        <div class="max-w-xl mx-auto text-on-surface py-8">
            <span class="text-[0.625rem] uppercase tracking-[0.2em] text-primary mb-4 block">License Granted</span>
            <h3 class="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-8">Free / Non-Commercial License</h3>

            <div class="grid grid-cols-2 gap-6 text-sm mb-10">
                <div>
                    <div class="text-xs uppercase tracking-widest opacity-60 mb-1">Licensee</div>
                    <div>{{ granted.first_name }} {{ granted.last_name }}</div>
                </div>
                <div>
                    <div class="text-xs uppercase tracking-widest opacity-60 mb-1">Email</div>
                    <div>{{ granted.email }}</div>
                </div>
                <div>
                    <div class="text-xs uppercase tracking-widest opacity-60 mb-1">Track</div>
                    <div>{{ granted.track_name }}</div>
                </div>
                <div>
                    <div class="text-xs uppercase tracking-widest opacity-60 mb-1">Freesound Reference</div>
                    <div class="break-all">{{ granted.freesound_ref }}</div>
                </div>
                <div>
                    <div class="text-xs uppercase tracking-widest opacity-60 mb-1">Date</div>
                    <div>{{ granted.date }}</div>
                </div>
            </div>

            <div class="mb-10">
                <div class="text-xs uppercase tracking-widest opacity-60 mb-3">Terms</div>
                <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2"><span class="mt-0.5">•</span> Non-commercial use</li>
                    <li class="flex items-start gap-2"><span class="mt-0.5">•</span> Personal projects & art</li>
                    <li class="flex items-start gap-2"><span class="mt-0.5">•</span> Attribution required</li>
                    <li class="flex items-start gap-2"><span class="mt-0.5">•</span> Unlimited use</li>
                </ul>
            </div>

            <p class="text-sm opacity-80">
                This license is granted effective immediately, no further action needed. Full terms at <a href="/licensing" class="underline">logic-moon.de/licensing</a>. Please keep this confirmation for your records.
            </p>
        </div>
    </Modal>
</template>

<script setup>
import axios from 'axios'
import { ref, reactive, onMounted } from 'vue'
import { ArrowPathIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import Modal from './Modal.vue'

const form_disabled = ref(false)
const msg_error = ref(false)
const msg_success = ref(false)
const free_modal_open = ref(false)

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
    privacy_consent: false,
})

const granted = reactive({
    first_name: '',
    last_name: '',
    email: '',
    track_name: '',
    freesound_ref: '',
    date: '',
})

function resetForm() {
    Object.keys(form).forEach(k => form[k] = '')
}

function sendForm() {
    msg_error.value = false
    msg_success.value = false

    if (form.license_type === 'free') {
        Object.assign(granted, {
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            track_name: form.track_name,
            freesound_ref: form.freesound_ref,
            date: new Date().toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' }),
        })
        // Free license is granted instantly in the UI; still send the request
        // so it lands in the admin dashboard like any other request. Fire and
        // forget, since the grant doesn't depend on the request succeeding.
        axios.post('https://api.tobeworks.de/logic-moon/licensing', { ...form }).catch(() => {})
        free_modal_open.value = true
        resetForm()
        return
    }

    form_disabled.value = true

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

onMounted(() => {
    const pending = sessionStorage.getItem('lm_license_type')
    if (pending) {
        form.license_type = pending
        sessionStorage.removeItem('lm_license_type')
    }

    // client:visible may hydrate before the CTA is clicked, so also listen
    // live instead of relying only on the sessionStorage read above.
    window.addEventListener('lm-license-select', (e) => {
        form.license_type = e.detail
        sessionStorage.removeItem('lm_license_type')
    })
})
</script>
