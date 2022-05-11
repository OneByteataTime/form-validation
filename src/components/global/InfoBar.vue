<template>
    <v-row>
        <v-col cols=6>
            <div class="overline">{{ customerName }} (#{{ customerNumber }})</div>
        </v-col>
        <v-col cols=6>
            <div class="text-right overline">Quote: {{ number }}</div>
            <div class="text-right overline">Effective Date: 5/22/2022</div>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        customerName: String,
        number: String,
        date: String,
        customerNumber: String
    }, 
})
</script>

<style scoped>
    .hoverable:hover {
        cursor: pointer;
    }
</style>