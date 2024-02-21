<script>
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
export default {
	components: {},
	data() {
		return {
			credentials: "player",
			password: "password",
			terms: false,
			privacy: false,
			responsible: false,
		};
	},
	computed: {
		...mapGetters("auth", ["profile"]),
	},
	methods: {
		...mapActions("auth", {
			authLogin: "loginUser",
		}),
		async login() {
			if (!this.credentials) {
				Swal.fire("Failed!", "Please Input Username", "");
				return;
			}
			if (!this.password) {
				Swal.fire("Failed!", "Please Input Password", "");
				return;
			}
			await this.authLogin({
				credentials: this.credentials,
				password: this.password,
			});
		},
	},
	mounted() {},
};
</script>

<template>
	<div class="container">
		<div class="container-wrapper d-flex">
			<div class="left">
				<div class="account-content-wrapper">
					<div class="logo mb-4 pb-4">
						<a
							><img
								src="../../../assets/images/tripledg-logo.png"
								alt="logo"
						/></a>
					</div>
					<div id="loginForm" class="account__form form row g-4">
						<div class="col-12 text-start">
							<label class="text-white"
								>LOGIN TO YOUR ACCOUNT</label
							>
							<div class="form-group mt-1">
								<div for="credentials" class="input-pre-icon">
									<i class="las la-user"></i>
								</div>
								<input
									type="text"
									class="form--control form-control style--two"
									id="login-username"
									name="credentials"
									placeholder="Username"
									required=""
									v-model="credentials"
								/>
							</div>
						</div>
						<div class="col-12">
							<div class="form-group">
								<div for="pass" class="input-pre-icon">
									<i class="las la-lock"></i>
								</div>
								<div class="input-field2">
									<input
										type="password"
										class="form--control form-control style--two"
										id="login-password"
										placeholder="Password"
										name="password"
										required=""
										v-model="password"
									/>
									<!-- <span class="eye-wrapper"
										><b-button
											classname="btn btn-outline-primary"
											><i
												class="bi bi-eye-slash"
											></i></b-button
									></span> -->
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="form-group mb-3">
								<button
									class="cmn--btn active w-100 btn--round"
									type="submit"
									id="login-btn"
									@click="login()"
								>
									Sign In
								</button>
							</div>
							<div>
								<a
									href="/auth/forgot-password"
									class="yellow-text fs-4 mt-2"
									>Forgot Password ?</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="content text-center text-white">
					<h3 class="mb-4 yellow-text">Welcome to Triple Diamond</h3>
					<span
						><p class="account-switch mt-4">
							Don't have an Account yet ?<a
								class="yellow-text ms-2"
								href="https://dev-kyc.tripledg.co/register"
								>Sign Up</a
							>
						</p></span
					>
					<h4 class="text-white mt-1">LICENSED BY</h4>
					<div class="bg-black mb-3">
						<a
							href="https://pagcor.ph/regulatory/index.php"
							target="_blank"
							><img
								class="l-logo"
								src="../../../assets/images/gaming-logo.png"
								alt="logo"
						/></a>
					</div>
					<div class="">
						<a
							href="https://pagcor.ph/regulatory/index.php"
							target="_blank"
							><img
								class="l-logo"
								src="../../../assets/images/pagcor-logo.png"
								alt="logo"
						/></a>
					</div>
					<p class="text-uppercase text-start fw-bolder fs-6">
						by using this site you agree with the
						<span
							class="yellow-text point cursor-pointer"
							@click="terms = true"
							>terms and conditions</span
						>,
						<span class="yellow-text point cursor-pointer"
							>privacy policy</span
						>, and the
						<span class="yellow-text point cursor-pointer"
							>responsible gaming</span
						>
					</p>
					<p class="text-start fw-500 fs-6 mt-5">
						We're ready to assist you!
						<span class="yellow-text point fw-500">Contact Us</span>
					</p>
				</div>
			</div>
		</div>
		<!-- MODALS -->
		<div class="modal-fullscreen" v-if="terms == true">
			<div class="title">
				<h3 class="p-3 text-white">Terms & Condition</h3>
			</div>
			<div class="modal-content">
				<div class="content-wrapper p-2">
					<h3 class="ql-align-center"><br /></h3>
					<p><br /></p>
					<p><br /></p>
					<p>
						The provisions in this Terms of Use for the “Fiesta
						Fruit Game-Super Pula Puti" shall apply to the use of
						services offered by TRIPLE DIAMOND GAMING INCORPORATED
						by customers and gaming site operators. By logging in to
						www.tripledg.com and/or using its services, the customer
						hereby agrees to be bound by these Terms and Conditions.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">1.</span> &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Definition of Terms
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; A. &nbsp; &nbsp; &nbsp;Account shall mean any of
						the following: PLAYER ACCOUNT, and other types of
						accounts maintained and owned by the customer, which may
						be registered with www.tripledg.com
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; B. &nbsp; &nbsp; &nbsp;“Arena” shall mean the
						cockpit where the coverage is taking place. Customer or
						Player refers to the owner of an Account or individual
						who uses the platform and utilizes their money to place
						wager/s at www.tripledg.com
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; C. &nbsp; &nbsp; &nbsp;Gaming Site Operator is a
						third-party vendor offering gaming services to the
						public, where a new player can register, watch games,
						accept player cash-ins, place wagers, and cash-out
						winnings onsite.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; D. &nbsp; &nbsp; Triple Diamond shall mean TRIPLE
						DIAMOND GAMING INCORPORATED, its successors-in-interest,
						and assigns.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; E. &nbsp; &nbsp; &nbsp;Mobile Device shall mean
						any portable gadget such as, but not limited to,
						smartphones and tablet computers, used by the customer
						to access the gaming platform.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; F. &nbsp; &nbsp; &nbsp;Inactive account is a
						player account that has no activity for the last thirty
						(30) calendar days.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; G. &nbsp; &nbsp; Dormant account is a player
						account that has no activity for the last three hundred
						sixty (365) days.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; H. &nbsp; &nbsp; "Pending" status occurs when an
						account has been reviewed by the Company, and it has
						been determined that the customers KYC details are still
						incomplete and require further submission of documents.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp;I. &nbsp; &nbsp; &nbsp; Approved status
						indicates the account has been reviewed by the Company,
						and the details have been verified and considered
						acceptable. The player may now process to load the
						account, place bets, and make subsequent withdrawals.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp;J. &nbsp; &nbsp; &nbsp; "Declined" status
						occurs when, after the player account registration has
						been reviewed, the account has been subsequently
						rejected.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; K. &nbsp; &nbsp; &nbsp;Account on hold shall mean
						an account that allows the Customer or Player to view
						their account balances and initiate a withdrawal request
						but is prevented from watching a game, placing a wager,
						and making top-ups.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; L. &nbsp; &nbsp; &nbsp;Blacklisted account shall
						mean an account that has been banned or removed from the
						site due to fraud or any similar incident that may lead
						the Company to close the account and prevent the
						player’s future access.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp;M. &nbsp; &nbsp;Earned points are the result of
						the winnings and losses due to bets made by the player
						in their account.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp;N. &nbsp; &nbsp; &nbsp;"Service" refers to the
						services provided by a client to perform any or all of
						the following:
					</p>
					<p>
						· &nbsp; &nbsp; &nbsp; &nbsp;Send and receive funds from
						www.tripledg.com
					</p>
					<p><br /></p>
					<p>
						· &nbsp; &nbsp; &nbsp; &nbsp;Collect earned points from
						the transactions or online transactions
					</p>
					<p><br /></p>
					<p>
						· &nbsp; &nbsp; &nbsp; &nbsp;Such other functionalities
						that may be designed for www.tripledg.com
					</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">2.</span> &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Grant of License and
						Applicability of Terms of Use
					</p>
					<p>
						The customer acknowledges that the platform
						www.tripledg.com is non-exclusive, non-sublicensable,
						non-transferable, personal, and limited to use on a
						mobile device owned or controlled by the customer. This
						usage is solely for personal use only and in accordance
						with the provisions stated in these Terms and
						Conditions.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">3.</span> &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Participation
					</p>
					<p>
						Participation in the game is solely at the player’s
						discretion and risk. TRIPLE DIAMOND GAMING INCORPORATED
						reserves the right to request customers to provide proof
						of identity and age as a prerequisite for participating
						in the game at any period of time throughout their use
						of the platform. Customers agree that TRIPLE DIAMOND
						GAMING INCORPORATED may use the personal information
						collected to conduct appropriate anti-fraud checks. The
						personal information provided may be disclosed to a
						credit reference or fraud prevention agency.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p>
						<span style="color: rgb(103, 150, 230)">4.</span> &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Player Account
						Registration
					</p>
					<p>Who may register:</p>
					<p><br /></p>
					<p>a) Any person 21 years of age and above</p>
					<p>
						b) Not among the banned personalities (i.e., government
						official or employee connected with the operation of the
						government or to any of its agencies, member of the
						Armed Forces of the Philippines, including the Army,
						Navy, Air Force or the Philippine National Police) as
						provided under Memorandum Circular No. 6, Series of 2016
						of the Office of the President.
					</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						A Player shall be required to comply with Know Your
						Customer (KYC) procedures as a requirement for
						registration. Player is likewise under obligation to
						update his personal details in case of any change
						therein. Full compliance with the KYC requirement is a
						pre-requisite for withdrawal or cash-out transactions
						and must be completed within seven (7) calendar days
						from registration.
					</p>
					<p><br /></p>
					<p>&nbsp; &nbsp; &nbsp;</p>
					<p><br /></p>
					<p>&nbsp; &nbsp; Only one account per player is allowed.</p>
					<p><br /></p>
					<p>&nbsp; &nbsp; &nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">5.</span> &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Account Funding and
						Withdrawal
					</p>
					<p>
						a) Fund withdrawals, and/or transfers from and to a
						payment/banking solution account other than a player’s
						registered account is strictly prohibited.
					</p>
					<p>
						b) Fund sharing or “pasaload” between players is
						strictly prohibited.
					</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">6.</span> &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Responsible Gaming
					</p>
					<p>
						a) Players shall read and accept the Responsible Gaming
						Statement, Terms of Use, and Privacy Policy every time
						they log-in.
					</p>
					<p>
						b) Violation of any of the provisions of the Responsible
						Gaming Statement, Terms of Use, and Privacy Policy shall
						be a ground for the cancellation or suspension of a
						player’s account, and/or the forfeiture of funds
						thereof, as the case may be.
					</p>
					<p><br /></p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">7.</span> &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Warranties of Customer
					</p>
					<p>Upon registration, the customer warrants that they:</p>
					<p><br /></p>
					<p>
						a) Is legally able to participate in the ONLINE BETTING
						platform;
					</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						b) Is the true and lawful owner of the points and/or
						that he/she is duly authorized to utilize such points;
					</p>
					<p>
						c) &nbsp;Shall not deposit or wager any monies in the
						ONLINE BETTING which were derived from illegal
						activities.
					</p>
					<p>
						d) Shall not charge back, deny, reverse, and/or
						countermand any payment to TRIPLE DIAMOND GAMING
						INCORPORATED;
					</p>
					<p>
						e) Shall ensure that monies owed by the customer to the
						gaming platform are paid to TRIPLE DIAMOND GAMING
						INCORPORATED; any payment made to a third party shall
						not constitute a discharge thereof. Any breach hereof
						may result in TRIPLE DIAMOND GAMING INCORPORATED’s
						refusal to credit any cash-in for points;
					</p>
					<p>f) &nbsp; Has read and understood these Terms of Use.</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">8.</span> &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;General Rules
						Governing the Use of the Platform
					</p>
					<p>
						Customer hereby agrees to be bound by the following
						general rules governing the use of the platform:
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						In order to use and gain full access of the Fiesta Fruit
						Game - Super Pula Puti, customer must register only at
						www.tripledg.com.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						All bets are assumed final by the customer. The minimum
						wager is 200 points which is a direct equivalent of Php
						200.00.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						All newly registered players shall be required to post
						an initial deposit in the amount of Php 1,000.00.
						Subsequent deposits or top-ups must be at least Php
						500.00.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						Betting can only be done through the Game/Betting
						Platform. Betting done through the chat room or any
						other means aside from the Game/Betting Platform is VOID
						or INVALID.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						TRIPLE DIAMOND GAMING INCORPORATED reserves the right to
						exclude players from participating in the betting
						without prior notice and/or reasons for exclusion.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						If BETTING has been closed and bets have NOT been
						placed, the game will continue and a result will be
						declared.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						If BETTING has been closed and bets have been placed,
						the game will continue and the winning side will be
						declared-all players included in the winning side will
						get paid.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						The game host will announce when the platform will start
						accepting bets. At this time, the player has the option
						to place a wager on his/her chosen fruit color.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						In the event that a game has been cancelled, the host
						will declare it as CANCELLED and point/s will be
						credited back to accounts which have played.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						In the event of a video latency: If betting is closed
						before the video latency, betting will RESUME and the
						result of the game will be DECLARED.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						If betting is open before video latency: The betting
						will be CANCELLED, and the wagers will be CREDITED back
						to the player’s account.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						In the event that the betting is open and the game has
						started: The betting will be CANCELLED, and the wagers
						will be CREDITED back to the player’s account.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						The DECLARED WINNER by the game host at the end of each
						game is FINAL; UNLESS the management requests for a
						review of the game due to a dispute on the actual
						declaration.
					</p>
					<p><br /></p>
					<p>
						Only the Management may request a review of the game in
						question.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						If Management decides to change the initial declaration,
						TRIPLE DIAMOND GAMING INCORPORATED will honor the
						decision and make the necessary adjustments to the
						players’ points.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						The game review, and the change in the declaration, if
						applicable, must be done before the next game resumes.
						Otherwise, the initial declaration will be considered
						FINAL and IRREVOCABLE.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						The ODDS and PAYOUTS are computed AUTOMATICALLY and are
						considered final after the RESULT has been DECLARED.
						Should a player require clarifications regarding the
						received payout, they may contact customer support.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						In the event a players ACCOUNT is BLACKLISTED, a
						withdrawal can be requested, and all points will be
						credited to the nominated bank account. A blacklisted
						player account cannot view the account, place bets, or
						make top-ups.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						Customers should not share their account passwords with
						anyone and are ultimately responsible for keeping their
						account information private.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>Lost Mobile Device</p>
					<p><br /></p>
					<p>
						In the event a customer loses their Mobile Device/SIM,
						it is their sole responsibility to reset the password to
						prevent any unauthorized use of the player account. In
						the case that Customer cannot access their account due
						to a lost SIM, they should inform Customer Support for
						player account blocking, after conducting customer
						identification. Customers shall remain accountable for
						all the transactions made using their account prior to
						password reset and account blocking.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>Refusal to Register, Exclusion and Suspension</p>
					<p><br /></p>
					<p>
						TRIPLE DIAMOND GAMING INCORPORATED may decline a new
						player’s account registration should there be any
						findings of concern in the due diligence conducted. The
						customer acknowledges hereby that TRIPLE DIAMOND GAMING
						INCORPORATED is not obliged to give prior notice of its
						decision to refuse, exclude, or suspend, nor to furnish
						the customer with any reasons for such decision.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						If TRIPLE DIAMOND GAMING INCORPORATED is made aware that
						a player is a minor, it will, except where there are
						grounds to believe that a fraud has been perpetrated:
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp;a) &nbsp; &nbsp; Suspend the account immediately.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp;b) &nbsp; &nbsp; &nbsp;Void all wagers that have
						taken place.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp;c) &nbsp; &nbsp; &nbsp;Refund the value of all
						deposits net of withdrawals and,
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp;d) &nbsp; &nbsp; &nbsp;Close the account.
					</p>
					<p>&nbsp;</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						Consequences of Account Rejection, Exclusion, or
						Suspension
					</p>
					<p><br /></p>
					<p>
						Once the player account has been declined, excluded, or
						suspended from the Platform, TRIPLE DIAMOND GAMING
						INCORPORATED shall have the right to:
					</p>
					<p><br /></p>
					<p><br /></p>
					<p><br /></p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp;a) &nbsp; &nbsp; Withhold payment of any contested
						funds whether such contested funds are deposits,
						refunds, payouts, or the like; and/or
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp;b) &nbsp; &nbsp; &nbsp;Exclude customer from the
						Platform and/or solely determine what criteria have to
						be met in order to establish a New Account; and/or
					</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp;c) &nbsp; &nbsp; &nbsp;In the case of fraudulent,
						illegal or similar misconduct or failure to pay any
						sum/s due to TRIPLE DIAMOND GAMING INCORPORATED, the
						Company will:
					</p>
					<p>
						· &nbsp; &nbsp; &nbsp; &nbsp;Furnish any relevant
						information about the client to an intra-group database
						recording such mischief and,
					</p>
					<p>
						· &nbsp; &nbsp; &nbsp; &nbsp;If necessary, hand over
						client account details to a collection agency for the
						recovery of any sums owed by the player. &nbsp;
					</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						Customer hereby irrevocably authorizes TRIPLE DIAMOND
						GAMING INCORPORATED to do so in its absolute discretion,
						and/or have forfeited to Triple Diamond any contested
						funds that may be derived by the customer from
						fraudulent, illegal, or similar misconduct.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">9.</span> &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Disclaimer
					</p>
					<p>
						TRIPLE DIAMOND GAMING INCORPORATED, shall not incur
						liability in any of these cases:
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; A. &nbsp; &nbsp; &nbsp;TRIPLE DIAMOND GAMING
						INCORPORATED is unable to receive or execute any of the
						requests from the customer due to reasons beyond its
						control;
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; B. &nbsp; &nbsp; &nbsp;There is loss of
						information during processing or transmission or any
						unauthorized access by any other person or breach of
						confidentiality due to reasons beyond the control of
						TRIPLE DIAMOND GAMING INCORPORATED;
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; C. &nbsp; &nbsp; &nbsp;There is a loss of any
						kind, whether direct or indirect, incurred by the
						customer or any other person due to any failure or lapse
						in the Platform;
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; D. &nbsp; &nbsp; Any loss, cost, or damages
						suffered by the player or any third person as a result
						of, or caused by any delay in transfer, non-transfer of
						funds, and/or debiting and/or crediting of funds carried
						out by TRIPLE DIAMOND GAMING INCORPORATED, and/or
						default on the part of TRIPLE DIAMOND GAMING
						INCORPORATED in performing the Platform due wholly or in
						part, to defects, delays, malfunctions, interruptions,
						failures, or breach of security in its computer system,
						and/or causes beyond its control;
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; E. &nbsp; &nbsp; &nbsp;There is a failure, delay,
						interruption, suspension, restriction, or error in the
						transmission of any information or message to and from
						the Mobile Device of the customer and the network of any
						service provider and TRIPLE DIAMOND GAMING INCORPORATED;
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; F. &nbsp; &nbsp; &nbsp;There is a breakdown,
						interruption, suspension, or failure of the player’s
						mobile device, or the network of any service provider
						and/or any third party who provides such services which
						causes a delay or failure to provide the platform;
					</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; G. &nbsp; &nbsp; Platform is not compatible with
						/ does not work on the Mobile Device of the customer;
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; H. &nbsp; &nbsp; Claims that resulted from breach
						or failure of the player to perform any obligation
						and/or warranties covered by the Terms of Use,
						regardless whether such breach or failure is done
						willfully or not or merely by negligence or lack of
						knowledge.
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp;I. &nbsp; &nbsp; &nbsp; Any loss or damage,
						whether direct, indirect, or consequential, including
						but not limited to loss of revenue, profit, business,
						contracts, anticipated savings, goodwill, or loss of use
						or value of any equipment including software, whether
						foreseeable or not, suffered by the customer or any
						person from or relating to any delay, interruption,
						suspension, resolution, or error in receiving and
						processing the request, and in formulating and returning
						responses;
					</p>
					<p>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp;J. &nbsp; &nbsp; &nbsp; There is a loss or
						claim of any kind, including but not limited to loss of
						data or information arising from any unauthorized,
						unlawful, or fraudulent access to or use by any third
						party of the mobile device of the player, which includes
						hacking, or when the Mobile Device has been subjected to
						tampering or is non-compliant with the standards of the
						manufacturer, such as but not limited to cases of
						"jailbreaking", "rooting", "unlocking", use of outdated
						or unlicensed software systems, or other similar
						activities.
					</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">10.</span>
						&nbsp; &nbsp; &nbsp; &nbsp;Indemnity
					</p>
					<p>
						Customer agrees to indemnify and hold TRIPLE DIAMOND
						GAMING INCORPORATED., its directors, officers, employees
						and assigns, free and harmless against all actions,
						claims, demands, proceedings, loss, damages, costs,
						charges, and expenses which TRIPLE DIAMOND GAMING
						INCORPORATED, customer, or any third party may at any
						time incur, sustain, suffer or be put to, as a
						consequence of or arising out of or in connection with
						the customers use of the platform.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						Customer shall indemnify TRIPLE DIAMOND GAMING
						INCORPORATED, and hold it free and harmless against any
						and all claim, action, loss, damage, or liability
						arising from any unauthorized, unlawful, or fraudulent
						access to or use by any third party of the Application;
						from breach of confidentiality or security of Clients
						User ID, password, Mobile Device, and SIM; from any
						unauthorized, unlawful or fraudulent transactions made,
						and/or from any harmful or malicious third party
						application/s installed or downloaded, whether
						advertently or inadvertently, on customer’s mobile
						device or computer.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">11.</span>
						&nbsp; &nbsp; &nbsp; &nbsp;Gaming Site Operators and
						Customers
					</p>
					<p>
						Gaming Site Operators and Customers have agreed on the
						following:
					</p>
					<p><br /></p>
					<p>
						a) Understands that the grant of use of the Platform
						under the Terms of Use may be revoked at any time at the
						discretion of TRIPLE DIAMOND GAMING INCORPORATED;
					</p>
					<p>
						b) Will not decompile or reverse engineer the Platform.
						All rights not expressly granted to the Gaming Site
						Operators and Customers under these Terms of Use are
						specifically reserved by TRIPLE DIAMOND GAMING
						INCORPORATED.
					</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						c) &nbsp;Agrees that the Terms of Use is an agreement
						between Gaming Site Operators and Customers, and TRIPLE
						DIAMOND GAMING INCORPORATED. Third-Party Licensor is not
						a party to the Terms and Conditions and does not own and
						shall not be responsible for the Platform, including but
						not limited to;
					</p>
					<p>
						· &nbsp; &nbsp; &nbsp; &nbsp;Any warranties and/or
						support obligations related to the Platform if any,
						and/or
					</p>
					<p>
						· &nbsp; &nbsp; &nbsp; &nbsp;Claim arising from the use
						thereof.
					</p>
					<p>d) Are not located outside the Philippines;</p>
					<p>
						e) Will protect all the trademarks and service marks of
						TRIPLE &nbsp;DIAMOND GAMING INCORPORATED,
						www.tripledg.com, and all other aspects associated with
						its use and/or its provision;
					</p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">12.</span>
						&nbsp; &nbsp; &nbsp; &nbsp;Disputes of Unauthorized
						Transactions
					</p>
					<p>
						Transactions are authorized when validated by TRIPLE
						DIAMOND GAMING INCORPORATED or the customer has
						authenticated the same. This shall be sufficient
						evidence that any and all activity has been made and
						validated, and cannot be disputed by the Customer.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						The details in the bank notification/SMS/email
						confirmation message after every transaction and/or the
						entries in the Statement of Account are conclusively
						presumed true and correct unless the Customer notifies
						TRIPLE DIAMOND GAMING INCORPORATED in writing or SMS
						message of any dispute thereon within thirty (30)
						business days from the date of transaction. Disputed
						transactions will only be credited back to the customers
						account once the claim/dispute has been properly
						processed, investigated, and proven to be in the favor
						of the customer.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						<span style="color: rgb(103, 150, 230)">13.</span>
						&nbsp; &nbsp; &nbsp; &nbsp;Other Provisions
					</p>
					<p><br /></p>
					<p>
						TRIPLE DIAMOND GAMING INCORPORATED strictly prohibits
						the duplication, modification, distribution, and public
						exhibition of its video contents without its written
						authorization. TRIPLE DIAMOND GAMING INCORPORATED also
						reserves the right to amend or modify the Terms of Use
						at any time by posting on its website or sending the
						revised Terms of Use through email or text messages and
						the revised Terms of Use shall be effective at such
						time. The continued use by customers of the platform
						will constitute acceptance of the revised and/or
						modified Terms of Use.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						A valid government-issued ID will be required from
						customers who will cash out their points as part of
						TRIPLE DIAMOND GAMING INCORPORATEDs validation and
						verification process, in compliance with the applicable
						PAGCOR and BSP regulations.
					</p>
					<p><br /></p>
					<p>&nbsp;</p>
					<p><br /></p>
					<p>
						Any inquiries or complaints relating to the use of the
						platform, including those pertaining to intellectual
						property rights, must be directed to TRIPLE DIAMOND
						GAMING INCORPORATED at the contact details indicated on
						the help page.
					</p>
				</div>
			</div>
			<div class="modal-footer">
				<button
					type="button"
					class="btn btn-secondary p-3 text-danger"
					@click="terms = false"
				>
					Close
				</button>
			</div>
		</div>
	</div>
</template>
<style scoped>
.modal-footer > button {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	width: 100px;
	margin: 10px;
}
.modal-content {
	width: 100%;
}
.content-wrapper {
	margin-top: 62px;
	width: 100%;
	max-height: 780px;
	color: rgb(192, 192, 192);
	overflow-y: scroll;
	border-bottom: 1px solid #0b6d4c;
}
.modal-fullscreen > .title {
	position: fixed;
	height: 62px;
	width: 100%;
	border-bottom: 1px solid #0b6d4c;
}
.modal-fullscreen {
	margin: 0;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100vh;
	background: #013020;
	display: flex;
	position: fixed;
	z-index: 100000;
	flex-direction: column;
}
.cursor-pointer:hover {
	cursor: pointer;
}
.cmn--btn {
	background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
	box-shadow: 11px 11px 32px rgba(255, 82, 1, 0.2),
		-2px -2px 10px rgba(255, 200, 39, 0.4);
	padding: 10px 25px;
	color: #1f1f23;
	border-radius: 35px !important;
	border: none;
	transition: 0.5s;
	font-weight: bold;
	padding: 10px;
}
.btn:hover,
.cmn--btn:hover {
	box-shadow: 11px 11px 32px rgba(255, 82, 1, 0.2),
		-5px -5px 32px rgba(255, 200, 39, 0.4);
}
.form--control.style--two {
	background: transparent;
	padding-left: 65px;
}
.form--control,
.form--control:focus {
	background: #013020;
	box-shadow: none;
	outline: 0;
}
.form--control {
	border: 1px solid hsla(0, 0%, 100%, 0.17);
	border-radius: 5px;
	color: hsla(0, 0%, 100%, 0.8);
	height: 50px;
}
.input-pre-icon {
	background: rgba(255, 200, 39, 0.1);
	position: absolute;
	padding: 15px 20px;
	color: #ffc827 !important;
}
/* .input-pre-icon {
	background: #013020;
	border-radius: 5px 0 0 5px;
	bottom: 1px;
	color: #ffc827;
	left: 1px;
	padding: 10px 15px;
	top: 1px;
} */
.logo {
	position: relative;
	top: 0;
}
.logo img {
	max-height: 105px;
	max-width: 180px !important;
}
.account-content-wrapper {
	align-items: center;
	display: flex;
	flex-direction: column;
	position: relative;
}
.content {
	display: block;
	margin: 0 auto;
	max-width: 500px;
	padding: 0 30px;
	position: relative;
	width: 100%;
	z-index: 1;
}
.l-logo {
	display: inline-block;
	height: 100px !important;
	margin-bottom: 10px;
	margin-left: 5px;
	margin-right: 5px;
}
.yellow-text {
	color: #ffc827 !important;
}
.right {
	align-items: center;
	display: flex;
	padding-top: 50px;
	position: relative;
	width: 60%;
}
.left {
	backdrop-filter: blur(15px);
	background: rgba(11, 53, 18, 0.3);
	border: 1px solid hsla(0, 0%, 100%, 0.17);
	border-radius: 25px;
	margin: 0 auto;
	max-width: 430px;
	overflow-y: auto;
	padding: 50px 60px;
	position: relative;
	text-align: center;
	width: 100%;
}
.container-wrapper {
	display: flex;
	padding-bottom: 50px;
	padding-top: 50px;
}
@media (max-width: 767px) {
	.container-wrapper {
		display: flex;
		flex-direction: column;
	}
	.right {
		width: 100%;
	}
}
</style>