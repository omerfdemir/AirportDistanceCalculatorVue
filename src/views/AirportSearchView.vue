<template>
  <AirportSearchComponent></AirportSearchComponent>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AirportSearchComponent from "@/components/AirportSearchComponent.vue";
@Component({
  components: {
    AirportSearchComponent,
  },
})
export default class CalculateDistanceView extends Vue {}
</script>
