import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id:number;
    title:string;
    completed:boolean;
    userId:number;
}


axios.get(URL).then(response => {
    const TODO = response.data as Todo;
    const {id,completed,title,userId} = TODO;
    PrintTodo(id,title,completed,userId)
})

const PrintTodo = (id:number , title:string , completed:boolean , userId:number)=>{
    console.log(`the id of todo is :${id}\nthe title of todo is :${title}\nthe status of todo is :${completed}\nthe user Id of todo is :${userId}
    `)
}