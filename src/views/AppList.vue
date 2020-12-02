<template>
	<div class="app-container">
		<div class="AppItem" @click="redirectPhotos">
			Photos
		</div>
		<div class="AppItem" @click="redirectPosts">
			Posts
		</div>
	</div>

</template>

<script>
	export default {
		name: "AppList",
		methods: {
			redirectPhotos() {
				this.$router.push('/photos');
			},
			redirectPosts() {
				this.$router.push('/posts');
			}
		}
	}
</script>

<style scoped>
	.app-container {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		flex-direction: row;
		justify-content: space-around;
	}
	.AppItem {
		display: block;
		line-height: 100px;
		width: 400px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
		height: 100px;
		padding: 50px;
		border: 1px solid #333
	}
</style>