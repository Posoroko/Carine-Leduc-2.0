import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
    state: () => ({
        Blogs: []
    }),
    getters: {
        getAllBlogs() {
            return this.Blogs
        }
    },
    actions: {

        async initializeData() {

            await fetch("https://ku3vu7zb.directus.app/items/Blogs")
            .then(response => response.json())
            .then(data => {
                this.Blogs = data.data
                console.log(this.Blogs)
            })
        }
    }
})