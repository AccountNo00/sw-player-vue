<script>
// import "../../../assets/css/login.css";
import { mapGetters, mapActions } from "vuex";
import navBar from "../../../components/player-nav-bar.vue";
import Footer from "../../../components/player-footer.vue";
import "../../../assets/css/custom.css"
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
	},
	mounted() { },
};
</script>

<template>
	<navBar />
	<div class="main-container">
		<div class="section-1">
			<div class="banner-wrapper bg-main d-flex">
				<div class="apple">
					<img src="../../../assets/images/apple-logo.png" />
					<button class="play-now btn-glow mx-auto fw-bold">PLAY NOW</button>
				</div>
				<div class="roullete">
					<img src="../../../assets/images/roullete.png" />
				</div>
			</div>
		</div>
		<div class="section-2">
			<img src="../../../assets/images/banner-2.png" />
		</div>
	</div>
	<Footer />
</template>
<style scoped></style>