<script>
// import "../../../assets/css/login.css";
import { mapGetters, mapActions } from "vuex";
import "../assets/css/custom.css"
export default {
	components: {},
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
	<div class="content-1">
		<div class="footer-wrapper">
			<div class="footer-logo d-flex">
				<img src="../assets/images/tripledg-logo.png" height="100" />
			</div>
			<div class="terms d-flex">
				<span>Games</span>
				<span>Terms & Conditions</span>
				<span>Privacy Policy</span>
			</div>
		</div>
	</div>
	<div class="copyright text-center">
		<p>Copyrights © 2023 All Rights Reserved by <a>dotAra</a></p>
	</div>
</template>
<style scoped></style>