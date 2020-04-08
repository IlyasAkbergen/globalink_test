<template>
    <v-row justify="center">
        <v-dialog v-model="show" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Компания</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                        label="Название"
                                        required
                                        v-model="form.name"
                                        v-validate="'required|max:255'"
                                        data-vv-name="name"
                                        name="name"
                                        :error-messages="errors.collect('name')"
                                />
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                        label="Адрес"
                                        hint="Адрес комании"
                                        v-validate="'required|max:255'"
                                        data-vv-name="address"
                                        name="address"
                                        :error-messages="errors.collect('address')"
                                        v-model="form.address"
                                        required
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                        label="Email*"
                                        required
                                        v-validate="'email|required|max:255'"
                                        data-vv-name="email"
                                        name="email"
                                        :error-messages="errors.collect('email')"
                                        v-model="form.email"
                                />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select
                                        :items="categories"
                                        label="Категория*"
                                        v-validate="'required'"
                                        data-vv-name="category"
                                        name="category"
                                        :error-messages="errors.collect('category')"
                                        v-model="form.category"
                                        return-object
                                        item-text="name"
                                        required
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                        label="Номер телефона*"
                                        required
                                        v-validate="'required|max:255'"
                                        data-vv-name="phone"
                                        name="phone"
                                        :error-messages="errors.collect('phone')"
                                        v-mask="`+7(###)-###-##-##`"
                                        v-model="form.phone"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*обязательный поля</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="hide">Закрыть</v-btn>
                    <v-btn color="blue darken-1" text @click="validate">Сохранить</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    inject: ['$validator'],
    name: "CompanyForm",
    props: ['show', 'form', 'hide', 'submit'],
    computed: {
      ...mapState('companies', ['categories'])
    },
    methods: {
      ...mapActions('companies', ['getCategories']),
      validate(){
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.submit()
          }
        });
      }
    },
    created() {
      this.getCategories()
    }
  }
</script>

<style scoped>

</style>