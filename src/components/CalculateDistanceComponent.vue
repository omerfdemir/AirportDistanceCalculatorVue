<template>
	<div>
		<template>
			<v-card class="pa-4" flat height="300px">
				<v-col>
					<v-row>
						<v-col cols="12" sm="6" class="py-2">
							<v-text-field
								prepend-icon="mdi-map-marker"
								label="First Airport"
								:rules="[rules.required, rules.counter]"
								hide-details="auto"
								v-model="firstAirportSearch"
								:disabled="disabled"
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" sm="6" class="py-2">
							<v-text-field
								:rules="[rules.required, rules.counter]"
								v-model="secondAirportSearch"
								:disabled="disabled"
								prepend-icon="mdi-map-marker"
								label="Second Airport"
							></v-text-field>
						</v-col>
						<v-btn
							:loading="disabled"
							:disabled="disabled"
							color="blue-grey"
							class="ma-2 white--text"
							@click="onSearchClick"
						>
							Search
							<v-icon right dark> mdi-magnify </v-icon>
						</v-btn>

						<v-col>
							<h1>{{ searchResult }}</h1>
						</v-col>
					</v-row>
				</v-col>
			</v-card>
		</template>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Requests from "@/utils/Requests";
import { AxiosError } from "axios";
@Component({})
export default class CalculateDistanceComponent extends Vue {
	public disabled = false;
	public rules = {
		required: (value: string) => !!value || "Required.",
		counter: (value: string | string[]) =>
			value.length == 3 || "IATA code should be 3 characther",
	};

	public firstAirportSearch = "";

	public secondAirportSearch = "";
	public searchResult = "";

	async onSearchClick() {
		this.searchResult = "";
		this.disabled = true;
		await this.getDistanceBetweenTwoAirports();
		this.disabled = false;
	}

	async getDistanceBetweenTwoAirports() {
		try {
			let getAirportDistanceResult = await Requests.get<number>(
				`/Airport/GetDistanceBetweenTwoAirportsInMiles/${this.firstAirportSearch}/${this.secondAirportSearch}`
			);
			let response = getAirportDistanceResult.data;

			if (response == 0) {
				this.searchResult = "Airports are in the same location";
			} else {
				this.searchResult = `The distance between ${this.firstAirportSearch.toUpperCase()} and ${this.secondAirportSearch.toUpperCase()} is ${response} miles`;
			}
		} catch (err: any) {
			this.$toast.error(`Error: ${err.request.response}`);
		}
	}
}
</script>
