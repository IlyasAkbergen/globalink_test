<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                clipped
                fixed
                app>

            <v-list dense>
                <v-list-item v-for="link in links" :to="{path: link.path}" :key="link.name">
                    <v-list-item-avatar>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>

        <v-app-bar app fixed clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Test task</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom left>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon large>account_circle</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="logout">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer></v-footer>
    </v-app>
</template>

<script>
  import { mapMutations } from 'vuex';
  import links from '../../side-bar-links';
  export default {
    data: () => ({
      drawer: null,
      links: links,
    }),
    created() {
      console.log(this.links);
    },
    methods: {
      ...mapMutations('auth', ['setUser', 'setToken']),
      logout(){
        this.setUser(null);
        this.setToken(null);
        this.$router.push('/login');
      }
    }
  }
</script>