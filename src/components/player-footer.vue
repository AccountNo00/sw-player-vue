<script>
// import "../../../assets/css/login.css";
import { mapGetters, mapActions } from "vuex";
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
	mounted() {},
};
</script>

<template>
	<div class="main-container">
		<div class="content-1">
			<div class="footer-wrapper">
				<div class="logo">
					<img src="../assets/images/tripledg-logo.png" />
				</div>
				<div class="terms">
					<span>Games</span>
					<span>Terms & Conditions</span>
					<span>Privacy Policy</span>
				</div>
			</div>
		</div>
		<div class="copyright text-center">
			<p>Copyrights © 2023 All Rights Reserved by <a>dotAra</a></p>
		</div>
	</div>
</template>
<style scoped>
.terms > span {
	padding: 3px 10px;
	font-size: 15px;
	color: rgba(255, 255, 255, 0.61);
}
.logo {
	margin-top: 35px;
}
.terms {
	margin-top: 80px;
}
.logo > img {
	max-height: 93px;
}
.footer-wrapper {
	display: flex;
	justify-content: space-between;
	margin: 0 360px;
}
.content-1 {
	height: 150px;
	background: #02251a;
	width: 100%;
	border-bottom: 1px solid #ffc1071a;
}
.copyright {
	background: #02251a;
	height: 70px;
}
.copyright > p {
	position: relative;
	top: 20px;
	font-size: 15px;
	color: rgba(255, 255, 255, 0.61);
}
.copyright > p > a {
	color: #ffc827;
}
@media (max-width: 1600px) {
	.footer-wrapper {
		margin: 0 200px;
	}
}
@media (max-width: 1024px) {
	.footer-wrapper {
		margin: 0 50px;
	}
}
@media (max-width: 600px) {
	.footer-wrapper {
		flex-direction: column;
		margin: 0;
		text-align: center;
	}
	.terms,
	.logo {
		margin-top: 10px;
	}
}
@media (max-width: 332px) {
	.content-1 {
		height: 180px;
	}

	.terms {
		width: 200px;
		margin: 10px auto;
	}
	.copyright > p {
		width: 250px;
		margin: 0 auto;
	}
}
</style>