<section>
	<div class="circle">75%</div>
	<div class="text75">
		<p>That’s how many Australians want to see climate action.</p>
		<p>All of us against one government dragging its feet.</p>
		<p>COP26 climate summit is a moment where we can turn the volume up on real climate action.</p>
		<p>We’re going to show the real Australia to the world.</p>
	</div>
	<div class="what-is">
		<h2>WHAT IS NOT MUTE ON CLIMATE?</h2>
	</div>
	<div class="answer">
		<p>We’re here to show the world who the real Australia is.</p>
		<p>
			We represent the 75% of Aussies who are crying out for our government to do something drastic
			about climate change - and getting nothing back.
		</p>
		<p>
			We’re sick of being last in the world on climate action. We’re tired of being an international
			laughing stock or public enemy number one. We’re furious that we aren’t being listened to.
		</p>
		<p>
			But the people of Australia will be heard. We’re ready for change and there are real leaders
			among us already making it happen. We get hope from the surfers taking down oil rigs in the
			Great Australian Bight, and the kids campaigning for climate when they could be anywhere else.
			And whether it’s a former engineer getting in Teslas with coal miners, homeowners choosing
			solar, or the droves of people leaving financial organisations that invest in fossil fuels -
			one thing is evident.
		</p>
		<p>We are not mute on climate.</p>
		<p>If there’s one thing Aussies know how to do, it’s to back in the underdog and win.</p>
		<p>
			So now’s the time. We’re asking Australia to come off mute and tell us about the awesome extra
			effort you take to look after our planet.
		</p>
		<p>
			Aussies are switching banks, super and energy away from fossil fuels. We’re changing lifelong
			consumption habits, rinsing and returning our neighbours recyclables, planting natives with
			our kids and innovating industries.
		</p>
		<p>
			Raise your voice and raise your fist because nothing is too small to talk about. Action
			inspires action. You might just learn something new from a grandma in Woy Woy or a school
			student in Perth.
		</p>
		<p>
			We’re turning the volume up on all the things Aussies do during the COP26 climate summit, to
			reach the 75% of people who want more climate action in this country.
		</p>

		<p>Our actions are louder than our government’s silence.</p>
	</div>
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 0 -20px;
		border-top: 1px solid var(--black);
		border-bottom: 1px solid var(--white);
	}
	.circle {
		background-image: url(/images/ball.png);
		background-size: cover;
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 50vw;
		font-family: var(--knockout);
		font-size: 14vw;
		color: var(--black);
	}
	.text75 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		padding: 5vw;
		p {
			margin: 8px 0;
			font-size: max(13px, 1.3vw);
		}
	}
	.what-is {
		padding: 20px;
		h2 {
			text-align: left;
			font-size: max(8vw, 20px);
			line-height: 90%;
		}
	}
	.answer {
		background-color: var(--white);
		color: var(--black);
		padding: 20px;
		p {
			font-size: max(13px, 1.3vw);
			margin-top: 0;
		}
	}

	@media (max-width: 700px) {
		.circle {
			min-height: 25vw;
			font-size: 20vw;
		}
	}
</style>
