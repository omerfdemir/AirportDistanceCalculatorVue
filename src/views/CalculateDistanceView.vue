<template>
  <CalculateDistanceComponent></CalculateDistanceComponent>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CalculateDistanceComponent from "@/components/CalculateDistanceComponent.vue";
@Component({
  components: {
    CalculateDistanceComponent,
  },
})
export default class CalculateDistanceView extends Vue {}
</script>
