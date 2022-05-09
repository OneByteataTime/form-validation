<template>
    <v-card flat class="" :loading="isLoading">
        <div class="form-group-header">
            <v-card-title>Contact Details</v-card-title>
        </div>
        
        <v-card-text ref="companyInput">
            <v-text-field 
            v-model="companyName"
            :title="companyName"
            label="Company Name"
            :rules="[v => !!v || 'Company name is required.']"
            clearable required aria-required="required">
          </v-text-field>
        </v-card-text>
        <v-card-text>
            <v-text-field
            validate-on-blur
            hint="Please enter first and last name."
            v-model="personName"
            :title="personName"
            label="Person Name"
            :rules="personRules"
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
            companyName: "",
            personName: "",
            personRules:  [
                (v: string) => v.length > 3 || 'Name must be more than 3 characters'
            ],
            isLoading: true
        }
    },
    async created () {
        this.isLoading = true
        const quote = await QuoteService.getQuote(2)
            .then(quote => {
                if (quote)
                {
                    this.companyName = quote.businessContactDetail.companyName
                    this.personName = quote.businessContactDetail.personName
                }
                this.isLoading = false
                this.$parent.$emit('dataLoaded')
            })
    },
    mounted () {
        this.$refs.companyInput.focus()
    }
})
</script>
<style scoped>
    .form-group-header {
        background-color: #efefef;
        color: #555;
    }
</style>