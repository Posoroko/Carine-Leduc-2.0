import { defineStore } from 'pinia'


export const useBlogStore = defineStore('blog', {
    state: () => ({
        Blogs: [],
        LatestBlog: {}, //à la une
        RecentBlogs: [] //éème une, 4 blogs récents
    }),
    getters: {
        getAllBlogs() {
            return this.Blogs
        }
    },
    settes: {
        setLatestBlog(blog) {
            this.LatestBlog = blog
        },
        setRecentBlogs(blogs) {
            this.RecentBlogs = blogs
        }

    },
    actions: {

        async initializeData() {
            const today = new Date().toISOString()

            const params = {
                limit: '5',
                sort: 'date_published'
            }
            
            const url = `https://ku3vu7zb.directus.app/items/Blogs?filter=[status][_eq]=published&filter=[date_created][_lt]=${today}&limit=${params.limit}&sort[]=${params.sort}`            
            
            await fetch(url)
            .then(response => response.json())
            .then(data => {
                this.RecentBlogs = data.data
                console.log(data.data[0], data.data[1])
                this.LatestBlog = this.RecentBlogs.shift()

                // console.log(this.LatestBlog)
                // console.log(this.RecentBlogs)
            })
        }
    }
})