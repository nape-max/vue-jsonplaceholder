import axiosInstance from '@/axios/index'
import {PHOTOS} from '@/axios/routes'

export default {
	state: {
		photos: []
	},
	getters: {},
	actions: {
		fetchPhotos(context) {
			return axiosInstance.get(PHOTOS())
				.then(response => {
					let photosSortedByAlbums = [];
					
					const photos = response.data;
					
					photos.map((photo) => {
						if (photosSortedByAlbums[photo.albumId] === undefined) {
							photosSortedByAlbums[photo.albumId] = [];
						}
						
						photosSortedByAlbums[photo.albumId].push(photo);
					});
					
					console.log(photosSortedByAlbums);
				})
				.catch(err => {
					console.log(err);
				})
		}
	},
	mutations: {
		setPhotos(state, photos) {
			state.photos = photos;
		}
	},
}