<script>
	import Logo from '$lib/Logo.svelte';
</script>

<footer>
	<div class="text">
		<p>
			This website was made and is managed by Future Super, which is the founding business of Not
			Mute On Climate. All information received is handled in accordance with Future Super's Privacy
			Policy. For general enquiries reach out at info@notbusinessasusual.co
		</p>
		<p>We acknowledge the Traditional Owners of the land on which we work and live.</p>
		<p>
			We pay our respects to their Elders, past and present, and remember that sovereignty was never
			ceded.
		</p>
		<p>© 2021 Future Superannuation Group Pty Ltd</p>
	</div>
	<div class="logo">
		<Logo colour="white" />
	</div>
</footer>

<style>
	footer {
		padding-top: 120px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.text {
		max-width: 44%;
		font-size: 12px;
	}
</style>
