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