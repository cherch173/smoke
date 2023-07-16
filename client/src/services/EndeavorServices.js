import Client from './api'

export const GetEndeavors = async () => {
    try {
        const res = await Client.get('/endeavors')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetEndeavor = async (id) => {
    try {
        const res = await Client.get(`/endeavors/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const EditEndeavor = async (id) => {
    try {
        const res = await Client.put(`/endeavors/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteEndeavor = async (id) => {
    try {
        const res = await Client.delete(`endeavors/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetComments = async () => {
    try {
        const res = await Client.get('/comments')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetComment = async (id) => {
    try {
        const res = await Client.get(`/comments/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const EditComment = async (id) => {
    try {
        const res = await Client.put(`/comments/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteComment = async (id) => {
    try {
        const res = await Client.delete(`comments/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}