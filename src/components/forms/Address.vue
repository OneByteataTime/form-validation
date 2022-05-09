<template>
    <v-card flat class="" :loading="isLoading" :disabled="isLoading">
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
import Vue, { VueConstructor } from 'vue'
import QuoteService from '@/services/quote-service'

interface Refs {
    $refs: {
        companyInput: HTMLInputElement;
        form: HTMLFormElement;
    }
}
export default (Vue as VueConstructor<Vue & Refs>).extend({
    data: function () {
        return {
            addressLine1: "",
            addressLine2: "",
            isLoading: true
        }
    },
    async created () {
        this.isLoading = true
        const quote = await QuoteService.getQuote(2, 2000)
            .then(quote => {
                if (quote)
                {
                    this.addressLine1 = quote.address.addressLine1
                    this.addressLine2 = quote.address.addressLine2
                }
                this.isLoading = false
                this.$parent.$emit('dataLoaded')
            })
    }
})
</script>
<style scoped>
    .form-group-header {
        background-color: #efefef;
        color: #555;
    }
</style>