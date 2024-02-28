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
	},
	mounted() {},
};
</script>

<template>
	<navBar />
	<div class="main-container">
		<div class="section-1">
			<div class="banner-wrapper bg-main d-flex">
				<div class="apple">
					<img src="../../../assets/images/apple-logo.png" />
					<button class="play-now btn-glow mx-auto">PLAY NOW</button>
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
.roullete {
	margin-top: 203px;
}
.apple {
	display: flex;
	flex-direction: column;
}
.apple > img {
	height: 425px;
	position: relative;
}
.roullete {
	margin-left: 11px;
}
.roullete > img {
	margin-top: -59px;
	height: 709px;
}
.banner-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}
.section-1 {
	width: 100%;
	height: 900px;
	/* background: #10201a; */
	background-image: url(../../../assets/images/hero-bg.jpg);
	background-repeat: no-repeat;
	background-size: auto 1000px;
}
.section-2 {
	display: flex;
	justify-content: center;
	align-items: center;
}
.section-2 > img {
	max-width: 100%;
	height: auto;
	display: block;
}
/* .bg-main {
	background-repeat: no-repeat !important;
	background-size: cover !important;
	position: relative;
	background: url("../../../assets/images/banner-bg.png") 50%;
} */
@media (max-width: 1480px) {
	.roullete > img {
		height: 509px;
	}
	.apple > img {
		margin-top: 50px;
		height: 325px;
	}
	.section-1 {
		height: 750px;
	}
}
@media (max-width: 1140px) {
	.roullete > img {
		height: 409px;
	}
	.apple > img {
		margin-top: 80px;
		height: 225px;
	}
}
@media (max-width: 840px) {
	.banner-wrapper {
		flex-direction: column;
	}
	.apple > img {
		margin-top: 150px;
		height: 425px;
	}
	.section-1 {
		height: 1350px;
	}
	.roullete {
		margin-top: 120px;
	}
	.roullete > img {
		height: 609px;
	}
}
@media (max-width: 768px) {
	.apple > img {
		height: 325px;
	}
	.roullete > img {
		height: 509px;
	}
	.section-1 {
		height: 1150px;
	}
}
@media (max-width: 586px) {
	.apple > img {
		height: 225px;
	}
	.roullete > img {
		height: 409px;
	}
	.section-1 {
		height: 950px;
	}
}
@media (max-width: 420px) {
	.apple > img {
		max-width: 100%;
		height: auto;
		display: block;
	}
	.roullete > img {
		max-width: 100%;
		height: auto;
		display: block;
	}
}
@media (max-width: 375px) {
	.section-1 {
		height: 850px;
	}
}
@media (max-width: 320px) {
	.section-1 {
		height: 800px;
	}
}
</style>