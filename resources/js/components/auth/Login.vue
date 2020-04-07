<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <form id="login_form" method="POST" action="/login" aria-label="Login">

<!--                        <input type="hidden" name="_token" :value="csrf_token">-->

                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                        v-model="email"
                                        v-validate="'email|required|max:255'"
                                        data-vv-name="email"
                                        :error-messages="errors.collect('email')"
                                        label="Email"
                                        name="email"></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                        v-model="password"
                                        v-validate="'required|min:6'"
                                        data-vv-name="password"
                                        :error-messages="errors.collect('password')"
                                        label="Password"
                                        name="password"
                                        type="password"></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-btn color="primary" @click="validate">Login</v-btn>
                        <router-link :to="{name: 'auth.email'}">Забыли пароль?</router-link>
                    </form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    inject: ['$validator'],
    data: () => ({
      email: '',
      password: '',
      loading: false,
    }),
    computed: {
      ...mapState('auth', ['token']),
    },
    methods: {
      ...mapActions('auth', ['login']),
      validate() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // document.getElementById("login_form").submit()
            this.login({
              login: this.login,
              password: this.password,
            })
          }
        })
      }
    }
  }
</script>