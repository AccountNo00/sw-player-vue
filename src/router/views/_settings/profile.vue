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
	<div class="main-container">
		<div class="banner">
			<div class="justify-content-center">
				<div class="banner-center justify-content-center">
					<h2 class="title text-white fw-bold">User Profile</h2>
					<ul
						class="breadcrumbs d-flex flex-wrap align-items-center justify-content-center"
					>
						<span><a class="" href="/">Home </a></span>
						<span>⮞</span>
						<span>User Profile</span>
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
								to="/profile"
								class="router-links loading-bg"
								>Profile</router-link
							>
							<router-link
								to="/change-password"
								class="router-links"
								>Change Password</router-link
							>
						</div>
					</div>
				</div>
				<div class="col-9">
					<div class="content">
						<div class="custom-padding profile-inputs">
							<div class="row">
								<div class="col-6">
									<div class="px-2 mb-3">
										<label class="text-white"
											>First Name</label
										>
										<input
											class="form-control select-style"
											disabled
										/>
									</div>
									<div class="px-2 mb-3">
										<label class="text-white"
											>Username</label
										>
										<input
											class="form-control select-style"
											disabled
										/>
									</div>
									<div class="px-2 mb-3">
										<label class="text-white"
											>Phone Number</label
										>
										<input
											class="form-control select-style"
											disabled
										/>
									</div>
								</div>
								<div class="col-6">
									<div class="px-2 mb-3">
										<label class="text-white"
											>Last Name</label
										>
										<input
											class="form-control select-style"
											disabled
										/>
									</div>
									<div class="px-2 mb-3">
										<label class="text-white"
											>Email Address</label
										>
										<input
											class="form-control select-style"
											disabled
										/>
									</div>
									<div class="px-2 mb-3">
										<label class="text-white"
											>Address</label
										>
										<input
											class="form-control select-style"
											disabled
										/>
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
.banner-center {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.profile-inputs {
	/* background: #02251a; */
	background: linear-gradient(rgba(6, 46, 41, 0.95), rgba(6, 46, 41, 0.95)),
		url(../../../assets/images/shape.png);
	border-radius: 8px;
	box-shadow: -4.828px -4.828px 12px 0 rgba(255, 200, 39, 0.4),
		3px 5px 15px 0 rgba(255, 82, 1, 0.2);
}
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
	background: #013020;
	height: 45px;
	border-radius: 5px;
	padding-left: 20px;
	font-size: 16px;
	border-color: #184234;
	color: white;
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
	height: 100px;
}
.nav {
	background: #07261b;
	display: flex;
	flex-direction: column;
}
.container {
	position: relative;
	top: 120px;
	height: 600px;
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
}
@media (max-width: 767px) {
	.money-input {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.money-input > .col-2 {
		width: 100%;
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
}
@media (max-width: 375px) {
	.selection > .row > .col-4 {
		padding: 0 10px;
	}
}
</style>