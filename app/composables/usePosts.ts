import {ref} from "vue"
import {useRouter} from "vue-router";
const router = useRouter()
const posts = ref<any[]>([])
const user = ref(null)

export function usePosts() {

    function loadPosts() {

        if (process.client) {

            const data = localStorage.getItem("blogs")

            if (data) {
                posts.value = JSON.parse(data)
            }

        }

    }

    function savePosts() {
        localStorage.setItem("blogs", JSON.stringify(posts.value))

    }

    function createPost(form: any) {

        if (
            !form.titulo.trim() ||
            !form.cuerpo.trim()
        ) {
            alert("El título y el contenido no pueden estar vacíos")
            return
        }

        posts.value.push({
            ...form,
            id: crypto.randomUUID()
        })

        savePosts()
    }

    function deletePost(id: string) {

        posts.value = posts.value.filter(post => post.id !== id)

        savePosts()
    }

    function updatePost(updatedPost: any) {

        const index = posts.value.findIndex(post => post.id === updatedPost.id)

        if (index !== -1) {
            posts.value[index] = updatedPost
        }

        savePosts()
    }

    return {
        posts,
        loadPosts,
        createPost,
        deletePost,
        updatePost

    }
}

export function checkLogin() {
    function loguedIn() {
        const user = localStorage.getItem("currentUser")

        if (!user) {
            navigateTo("/login")
        }
    }
    return {
        loguedIn
    }
}