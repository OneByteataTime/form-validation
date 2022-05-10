<template>
    <v-card flat class="" :disabled="this.$props.isLoading">
        <div class="form-group-header">
            <v-card-title>Business Contact</v-card-title>
        </div>
        
        <v-card-text ref="companyInput">
            <v-text-field 
            v-model="companyName"
            :title="companyName"
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
            v-model="personName"
            :title="personName"
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
import { BusinessContactDetail, Quote } from '@/models/quote'
import { mapState } from 'vuex'
import { QuoteState, RootState } from '@/store/types'

interface Refs {
    $refs: {
        companyInput: HTMLInputElement;
        form: HTMLFormElement;
    }
}
export default (Vue as VueConstructor<Vue & Refs>).extend({
    props: {
        isLoading: Boolean,
    },
    data: function () {
        return {
            businessContact: '',
            personRules:  [
                (v: string) => (!!v && v.length > 3) || 'Name must follow pattern.'
            ],
        }
    },
    computed: {
        ...mapState('workingStorage', {
            companyName: (state: any) => { 
                console.log('Current State', state) 
                state.workingQuote.businessContactDetail.companyName 
            },
            personName: (state: any) => state.workingQuote.businessContactDetail.personName
        })
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
                this.businessContact = value
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