<script>
// import "../../../assets/css/login.css";
import { mapGetters, mapActions } from "vuex";
import navBar from "../../../components/player-nav-bar.vue";
import Footer from "../../../components/player-footer.vue";
export default {
	components: {
		navBar,
		Footer,
	},
	data() {
		return {
			data: [],
			selected: this.$route.path,
		};
	},
	computed: {
		...mapGetters("auth", ["profile"]),
	},
	methods: {
		...mapActions("history", {
			getBetList: "betList",
		}),
		pushToBet() {
			this.$router.push({ path: "/history/bet" });
		},
		pushToTransaction() {
			this.$router.push({ path: "/history/transaction" });
		},
		pushToPoints() {
			this.$router.push({ path: "/history/points" });
		},
		async initList(p) {
			var pl = {
				page: p,
				limit: 10,
				sort: "created_at",
				order: "desc",
			};
			this.loading = true;
			const data = await this.getBetList(pl);
			this.data = data.data;
			this.loading = false;
		},
	},
	mounted() {
		this.initList(1);
	},
};
</script>

<template>
	<navBar />
	<div class="main-container">
		<div class="banner">
			<div class="banner-center justify-content-center">
				<div class="col-lg-7 col-xl-6 text-center">
					<h2 class="title text-white fw-bold">History</h2>
					<ul
						class="breadcrumbs d-flex flex-wrap align-items-center justify-content-center"
					>
						<span><a class="" href="/">Home </a></span>
						<span>⮞</span>
						<span>History</span>
					</ul>
				</div>
			</div>
		</div>
		<div class="history">
			<div class="container">
				<div class="routers mb-3">
					<div class="routers-responsive col-12">
						<div class="col-4 px-2">
							<div
								@click="pushToBet()"
								class="history-card"
								:class="
									selected == '/history/bet'
										? 'list-card-yellow'
										: 'list-card-green'
								"
							>
								<h3 class="router-headers">BET LIST</h3>
								<i class="las la-list-ul fs-1"></i>
							</div>
						</div>
						<div class="col-4 px-2">
							<div
								@click="pushToTransaction()"
								class="history-card"
								:class="
									selected == '/history/transaction'
										? 'list-card-yellow'
										: 'list-card-green'
								"
							>
								<h3 class="router-headers">TRANSACTION LIST</h3>
								<i class="las la-wallet fs-1"></i>
							</div>
						</div>
						<div class="col-4 px-2">
							<div
								@click="pushToPoints()"
								class="history-card"
								:class="
									selected == '/history/points'
										? 'list-card-yellow'
										: 'list-card-green'
								"
							>
								<h3 class="router-headers">POINTS LIST</h3>
								<i class="las la-money-check fs-1"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="router-table">
					<div class="col-12 px-2">
						<div class="table-responsive">
							<table class="table">
								<thead class="thead">
									<tr>
										<th>#</th>
										<th class="text-center">Action</th>
										<th class="text-center">Game No.</th>
										<th class="text-center">Bet Amount</th>
										<th class="text-center">
											Bet Selected
										</th>
										<th class="text-center">Payout</th>
										<th class="text-center">Win Amount</th>
										<th class="text-center">
											Before Money
										</th>
										<th class="text-center">Amount</th>
										<th class="text-center">After Money</th>
										<th class="text-center">
											Date and Time
										</th>
									</tr>
								</thead>
								<tbody>
									<tr
										v-for="(data, index) in this.data"
										:key="index"
									>
										<td
											class="thead-title"
											data-label="Number"
										>
											{{ index + 1 }}
										</td>
										<td data-label="Action">SAMPLE DATA</td>
										<td data-label="Game No.">
											SAMPLE DATA
										</td>
										<td data-label="Bet Amount">
											SAMPLE DATA
										</td>
										<td data-label="Bet Selected">
											SAMPLE DATA
										</td>
										<td data-label="Payout">SAMPLE DATA</td>
										<td data-label="Win Amount">
											SAMPLE DATA
										</td>
										<td data-label="Before Money">
											SAMPLE DATA
										</td>
										<td data-label="Amount">SAMPLE DATA</td>
										<td data-label="After Money">
											SAMPLE DATA
										</td>
										<td data-label="Date and Time">
											SAMPLE DATA
										</td>
									</tr>
								</tbody>
							</table>
							<ul class="float-end pagination">
								<li class="page-item">
									<a
										class="page-link"
										role="button"
										tabindex="0"
										href="#"
										>«</a
									>
								</li>
								<li class="page-item">
									<a
										class="page-link"
										role="button"
										tabindex="0"
										href="#"
										>»</a
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>
<style scoped>
.view-bets {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	box-shadow: 11px 11px 32px rgba(255, 82, 1, 0.2),
		-2px -2px 10px rgba(255, 200, 39, 0.4);
	padding: 5px 20px;
	color: #1f1f23;
	border-radius: 10px !important;
	border: none;
	transition: 0.5s;
	font-weight: bold;
}
tbody td {
	background: transparent;
	color: white;
	border: 1px solid #0c412f;
}
tbody > tr {
	font-size: 13px;
}
.pagination .page-item {
	padding: 3px;
	text-align: center;
}
.pagination .page-item a:hover,
.pagination .page-item span:hover {
	background: #ffc827;
	color: black;
}
.pagination .page-item a,
.pagination .page-item span {
	background: #013020;
	border-color: rgba(255, 200, 39, 0.1);
	border-radius: 50% !important;
	box-shadow: none;
	color: #ffc827;
	font-weight: 600;
	height: 45px;
	line-height: 45px;
	outline: 0;
	padding: 0;
	width: 45px;
}
.thead > tr > th {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	border-bottom: 1px solid #ffdd2d;
	font-family: Josefin Sans, sans-serif;
	color: #1f1f23;
}
.history-card {
	display: flex;
	flex-direction: row;
	color: white;
}
.history-card:hover {
	cursor: pointer;
	box-shadow: -4.828px -4.828px 6px 0 rgba(255, 200, 39, 0.4),
		3px 5px 8px 0 rgba(255, 82, 1, 0.2);
}
.router-headers {
	font-size: 26px;
	margin-top: -5px;
	color: white;
	font-family: Josefin Sans, sans-serif;
	font-weight: 700;
	line-height: 1.4;
}
.list-card-yellow {
	height: 100px;
	border: 2px solid #ffdd2d;
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	/* background: #013020; */
	box-shadow: -3.828px -3.828px 6px 0 rgba(255, 200, 39, 0.4),
		3px 5px 8px 0 rgba(255, 82, 1, 0.2);
	border-radius: 10px;
	justify-content: space-between;
	padding: 25px 15px;
	position: relative;
	transition: all 0.3s ease;
}
.list-card-green {
	height: 100px;
	background: #013020;
	box-shadow: -3.828px -3.828px 6px 0 rgba(255, 200, 39, 0.4),
		3px 5px 8px 0 rgba(255, 82, 1, 0.2);
	border-radius: 10px;
	justify-content: space-between;
	padding: 25px 15px;
	position: relative;
	transition: all 0.3s ease;
	border: 2px solid #ffdc2d;
}
.history {
	/* background: red; */
	height: 600px;
	width: 100%;
	margin-top: 130px;
}
ul span {
	list-style: none;
	color: hsla(0, 0%, 100%, 0.603);
}
a {
	color: hsla(0, 0%, 100%, 0.603);
	margin-left: -30px;
}
.breadcrumbs span {
	padding: 0px 10px;
}
.breadcrumbs {
	font-size: 18px;
	margin: 0;
}
.title {
	font-size: 45px;
}
.banner {
	padding: 150px 0 110px;
	background: #02251a;
}
.banner-center {
	display: flex;
	flex-direction: row;
}
.routers-responsive {
	display: flex;
	flex-direction: row;
}
.history {
	height: auto;
}
@media (max-width: 999px) {
	.routers-responsive {
		display: flex;
		flex-direction: column;
	}
	.routers-responsive > .col-4 {
		width: 100%;
		margin-bottom: 15px;
	}
	.thead {
		display: none;
	}
	.history {
		margin-top: 40px;
	}
	td:before {
		content: attr(data-label);
		float: left;
		font-size: 10px;
		text-transform: uppercase;
		font-weight: bold;
	}
	td {
		display: block;
		text-align: right;
		font-size: 14px;
		padding: 10px !important;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	}
	.thead-title {
		background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
		margin-top: 20px;
	}
}
@media (max-width: 768px) {
}
</style>