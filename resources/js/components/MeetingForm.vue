<template>
    <v-row justify="center">
        <v-dialog v-model="show" persistent max-width="900px">
            <v-card>
                <v-card-title>
                    <span class="headline">Компания</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                        label="Название"
                                        required
                                        v-model="form.title"
                                        v-validate="'required|max:255'"
                                        data-vv-name="title"
                                        name="title"
                                        :error-messages="errors.collect('title')"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                        label="Детали*"
                                        required
                                        v-validate="'required|max:255'"
                                        data-vv-name="description"
                                        name="description"
                                        :error-messages="errors.collect('description')"
                                        v-model="form.description"
                                />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select
                                        :items="meetingTypes"
                                        label="Тип*"
                                        v-validate="'required'"
                                        data-vv-name="type"
                                        name="type"
                                        :error-messages="errors.collect('type')"
                                        v-model="form.type"
                                        return-object
                                        item-text="title"
                                        required
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-select
                                        :items="meetingStatuses"
                                        label="Статус*"
                                        v-validate="'required'"
                                        data-vv-name="status"
                                        name="status"
                                        :error-messages="errors.collect('status')"
                                        v-model="form.status"
                                        return-object
                                        item-text="title"
                                        required
                                ></v-select>
                            </v-col>

                            <v-col cols="6">
                                <v-date-picker v-model="form.date"></v-date-picker>
                            </v-col>

                            <v-col cols="6">
                                <v-time-picker v-model="form.time"></v-time-picker>
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
  import {mapActions, mapState} from 'vuex';
  export default {
    inject: ['$validator'],
    name: "MeetingForm",
    props: ['show', 'form', 'hide', 'submit'],
    computed: {
      ...mapState('companies', ['meetingTypes', 'meetingStatuses'])
    },
    methods: {
      ...mapActions('companies', ['getMeetingStatuses', 'getMeetingTypes']),
      validate(){
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.submit();
          }
        });
      }
    },
    created() {
      this.getMeetingStatuses();
      this.getMeetingTypes();
    }
  }
</script>

<style scoped>

</style>