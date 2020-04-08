<template>
    <v-layout>
        <v-container>
            <v-card
                    class="mx-auto"
                    max-width="344"
                    outlined
            >
                <v-list-item>
                    <v-list-item-title>
                        Компании
                    </v-list-item-title>
                </v-list-item>
                <v-card-actions>
                    <v-btn @click="getCompanies" :disabled="loading">
                        Обновить
                    </v-btn>
                    <v-btn @click="setShowCompanyForm()">Создать</v-btn>
                </v-card-actions>
            </v-card>
            <v-card
                    class="mx-auto mt-2"
                    max-width="344"
                    outlined
                    v-for="company in companies" :key="company.id"
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">{{ company.phone + ' ' + company.email }}</div>
                        <v-list-item-title class="headline mb-1">{{ company.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ company.address }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                    <v-btn text @click="setShowCompanyForm(company.id)">Редактировать</v-btn>
                    <v-btn text @click="showMeetings(company.id)">Встречи</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
        <company-form
            :form="companyForm"
            :show="showCompanyForm"
            :hide="() => this.showCompanyForm = false"
            :submit="this.submitForm"
        />
        <meetings />
    </v-layout>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
  export default {
    name: "Companies",
    data(){
      return {
        companyForm: {},
        showCompanyForm: false,
      }
    },
    components: {
      CompanyForm: () => import('./CompanyForm'),
      Meetings: () => import('./Meetings'),
    },
    computed: {
      ...mapState('companies', ['companies', 'loading'])
    },
    methods: {
      ...mapActions('companies', ['getCompanies', 'addCompany', 'updateCompany']),
      ...mapMutations('companies', ['setShowCompanyMeetings', 'setFocusedCompany']),
      setShowCompanyForm(id = null){
        if (!!id) {
          this.companyForm = this.companies.find((c) => c.id === id)
        } else {
          this.companyForm = {}
        }
        this.showCompanyForm = true;
      },
      showMeetings(id){
        this.setFocusedCompany(id);
        this.setShowCompanyMeetings(true);
      },
      submitForm() {
        if ( this.companyForm.id ) {
          this.updateCompany(this.companyForm)
            .then(() => this.showCompanyForm = false)
        } else {
          this.addCompany(this.companyForm)
            .then(() => this.showCompanyForm = false)
        }
      }
    },
    created() {
      this.getCompanies();
    }
  }
</script>

<style scoped>

</style>