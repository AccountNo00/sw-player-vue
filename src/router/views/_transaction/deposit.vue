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
			selected: "",
			merchant_type: null,
		};
	},
	computed: {
		...mapGetters("auth", ["profile"]),
	},
	methods: {
		...mapActions("chat", {
			getChatList: "chatList",
		}),
	},
	mounted() {},
};
</script>

<template>
	<navBar />
	<div>
		<div class="banner">
			<div class="banner-center justify-content-center">
				<div class="col-lg-7 col-xl-6 text-center">
					<h2 class="title text-white fw-bold">Transaction</h2>
					<ul
						class="breadcrumbs d-flex flex-wrap align-items-center justify-content-center"
					>
						<span><a class="" href="/">Home </a></span>
						<span>⮞</span>
						<span>Transaction</span>
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row responsive-box">
				<div class="col-3">
					<div class="nav">
						<div class="user">
							<div class="div-user">
								<img src="../../../assets/images/user.png" />
							</div>
							<div class="text-center">
								<span class="text-white"> Welcome</span>
								<h5 class="text-white">PLAYER PLAYER</h5>
							</div>
						</div>
						<div class="tabs">
							<router-link
								to="/transaction/deposit"
								class="router-links loading-bg"
								>Loading</router-link
							>
							<router-link
								to="/transaction/withdraw"
								class="router-links"
								>Withdraw</router-link
							>
						</div>
					</div>
				</div>
				<div class="col-9">
					<div class="content">
						<div class="custom-padding">
							<div class="reset-header mb-5 text-center">
								<div class="icon">
									<i class="las la-money-bill-wave"></i>
								</div>
								<h3 class="mt-3 text-light">Loading</h3>
								<p
									class="font-size-16"
									style="color: hsla(0, 0%, 100%, 0.8)"
								>
									Enter the amount and choice of your loading
								</p>
							</div>
							<div class="selection">
								<div class="row">
									<div class="col-4">
										<div
											class="custom-card d-flex"
											:class="
												selected == 'via-bank'
													? 'custom-card-color'
													: 'green-card'
											"
										>
											<div class="card-content">
												<h4
													:class="
														selected == 'via-bank'
															? 'text-warning'
															: 'text-white'
													"
												>
													via Bank
												</h4>
												<button
													class="view-btn"
													@click="
														selected = 'via-bank'
													"
												>
													Select
												</button>
											</div>
											<div>
												<img
													src="../../../assets/images/via-bank.png"
												/>
											</div>
										</div>
									</div>
									<div class="col-4">
										<div
											class="custom-card d-flex"
											:class="
												selected == 'via-merchant'
													? 'custom-card-color'
													: 'green-card'
											"
										>
											<div class="card-content">
												<h4
													:class="
														selected ==
														'via-merchant'
															? 'text-warning'
															: 'text-white'
													"
												>
													Merchant
												</h4>
												<button
													class="view-btn"
													@click="
														selected =
															'via-merchant'
													"
												>
													Select
												</button>
											</div>
											<div>
												<img
													src="../../../assets/images/merchant.png"
												/>
											</div>
										</div>
									</div>
									<div class="col-4">
										<div
											class="custom-card d-flex"
											:class="
												selected == 'via-outlet'
													? 'custom-card-color'
													: 'green-card'
											"
										>
											<div class="card-content">
												<h4
													:class="
														selected == 'via-outlet'
															? 'text-warning'
															: 'text-white'
													"
												>
													Loading Outlet
												</h4>
												<button
													class="view-btn"
													@click="
														selected = 'via-outlet'
													"
												>
													Select
												</button>
											</div>
											<div>
												<img
													src="../../../assets/images/outlet.png"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="forms mt-4">
								<div
									class="bank-input"
									v-if="selected == 'via-bank'"
								>
									<div class="mb-3">
										<select
											class="form-control w-100 select-style"
										>
											<option>Manual</option>
										</select>
									</div>
									<div class="bank-inputs mb-3">
										<div class="responsive-title">
											<i
												class="las la-university fs-2 me-2"
											></i
											><b>Bank Name</b>
										</div>
										<input
											class="form-control w-100 select-style"
											placeholder="Choose a bank..."
										/>
										<span class="yellow-bg yellow-size"
											><i
												class="las la-university fs-2 me-2"
											></i
											><b>Bank Name</b></span
										>
									</div>
									<div class="bank-inputs mb-3">
										<div class="responsive-title">
											<i
												class="las la-university fs-2 me-2"
											></i
											><b>Account Name</b>
										</div>
										<input
											class="form-control w-100 select-style"
											placeholder="Account Name"
										/>
										<span class="yellow-bg yellow-size"
											><i
												class="las la-university fs-2 me-2"
											></i
											><b>Account Name</b></span
										>
									</div>
									<div class="bank-inputs mb-3">
										<div class="responsive-title">
											<i
												class="las la-university fs-2 me-2"
											></i
											><b>Account Number</b>
										</div>
										<input
											class="form-control w-100 select-style"
											placeholder="Account Number"
										/>
										<span class="yellow-bg yellow-size"
											><i
												class="las la-university fs-2 me-2"
											></i
											><b>Account Number</b></span
										>
									</div>
									<div
										class="text-center row g-2 desktop money-input hide-991 mb-4"
									>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 500
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 1000
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 1500
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 2000
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 2500
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 3000
											</button>
										</div>
									</div>
									<div class="bank-inputs mb-3">
										<input
											class="form-control w-100 select-style"
											placeholder="Enter amount"
										/>
										<span class="yellow-bg yellow-size"
											><i
												class="las la-university fs-2 me-2"
											></i
											><b>Amount</b></span
										>
									</div>
									<div class="input-group">
										<label class="text-white"
											>Transaction Screenshot</label
										><input
											type="file"
											class="form-control select-style d-block w-100"
											style="padding: 9px !important"
										/>
									</div>
									<div class="form-group mt-2">
										<button
											type="submit"
											class="play-now btn-glow active w-100 mt-2"
										>
											Submit</button
										><span class="d-none">0:0</span>
									</div>
								</div>
								<div
									class="bank-input"
									v-if="selected == 'via-merchant'"
								>
									<div class="mb-3">
										<select
											class="form-control w-100 select-style"
											v-model="merchant_type"
										>
											<option>Manual</option>
											<option value="fpay">
												Fortune Pay
											</option>
										</select>
									</div>
									<div v-if="merchant_type == 'fpay'">
										<div class="responsive-title">
											<i
												class="las la-university fs-2 me-2"
											></i
											><b>Email</b>
										</div>
										<div class="bank-inputs mb-3">
											<input
												class="form-control w-100 select-style"
												placeholder="Enter Email"
											/>
											<span class="yellow-bg yellow-size"
												><i
													class="las la-university fs-2 me-2"
												></i
												><b>Email</b></span
											>
										</div>
										<div class="bank-inputs mb-3">
											<div class="responsive-title">
												<i
													class="las la-university fs-2 me-2"
												></i
												><b>Mobile Number</b>
											</div>
											<input
												class="form-control w-100 select-style"
												placeholder="Enter Mobile Number"
											/>
											<span class="yellow-bg yellow-size"
												><i
													class="las la-university fs-2 me-2"
												></i
												><b>Mobile Number</b></span
											>
										</div>
										<div
											class="text-center row g-2 desktop money-input hide-991 mb-4"
										>
											<div class="col-2">
												<button
													type="button"
													class="view-btn p-3 select-btn ps-0 pe-0 w-100"
												>
													₱ 500
												</button>
											</div>
											<div class="col-2">
												<button
													type="button"
													class="view-btn p-3 select-btn ps-0 pe-0 w-100"
												>
													₱ 1000
												</button>
											</div>
											<div class="col-2">
												<button
													type="button"
													class="view-btn p-3 select-btn ps-0 pe-0 w-100"
												>
													₱ 1500
												</button>
											</div>
											<div class="col-2">
												<button
													type="button"
													class="view-btn p-3 select-btn ps-0 pe-0 w-100"
												>
													₱ 2000
												</button>
											</div>
											<div class="col-2">
												<button
													type="button"
													class="view-btn p-3 select-btn ps-0 pe-0 w-100"
												>
													₱ 2500
												</button>
											</div>
											<div class="col-2">
												<button
													type="button"
													class="view-btn p-3 select-btn ps-0 pe-0 w-100"
												>
													₱ 3000
												</button>
											</div>
										</div>
										<div class="bank-inputs mb-3">
											<input
												class="form-control w-100 select-style"
												placeholder="Enter amount"
											/>
											<span class="yellow-bg yellow-size"
												><i
													class="las la-university fs-2 me-2"
												></i
												><b>Amount</b></span
											>
										</div>
										<div class="form-group mt-2">
											<button
												type="submit"
												class="play-now btn-glow active w-100 mt-2"
											>
												Submit</button
											><span class="d-none">0:0</span>
										</div>
									</div>
								</div>
								<div
									class="bank-input"
									v-if="selected == 'via-outlet'"
								>
									<div
										class="text-center row g-2 desktop money-input hide-991 mb-4"
									>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 500
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 1000
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 1500
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 2000
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 2500
											</button>
										</div>
										<div class="col-2">
											<button
												type="button"
												class="view-btn p-3 select-btn ps-0 pe-0 w-100"
											>
												₱ 3000
											</button>
										</div>
									</div>
									<div class="bank-inputs mb-3">
										<input
											class="form-control w-100 select-style"
											placeholder="Enter amount"
										/>
										<span class="yellow-bg yellow-size"
											><i
												class="las la-university fs-2 me-2"
											></i
											><b>Amount</b></span
										>
									</div>
									<div class="form-group mt-2">
										<button
											type="submit"
											class="play-now btn-glow active w-100 mt-2"
										>
											Submit</button
										><span class="d-none">0:0</span>
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
.play-now {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	height: 50px;
	border: 0;
	width: 83%;
	margin-top: 8px;
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
.btn-glow {
	box-shadow: -3.828px -3.828px 6px 0 rgba(255, 200, 39, 0.4),
		3px 5px 8px 0 rgba(255, 82, 1, 0.2);
}
.bank-inputs > span > i {
	margin-top: 13px;
	margin-left: 20px;
}
.bank-inputs > span > b {
	position: relative;
	top: -5px;
}
.bank-inputs > span {
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
}
.bank-inputs > input {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.bank-inputs {
	display: flex;
}
.responsive-title {
	display: none;
	margin-bottom: 10px;
	color: #ffc827;
	align-items: center;
	justify-content: center;
	font-size: 20px;
}
.yellow-bg {
	background: #ffc827 !important;
}
.select-style {
	background: transparent;
	height: 45px;
	border-radius: 5px;
	padding-left: 20px;
	font-size: 16px;
	border-color: #184234;
}
.custom-card-color {
	background: #192420;
}
.green-card {
	background: #013020;
}
.custom-card > div > img {
	height: 40px;
}
.view-btn:hover {
	cursor: pointer;
}
.yellow-size {
	width: 250px;
}
.view-btn {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	border-radius: 5px;
	color: #1f1f23;
	font-size: 13px;
	font-weight: 500;
	padding: 2px 10px;
	position: relative;
	top: 10px;
	border: none;
}
.custom-card:hover {
	box-shadow: -4.828px -4.828px 6px 0 rgba(255, 200, 39, 0.4),
		3px 5px 8px 0 rgba(255, 82, 1, 0.2);
}
.custom-card {
	box-shadow: -3.828px -3.828px 6px 0 rgba(255, 200, 39, 0.4),
		3px 5px 8px 0 rgba(255, 82, 1, 0.2);
	height: 120px;
	border-radius: 10px;
	justify-content: space-between;
	padding: 30px;
	position: relative;
	transition: all 0.3s ease;
}
.reset-header > .icon > i {
	margin-top: 25px;
}
.reset-header > .icon {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	border-radius: 50%;
	color: #1f1f23;
	font-size: 30px;
	height: 75px;
	margin: 0 auto 15px;
	width: 75px;
}
.custom-padding {
	padding: 25px;
}
.content {
	background: #07261b;
	border: 1px solid hsla(0, 0%, 100%, 0.17);
	height: auto;
	border-radius: 10px;
}
.tabs > .router-links {
	margin: 0;
	width: 100%;
	color: white;
	/* color: #1f1f23; */
	padding: 10px 30px;
}

.loading-bg {
	background: #ffc827;
}
.tabs {
	margin: 0;
	font-size: 17px;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 30px;
}
.div-user {
	display: flex;
	align-items: center;
	justify-content: center;
}
.div-user > img {
	margin-top: 50px;
}
.nav {
	background: #07261b;
	display: flex;
	flex-direction: column;
}
.container {
	position: relative;
	top: 120px;
	height: 1100px;
	width: 100%;
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
@media (max-width: 991px) {
	.responsive-box {
		display: flex;
		flex-direction: column;
	}
	.col-9 {
		width: 100%;
	}
	.col-3 {
		display: none;
	}
	.banner {
		margin-bottom: -80px !important;
	}
	.selection > .row {
		display: flex;
		flex-direction: column;
	}
	.selection > .row > .col-4 {
		width: 100%;
		margin-bottom: 30px;
		padding: 0 40px;
	}
	.bank-inputs > input {
		width: 40%;
	}
	.container {
		height: 1400px;
	}
}
@media (max-width: 767px) {
	.money-input {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.money-input > .col-2 {
		width: 100%;
	}
	.container {
		height: 1500px;
	}
}
@media (max-width: 526px) {
	.bank-inputs > span {
		display: none;
	}
	.responsive-title {
		display: flex;
	}
	.bank-inputs {
		display: flex;
		flex-direction: column;
	}
	.container {
		height: 1600px;
	}
}
@media (max-width: 375px) {
	.selection > .row > .col-4 {
		padding: 0 10px;
	}
}
</style>