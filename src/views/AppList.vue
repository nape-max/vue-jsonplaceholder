<template>
	<div class="app-container">
		<div class="AppItem" @click="redirectPhotos">
<!--			<img src="@/assets/icons/album.png" />-->
			<PhotoLibrary :size="100"/>

		</div>
		<div class="AppItem" @click="redirectPosts">
			<Comment :size="100"/>
		</div>
	</div>

</template>

<script>
	import PhotoLibrary from 'vue-material-design-icons/Image.vue';
	import Comment from 'vue-material-design-icons/Comment.vue';

	export default {
		name: "AppList",
		methods: {
			redirectPhotos() {
				this.$router.push('/photos');
			},
			redirectPosts() {
				this.$router.push('/posts');
			}
		},
		components: {
			PhotoLibrary,
			Comment
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
	img {
		width: 50px;
		height: auto;
	}
	.AppItem {
		display: block;
		line-height: 125px;
		width: 400px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
		height: 100px;
		padding: 50px;
		border: 1px solid #333
	}
</style>