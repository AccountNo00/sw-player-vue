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
				var sticky = navbar.offsetTop;
				if (window.pageYOffset >= sticky) {
					// navbar.style.backgroundColor = "#26262600";
					// navbar.style.borderBottomColor = "#ffc10700";
					navbar.classList.add("sticky");
				} else {
					// navbar.style.backgroundColor = "#02251a";
					// navbar.style.borderBottomColor = "#ffc1071a";
					navbar.classList.remove("sticky");
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
		<div>
			<div class="nav-upper">
				<div class="upper-container">
					<div class="upper-box">
						<div class="profile">
							<div class="logo w-25 d-flex justify-content-start">
								<a href="/">
									<img src="../assets/images/tripledg-logo.png" />
								</a>
							</div>
							<span class="wallet w-75 d-flex justify-content-end">
								<div class="wallet-wrapper">
									<i class="las la-user font-size-20"></i>
									PLAYER
									<router-link to="/transaction/deposit" class="balance">
										<img src="../assets/images/wallet-icon.png" />
										P105,1003
									</router-link>
								</div>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="nav-container" id="navbar">
				<div class="container">
					<div class="box">
						<div class="menu d-indline-block">
							<router-link to="/" class="custom-link">HOME</router-link>
							<router-link to="/history/bet" class="custom-link">HISTORY</router-link>
							<router-link to="/message" class="custom-link">MESSAGE</router-link>
							<router-link to="/profile" class="custom-link">PROFILE</router-link>
							<router-link to="/" class="custom-link">LOGOUT</router-link>
						</div>
					</div>
				</div>
				<div class="modal-fullscreen" v-if="contact == true">
					<div class="modal-content">
						<div class="row">
							<div class="col-6">
								<div class="col-12 d-flex justify-content-center align-items-center">
									<img src="../assets/images/tripledg-logo.png" alt="logo"
										class="trippledg-logo mx-auto" />
								</div>
							</div>
							<div class="col-6">
								<div class="col-12 d-flex justify-content-center align-items-start flex-column fs-4">
									<div class="contact-num mb-2 mt-5 pt-5">
										<span class="text-uppercase d-block fw-bold text-white">CONTACT</span><span
											class="text-uppercase d-block txt-gold fw-bolder"><span
												class="fw-normal text-white fs-6">SMART:</span>
											0919-056-7779</span><span
											class="text-uppercase d-block txt-gold fw-bolder"><span
												class="fw-normal text-white fs-6">Telephone:
											</span>
											02-8860-5951</span>
									</div>
									<div class="contact-num mb-2">
										<span class="text-uppercase d-block fw-bold text-white">EMAIL</span><span
											class="d-block txt-gold fw-bolder">customerservice@tripledg.com</span>
									</div>
									<div class="contact-num mb-2">
										<span class="text-uppercase d-block fw-bold text-white">MESSAGE</span><span
											class="d-block txt-gold fw-bolder">https://dev-player.tripledg.co/message-create</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary p-3 text-danger" @click="contact = false">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
<style scoped></style>