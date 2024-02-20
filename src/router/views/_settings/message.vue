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
		};
	},
	computed: {
		...mapGetters("auth", ["profile"]),
	},
	methods: {
		...mapActions("chat", {
			getChatList: "chatList",
		}),
		createMessage() {
			this.$router.push({ path: "/message-create" });
		},
	},
	mounted() {},
};
</script>

<template>
	<navBar />
	<div class="message-container">
		<div class="banner">
			<div class="banner-center justify-content-center">
				<div class="col-lg-7 col-xl-6 text-center">
					<h2 class="title text-white fw-bold">Message List</h2>
					<ul
						class="breadcrumbs d-flex flex-wrap align-items-center justify-content-center"
					>
						<span><a class="" href="/">Home </a></span>
						<span>⮞</span>
						<span>Message list</span>
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="pt-0 row gy-4 justify-content-center">
						<div class="col-lg-12">
							<div class="game-item">
								<div class="game-inner">
									<div class="game-item__content">
										<div class="col-lg-12">
											<div class="card--lg">
												<div
													class="card--body p-sm-5 p-3"
												>
													<div
														class="reset-header mb-5 text-center"
													>
														<div class="icon">
															<i
																class="las la-envelope"
															></i>
														</div>
														<h3
															class="mt-3 text-white"
														>
															Message Inbox
														</h3>
														<button
															type="button"
															class="cmn--btn btn-sm active col-sm-3 p-1 view-bets-btn view-message-btn"
															@click="
																createMessage()
															"
														>
															Create Message
														</button>
													</div>
													<div
														class="table--responsive--md"
													>
														<table class="table">
															<thead>
																<tr>
																	<th>#</th>
																	<th>
																		Title
																	</th>
																	<th>
																		Status
																	</th>
																	<th>
																		Date
																	</th>
																	<th>
																		Action
																	</th>
																</tr>
															</thead>
															<tbody></tbody>
														</table>
														<ul
															class="float-end pagination"
														>
															<li
																class="page-item"
															>
																<a
																	class="page-link"
																	role="button"
																	tabindex="0"
																	href="#"
																	>«</a
																>
															</li>
															<li
																class="page-item"
															>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>
<style scoped>
.game-item {
	/* background: #02251a; */
	background: linear-gradient(rgba(6, 46, 41, 0.95), rgba(6, 46, 41, 0.95)),
		url(../../../assets/images/shape.png);
	border-radius: 5px;
	margin-top: 100px;
	box-shadow: -4.828px -4.828px 12px 0 rgba(255, 200, 39, 0.4),
		3px 5px 15px 0 rgba(255, 82, 1, 0.2);
	padding: 20px;
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
ul li {
	list-style: none;
	padding: 7px 0;
}
.pagination .page-item {
	padding: 3px;
	text-align: center;
}
.pagination {
	display: flex;
	flex-wrap: wrap;
}
ul li {
	list-style: none;
	padding: 7px 0;
}
.pagination .page-item {
	padding: 3px;
	text-align: center;
}
table > thead > tr > th {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	border: none;
}
.cmn--btn:hover {
	box-shadow: -5px -5px 20px 0 rgba(255, 200, 39, 0.6),
		3px 5px 20px 0 rgba(255, 82, 1, 0.2);
}
.cmn--btn {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	box-shadow: -3px -3px 10px 0 rgba(255, 200, 39, 0.6),
		3px 5px 20px 0 rgba(255, 82, 1, 0.2);
	border: 0;
	border-radius: 10px;
	color: #1f1f23;
	cursor: pointer;
	font-family: Josefin Sans, sans-serif;
	font-size: 19px;
	font-weight: 500;
	outline: none;
	padding: 12px 35px;
	transition: all 0.3s ease;
	z-index: 1;
}
.reset-header .icon {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	border-radius: 50%;
	color: #1f1f23;
	font-size: 30px;
	height: 75px;
	margin: 0 auto 15px;
	width: 75px;
	align-items: center;
	display: flex;
	justify-content: center;
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
.message-container {
	height: 1000px;
}
</style>