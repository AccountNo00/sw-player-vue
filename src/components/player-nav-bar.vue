<script>
// import "../../../assets/css/login.css";
import { mapGetters, mapActions } from "vuex";
export default {
	components: {},
	data() {
		return {
			data: [],
			contact: false,
		};
	},
	computed: {
		...mapGetters("auth", ["profile"]),
	},
	methods: {
		...mapActions("chat", {
			getChatList: "chatList",
		}),
		scrollNav() {
			window.addEventListener("scroll", function () {
				var navbar = document.getElementById("navbar");
				if (window.scrollY === 0) {
					navbar.style.backgroundColor = "#26262600";
					navbar.style.borderBottomColor = "#ffc10700";
				} else {
					navbar.style.backgroundColor = "#02251a";
					navbar.style.borderBottomColor = "#ffc1071a";
				}
			});
		},
		goToMessage() {
			this.$router.push({ path: "/message" });
		},
		goToProfile() {
			this.$router.push({ path: "/profile" });
		},
		goToChangePassword() {
			this.$router.push({ path: "/change-password" });
		},
	},
	mounted() {
		this.scrollNav();
	},
};
</script>

<template>
	<Layout>
		<div class="nav-container" id="navbar">
			<div class="container">
				<div class="box">
					<div class="logo">
						<a href="/">
							<img src="../assets/images/tripledg-logo.png" />
						</a>
					</div>
					<div class="menu d-indline-block">
						<router-link to="/" class="custom-link"
							>HOME</router-link
						>
						<router-link to="/history/bet" class="custom-link"
							>HISTORY</router-link
						>
						<span class="wallet mx-3">
							<i class="las la-user font-size-20"></i>
							PLAYER
							<!-- <span class="balance">
								<img
									style="height: 25px; margin-right: 5px"
									src="../assets/images/wallet-icon.png"
								/>P105,1003
							</span> -->
							<router-link
								to="/transaction/deposit"
								class="balance"
								><img
									style="
										height: 25px;
										margin-right: 5px;
										margin-top: -5px;
									"
									src="../assets/images/wallet-icon.png"
								/>P105,1003</router-link
							>
							<span class="dropdown">
								<b-dropdown variant="none">
									<template #button-content>
										<i
											class="fa fa-cog"
											style="font-size: 17px"
										></i>
									</template>
									<b-dropdown-item @click="goToMessage()">
										Message
									</b-dropdown-item>
									<b-dropdown-item @click="goToProfile()">
										Profile
									</b-dropdown-item>
									<b-dropdown-item
										@click="goToChangePassword()"
									>
										Change Password
									</b-dropdown-item>
									<b-dropdown-item @click="contact = true">
										Contact Us
									</b-dropdown-item>
									<b-dropdown-item @click="handleInfo">
										Logout
									</b-dropdown-item>
								</b-dropdown>
							</span>
						</span>
					</div>
				</div>
			</div>
			<div class="modal-fullscreen" v-if="contact == true">
				<div class="modal-content">
					<div class="row">
						<div class="col-6">
							<div
								class="col-12 d-flex justify-content-center align-items-center"
							>
								<img
									src="../assets/images/tripledg-logo.png"
									alt="logo"
									class="trippledg-logo mx-auto"
								/>
							</div>
						</div>
						<div class="col-6">
							<div
								class="col-12 d-flex justify-content-center align-items-start flex-column fs-4"
							>
								<div class="contact-num mb-2 mt-5 pt-5">
									<span
										class="text-uppercase d-block fw-bold text-white"
										>CONTACT</span
									><span
										class="text-uppercase d-block txt-gold fw-bolder"
										><span class="fw-normal text-white fs-6"
											>SMART:</span
										>
										0919-056-7779</span
									><span
										class="text-uppercase d-block txt-gold fw-bolder"
										><span class="fw-normal text-white fs-6"
											>Telephone:
										</span>
										02-8860-5951</span
									>
								</div>
								<div class="contact-num mb-2">
									<span
										class="text-uppercase d-block fw-bold text-white"
										>EMAIL</span
									><span class="d-block txt-gold fw-bolder"
										>customerservice@tripledg.com</span
									>
								</div>
								<div class="contact-num mb-2">
									<span
										class="text-uppercase d-block fw-bold text-white"
										>MESSAGE</span
									><span class="d-block txt-gold fw-bolder"
										>https://dev-player.tripledg.co/message-create</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary p-3 text-danger"
						@click="contact = false"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</Layout>
</template>
<style scoped>
.txt-gold {
	color: #e3be73;
}
.trippledg-logo {
	height: 350px;
}
.modal-footer > button {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	width: 100px;
	margin: 10px;
}

.modal-content > .row {
	margin-top: 250px;
}
.modal-content {
	width: 100%;
	border-bottom: 1px solid #0b6d4c;
}
.content-wrapper {
	width: 100%;
	max-height: 780px;
	color: rgb(192, 192, 192);
	border-bottom: 1px solid #0b6d4c;
}
.modal-fullscreen {
	margin: 0;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #013020;
	display: flex;
	position: fixed;
	z-index: 100;
	flex-direction: column;
}
.dropdown {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	border-radius: 10px;
	margin-left: 15px;
}
.menu > .wallet {
	background-color: #262626;
	border-radius: 10px;
	height: 44px;
	padding-left: 15px;
	width: auto;
	color: #ffc827;
}
.menu > .wallet > .balance {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	padding: 9px;
	border-radius: 5px;
	color: white;
	font-size: 12px;
	margin-left: 10px;
	font-family: Josefin Sans, sans-serif;
	font-weight: bolder;
}
.menu {
	margin-top: 30px;
	font-weight: 600;
}
.menu span {
	padding: 10px;
	font-size: 14px;
	color: white;
	cursor: pointer;
	letter-spacing: 1px;
}
.menu > .custom-link {
	padding: 10px;
	font-size: 14px;
	color: white;
	cursor: pointer;
	letter-spacing: 1px;
}
.box {
	display: flex;
	justify-content: space-between;
	margin-top: 18px;
}
.logo img {
	max-height: 93px;
	max-width: 162px !important;
}
.nav-container {
	height: 126px;
	transition: background-color 0.3s ease;
	background: #02251a;
	width: 100%;
	border-bottom: 1px solid #ffc1071a;
	position: fixed;
	top: 0;
	z-index: 99;
}
.container {
	max-width: 1197px;
}
@media (max-width: 1124px) {
	.logo {
		margin-left: 50px;
	}
}
@media (max-width: 768px) {
	.menu {
		display: none;
	}
}
@media (max-width: 425px) {
	.logo {
		margin-left: 10px;
	}
	.logo img {
		max-height: 73px;
	}
	.nav-container {
		height: 106px;
	}
}
</style>