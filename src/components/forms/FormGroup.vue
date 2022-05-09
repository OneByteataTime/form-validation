<template>
    <v-card flat class="d-flex pa-2">
        <div class="form-group-header">Group 1</div>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>

        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'FormGroup',
    props: {
        title: {
            type: String,
        }
    }
})
</script>

