import { defineStore } from 'pinia'



export const useBlogStore = defineStore('blog', {
    state: () => ({
        dataDownloaded: false,
        currentPage: 1,
        BlogConfig: {},
        Blogs: [],
        LatestBlog: {}, //à la une
        RecentBlogs: [] //éème une, 4 blogs récents
    }),
    getters: {
        getLatestBLogShortContent() {
            this.LatestBlog.shortContent = this.LatestBlog.content.slice(0, 200) + '...'
        },
        getLatestBlog() {
            return this.Blogs[0]
        },
        getRecentBlogs() {
            return this.Blogs.slice(1, 5) //index 1 to 4 is returned
        }
    },

    actions: {
        async initializeData() {


        }
    }
})