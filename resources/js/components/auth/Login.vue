<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="p-2">
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
                                        name="email">
                                </v-text-field>
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

                        <v-btn
                            color="primary"
                            @click="validate"
                            :disabled="loading"
                        >
                            Login
                        </v-btn>
                        <v-fade-transition leave-absolute slot="append">
                            <v-progress-circular
                                    v-show="loading"
                                    class="ml-1 mt-1"
                                    size="24"
                                    color="info"
                                    indeterminate
                            ></v-progress-circular>
                        </v-fade-transition>
                        <router-link to="/register" class="float-right mt-2">register</router-link>
<!--                        <router-link to="/reset-email" class="ml-2">Забыли пароль?</router-link>-->
                        <p class="text-danger" v-for="(error, key) in authErrors" :key="key">{{ error }}</p>
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
    }),
    computed: {
      ...mapState('auth', ['token', 'loading', 'user', 'authErrors']),
    },
    methods: {
      ...mapActions('auth', ['login']),
      validate() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.login({
              email: this.email,
              password: this.password,
            }).then(() => {
              if (this.token !== null && this.user !== null) {
                this.$router.push('/companies');
              }
            });
          }
        });
      }
    },
    created() {
      if (this.token !== null && this.user !== null) {
        this.$router.push('/');
      }
    }
  }
</script>