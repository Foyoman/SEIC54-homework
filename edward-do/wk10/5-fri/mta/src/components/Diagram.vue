<template>
		<div>
			<div class="container">
				<div class="outline lines">
					<div class="six-line line outline">
						<div class="six-line overlay">
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
	name: 'diagram'
}
</script>

<style>
	.container {
		position: relative;
	}

	.lines {
		position: absolute;
		top: 10px;
		left: 50%;
	}

	.line {
		transition: all 0.4s;
	}
	
	.six-line {
		width: 10px;
		height: 100px;
		border-radius: 15px;
	}

	.outline {
		position: absolute;
		background-color: grey;
	}

	.overlay {
		position: relative;
		top: 100%;
		background-color: red;
		height: 100%;
	}

	.outline:hover > .overlay {
		transition: all 0.4s;
		top: 0;
	}

</style>