<template>
    <v-row justify="center">
        <v-dialog v-model="showCompanyMeetings" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Встречи</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-card
                                class="mx-auto mt-2"
                                max-width="344"
                                outlined
                                v-for="meeting in focusedCompany.meetings" :key="meeting.id"
                        >
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-4">{{ meeting.date }}</div>
                                    <v-list-item-title class="headline mb-1">{{ meeting.title }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ meeting.description }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-card-actions>
                                <strong class="ml-2 mr-2">{{ meeting.type.title }}</strong>
                                <strong class="mr-2">{{ meeting.status.title }}</strong>
                                <strong class="mr-2">{{ meeting.user.name }}</strong>
                            </v-card-actions>
                        </v-card>
                        <v-row centered>
                            <v-btn
                                @click="() => { showForm = true }"
                                class="mt-2">
                                Добавить
                            </v-btn>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close()">Закрыть</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <meeting-form
            :form="form"
            :show="showForm"
            :hide="() => this.showForm = false"
            :submit="this.submitMeeting"
        />
    </v-row>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    name: "Meetings",
    data(){
      return {
        form: {},
        showForm: false,
      }
    },
    components: {
      MeetingForm: () => import('./MeetingForm'),
    },
    computed: {
      ...mapState('companies', ['loading', 'showCompanyMeetings']),
      ...mapGetters('companies', ['focusedCompany'])
    },
    methods: {
      ...mapMutations('companies', ['setShowCompanyMeetings', 'setFocusedCompany']),
      ...mapActions('companies', ['getCompanies', 'addMeeting']),
      submitMeeting(){
        this.form.company = this.focusedCompany;
        return this.addMeeting(this.form)
          .then(() => {
            this.getCompanies();
            this.close();
          })
      },
      close(){
        this.form = {};
        this.showForm = false;
        this.setFocusedCompany();
        this.setShowCompanyMeetings(false);
      }
    }
  }
</script>

<style scoped>

</style>