<template>
    <v-card flat class="" :disabled="this.envelope.isLoading">
        <div class="form-group-header">
            <v-card-title>Address</v-card-title>
        </div>
        
        <v-card-text ref="streetInput">
            <v-text-field 
            v-model="addressLine1"
            :title="addressLine1"
            label="Address"
            :rules="[v => !!v || 'Street address is required.']"
            clearable required aria-required="required">
          </v-text-field>
        </v-card-text>
        <v-card-text>
            <v-text-field
            validate-on-blur
            v-model="addressLine2"
            :title="addressLine2"
            label="Address Line 2"
            :rules="[]"
            clearable required aria-required="required">
          </v-text-field>
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
import Vue, { PropType, VueConstructor } from 'vue'
import QuoteService from '@/services/quote-service'
import { QuoteEnvelope } from '@/models/quote'

interface Refs {
    $refs: {
        companyInput: HTMLInputElement;
        form: HTMLFormElement;
    }
}
export default (Vue as VueConstructor<Vue & Refs>).extend({
    props: {
        envelope: { type: Object as PropType<QuoteEnvelope>, required: true }
    },
    data: function () {
        return {
            addressLine1: "",
            addressLine2: ""
        }
    },
    updated () {
        console.log('Address updated')
    },
    created () {
        this.addressLine1 = this.$props.envelope.quote.address.addressLine1
        this.addressLine2 = this.$props.envelope.quote.address.addressLine2
    },
    mounted () {
        console.log("Address mounted...")
    }
})
</script>
<style scoped>
    .form-group-header {
        background-color: #efefef;
        color: #555;
    }
</style>