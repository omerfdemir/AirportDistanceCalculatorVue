<template>
	<div>
		<template>
			<v-card class="pa-4" flat height="300px">
				<v-col>
					<v-row>
						<v-col cols="12" sm="6" class="py-2">
							<v-text-field
								prepend-icon="mdi-map-marker"
								label="Airport IATA Code"
								:rules="[rules.required, rules.counter]"
								hide-details="auto"
								v-model="airportSearch"
								:disabled="disabled"
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" sm="6" class="py-2"> </v-col>
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

						<v-col v-if="airport != undefined">
							<h1>Name: {{ airport.name }}</h1>
							<h1>IATA: {{ airport.iata }}</h1>
							<h1>City: {{ airport.city }}</h1>
							<h1>City IATA: {{ airport.cityIATA }}</h1>
							<h1>Country: {{ airport.country }}</h1>
							<h1>Country IATA: {{ airport.countryIATA }}</h1>
							<h1>
								Longitude: {{ airport.location.longitude }}, Latitude:
								{{ airport.location.latitude }}
							</h1>
							<h1>Ratimg: {{ airport.rating }}</h1>
							<h1>TimeZoneRegionName: {{ airport.timeZoneRegionName }}</h1>
							<h1>Type: {{ airport.type }}</h1>
							<h1>Hubs: {{ airport.hubs }}</h1>
						</v-col>
					</v-row>
				</v-col>
			</v-card>
		</template>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Airport from "@/models/Airport";
import Requests from "@/utils/Requests";
import { AxiosError } from "axios";
@Component({})
export default class AirportSearchComponent extends Vue {
	public disabled = false;
	public rules = {
		required: (value: string) => !!value || "Required.",
		counter: (value: string | string[]) =>
			value.length == 3 || "IATA code should be 3 characther",
	};

	public airportSearch = "";

	public searchResult = "";

	public airport?: Airport | string = undefined;

	async onSearchClick() {
		this.searchResult = "";
		this.disabled = true;
		await this.getDistanceBetweenTwoAirports();
		this.disabled = false;
	}

	async getDistanceBetweenTwoAirports() {
		try {
			let getAirportResponse = await Requests.get<Airport | string>(
				`/Airport/GetAirportDetails/${this.airportSearch}`
			);
			let response = getAirportResponse.data;

			if (response == "Airports are in the same location") {
				this.searchResult = response;
			} else {
				this.airport = response;
			}
		} catch (error: any) {
			this.airport = undefined;
			this.$toast.error(`Error: ${error.request.response}`);
		}
	}
}
</script>
