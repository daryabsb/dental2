<template>
	<div>
		From API:
		<ul>
			<li v-for="job in apiJobs" :key="job.id">
				<div>- {{job.title}}</div>
				<ul>
					<li v-for="qual in job.minimumQualifications" :key="qual">--- {{qual.qualification}}</li>
				</ul>
			</li>
		</ul>
	</div>
	<div>
		From DB:
		<ul>
			<li v-for="job in dbJobs" :key="job.id">{{job.title}}</li>
		</ul>
	</div>
	{{"darya"}}
</template>

<script>
	import axios from "axios";
	export default {
		name: "ApiData",
		data() {
			return {
				apiJobs: [],
				dbJobs: [],
			};
		},
		async mounted() {
			// const localResponse = await axios.get("http://localhost:3000/jobs");
			// const dbData = localResponse.data;
			// console.log("from db: ", localResponse.data);
			// let data = [];
			// dbData.forEach((el) => {
			// 	let current = {};

			// 	el.description.forEach((des) => {
			// 		current.job = el.id;
			// 		current.description = des;
			// 		data.push(current);
			// 		current = {};
			// 	});
			// });
			// console.log("data", data);
			// data.forEach((el) => {
			// 	console.log("el", el);
			// 	axios.post("http://127.0.0.1:8000/api/descriptions/", el);
			// });
			// await axios.post("http://127.0.0.1:8000/api/jobs/", current);

			// this.dbJobs = localResponse.data;
			const baseUrl = "http://127.0.0.1:8000/api";
			const apiResponse = await axios.get("http://127.0.0.1:8000/api/jobs/");
			console.log("from api: ", apiResponse.data);
			this.apiJobs = apiResponse.data;
		},
	};
</script>