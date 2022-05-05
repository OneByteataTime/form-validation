<template>
    <v-form ref="form" :model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="firstName"
              :title="firstName"
              :label="setRequiredLabel('First name:')"
              :rules="nameRules"
              clearable required aria-required="required"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="lastName"
              :label="setLabel('Last name')"
              @keyup="onKeyUp"
              @change="onChange"
              :rules="lastnameRules"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="validate"
            >
            Continue
            </v-btn>
            <v-btn
              :disabled="!valid"
              color="warning"
              class="mr-4"
              @click="validate"
            >
            Validate
            </v-btn>
            <v-btn
              :disabled="!valid"
              color="error"
              class="mr-4"
              @click="reset"
            >
            Reset
            </v-btn>
          </v-col>
          <v-col cols="12">
            <p>{{ result }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

interface Refs {
    $refs: {
        form: HTMLFormElement
    }
}
export default (Vue as VueConstructor<Vue & Refs>).extend({
    data: function() {
        return {
            valid: true,
            firstName: '',
            lastName: '',
            result: '',
            nameRules: [
                (v: string) => !!v || 'Name is required',
                (v: string) => (v && v.length < 25) || 'Name must be less than 25 characters'
            ],
            lastnameRules: Array<(v: string) => boolean | string>(),
            hasLastnameRules: [
                (v: string) => (!!v && v.length > 3) || 'Name must be more than 3 characters'
            ]
        }
    },
    methods: {
    setLabel (value: string) {
      return value
    },
    setRequiredLabel (value: string) {
      return value
    },
    validate () {
      if (this.$refs?.form.validate()) {
        this.result = "Will continue"
      } else {
        this.result = "Stop right there!"
      }
    },
    reset () {
      this.$refs.form.reset()
      this.result = ''
    },
    onKeyUp(e: any) {
      var name = e.target.value
      if (name.length > 0) {
        this.lastnameRules = this.hasLastnameRules  
      }
      if (name.length === 0){
        this.lastnameRules = []
      }
    },
    onChange(e: any) {
      console.log('changed', e)
      if (!e) {
        this.lastnameRules = []
      }
    }
  },
  mounted () {
      console.log('mounted...')
      this.$refs.form.validate()
  } 
})
</script>
<style scoped>
    form {
    background-color: whitesmoke;
    margin: 1em;
    width: 60%;
    border-color: #777;
    }

    p {
    font-family: Georgia;
    font-size: 1.2em;
    color: dodgerblue;
    }
</style>