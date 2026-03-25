import {ref} from "vue"
import {useDatabase} from "./useDatabase"

const posts = ref<any[]>([])
const POSTS_KEY = "blogs"

export function usePosts() {
    const {get, set} = useDatabase()

    function loadPosts() {
        const data = get(POSTS_KEY)
        if (data) {
            posts.value = data
        } else {
            posts.value = []
        }
    }

    function savePosts() {
        set(POSTS_KEY, posts.value)
    }

    function createPost(form: any) {

        if (!form.titulo?.trim() || !form.cuerpo?.trim()) {
            alert("El título y el contenido no pueden estar vacíos")
            return false
        }


        if (!form.linkImagen) {
            alert("Debes subir una imagen o introducir una URL")
            return false
        }


        const newPost = {
            ...form,
            id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
            createdAt: new Date().toISOString()
        }

        posts.value.unshift(newPost)
        savePosts()

        console.log("Post creado exitosamente:", newPost) // Debug

        return true
    }

    function deletePost(id: string) {
        posts.value = posts.value.filter(post => post.id !== id)
        savePosts()
    }

    function updatePost(updatedPost: any) {
        const index = posts.value.findIndex(post => post.id === updatedPost.id)
        if (index !== -1) {
            posts.value[index] = {...posts.value[index], ...updatedPost}
            savePosts()
        }
    }

    function getPostById(id: string) {
        return posts.value.find(post => post.id === id)
    }


    loadPosts()

    return {
        posts,
        loadPosts,
        createPost,
        deletePost,
        updatePost,
        getPostById
    }
}

export function useAuth() {
    const {get, set, remove} = useDatabase()
    const USER_KEY = "currentUser"

    const currentUser = ref<any>(null)

    function login(userData: any) {
        set(USER_KEY, userData)
        currentUser.value = userData
    }

    function logout() {
        remove(USER_KEY)
        currentUser.value = null
    }

    function isLoggedIn() {
        const user = get(USER_KEY)
        return !!user
    }

    function getCurrentUser() {
        if (!currentUser.value) {
            currentUser.value = get(USER_KEY)
        }
        return currentUser.value
    }

    function isAdmin() {
        const user = getCurrentUser()
        return user?.role === "admin"
    }

    currentUser.value = get(USER_KEY)

    return {
        currentUser,
        login,
        logout,
        isLoggedIn,
        getCurrentUser,
        isAdmin
    }
}