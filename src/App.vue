<template>
  <v-app>
    <v-main>
      <AppMenuComponent> </AppMenuComponent>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import AppMenuComponent from "@/components/AppMenuComponent.vue";

@Component({
  components: {
    AppMenuComponent,
  },
})
export default class App extends Vue {}
</script>
