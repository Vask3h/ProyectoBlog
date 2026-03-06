import { ref } from "vue"

const posts = ref<any[]>([])

export function usePosts() {

    function loadPosts() {
        const data = localStorage.getItem("blogs")

        if (data) {
            posts.value = JSON.parse(data)
        }
    }

    function savePosts() {
        localStorage.setItem("blogs", JSON.stringify(posts.value))
    }

    function createPost(form:any) {

        posts.value.push({
            ...form,
            id: crypto.randomUUID()
        })

        savePosts()
    }

    function deletePost(id:string) {

        posts.value = posts.value.filter(post => post.id !== id)

        savePosts()
    }

    return {
        posts,
        loadPosts,
        createPost,
        deletePost
    }
}