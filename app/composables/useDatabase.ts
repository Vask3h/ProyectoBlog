export function useDatabase() {


    function get<T = any>(key: string): T | null {

        if (!import.meta.client) return null

        const data = localStorage.getItem(key)

        return data ? JSON.parse(data) : null
    }


    function set(key: string, value: any): void {

        if (!import.meta.client) return

        localStorage.setItem(key, JSON.stringify(value))
    }


    function remove(key: string): void {

        if (!import.meta.client) return

        localStorage.removeItem(key)
    }


    function clear(): void {

        if (!import.meta.client) return

        localStorage.clear()
    }

    return {
        get,
        set,
        remove,
        clear
    }
}