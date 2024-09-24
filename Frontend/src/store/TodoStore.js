import { create } from "zustand"

const useTodoStore = create((set) => {
    return (
        {
            //Initial todo array
            todos: [],
            //Set todos to whatever is passed similar to useState set method
            setTodos: (item) => set((state) => {
                return (
                    {
                        todos: [...state.todos, item]
                    }
                )
            }),
            fetchTodos: async()=>{
                const res = await fetch("/api/todos")
                const data = await res.json()

                set({ todos: data.data })//Set data to todos
            },
            //Add todo that is passed in item to the todos state
            addTodo: async (item) =>{
                if(!item.title || !item.description){
                    return({success: false, message: "Please all fields"})
                }
                const res = await fetch("/api/todos",
                    {
                        method: "post", 
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(item)
                    }
                )
                const data = await res.json()
                set((state) => ({todos: [...state.todos, data.data]})) //Append data to todos
                
                return { success: true, message: "Todo added to list" }
            }
                /*add item to todo array
                set((state) => {
                    return (
                        {
                            todos: [...state.todos, item]
                        }
                    )
                })*/,

        }
    )
})

export default useTodoStore