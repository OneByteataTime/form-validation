<template>
    <v-card flat class="" :disabled="this.$props.isLoading">
        <div class="form-group-header">
            <v-card-title>Business Contact</v-card-title>
        </div>
        
        <v-card-text ref="companyInput">
            <v-text-field 
            v-model="this.$props.contact.companyName"
            :title="this.$props.contact.companyName"
            label="Company Name"
            :rules="[v => !!v || 'Company name is required.']"
            @change="onCompanyInputChange"
            clearable required aria-required="required">
          </v-text-field>
        </v-card-text>
        <v-card-text>
            <v-text-field
            @focus="onFocus"
            hint="Please enter first and last name."
            v-model="this.$props.contact.personName"
            :title="this.$props.contact.personName"
            label="Person Name"
            :rules="personRules"
            clearable required aria-required="required">
          </v-text-field>
        </v-card-text>
        <v-btn @click="onClick">Click me</v-btn>
    </v-card>
</template>
<script lang="ts">
import Vue, { PropType, VueConstructor } from 'vue'
import { BusinessContactDetail, Quote, QuoteEnvelope } from '@/models/quote'

interface Refs {
    $refs: {
        companyInput: HTMLInputElement;
        form: HTMLFormElement;
    }
}
export default (Vue as VueConstructor<Vue & Refs>).extend({
    props: {
        isLoading: Boolean,
        contact: { type: Object as PropType<BusinessContactDetail>, required: true }
    },
    data: function () {
        return {
            businessContact: new QuoteEnvelope(false, undefined).quote?.businessContactDetail,
            personRules:  [
                (v: string) => (!!v && v.length > 3) || 'Name must follow pattern.'
            ],
        }
    },
    methods: {
        onFocus (e : Event) {
            console.log(e)
        },
        onClick (e: Event) {
            console.log("clicked")
        },
        onCompanyInputChange(value: string) {
            if (this.businessContact) {
                this.businessContact.companyName = value
            }
        }
    },
    created () {
        console.log('Business contact created...')
        },
    mounted () {
        console.log('Business contact mounted...')
    },
    updated () {
        console.log('Business contact updated...')
    }
})
</script>
<style scoped>
    .form-group-header {
        background-color: #efefef;
        color: #555;
    }
</style>