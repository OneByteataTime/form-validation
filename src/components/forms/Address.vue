<template>
    <v-card flat class="" :disabled="isLoading">
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
            hint="Optional"
            clearable required aria-required="required">
          </v-text-field>
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
import Vue, { PropType, VueConstructor } from 'vue'
import { mapState } from 'vuex'

interface Refs {
    $refs: {
        companyInput: HTMLInputElement;
        form: HTMLFormElement;
    }
}
export default (Vue as VueConstructor<Vue & Refs>).extend({
    props: {
        isLoading: Boolean
    },
    data: function () {
        return {
            message: ''
        }
    },
    computed: {
        ...mapState('workingStorage', {
            addressLine1: (state: any) => state.workingQuote.address.addressLine1,
            addressLine2: (state: any) => state.workingQuote.address.addressLine2
        })
    },
    updated () {
        console.log('Address updated')
    },
    created () {
        console.log('Address created...')
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