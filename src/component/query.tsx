// "use client";
import { client } from "@/services/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from 'react-toastify';

// users
const GetUsersOfApi = () => {
    const { data, isPending } = useQuery({
        queryKey: ["getUsers"],
        queryFn: () => client.get('/users')
    })

    return { data, isPending }
}

const PutDataUser = () => {
    // router
    const router = useRouter();

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: any) => client.put(`/users/${data.id}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getTodos'] })
            router.replace('/');
        }
    })

    return mutation
}


const CreateNewUser = () => {
    // router
    const router = useRouter();

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ['signUp'],
        mutationFn: (data: any) => client.post(`/users`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getTodos'] })
            router.replace('/')
        }
    })

    return mutation
}

// todos
const GetUserDataTodos = () => {
    const { data, isPending } = useQuery({
        queryKey: ["getTodos"],
        queryFn: (data) => client.get(`/todoList/?userId=${localStorage.getItem('userId')}`)
    })

    return { data, isPending }
}

const PostDataTodos = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ['postTodos'],
        mutationFn: (data: any) => client.post(`/todoList`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getTodos'] })
        }
    })

    return mutation
}

export { GetUsersOfApi, PutDataUser, GetUserDataTodos, PostDataTodos, CreateNewUser };