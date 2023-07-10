import Client from './api'

export const GetEndeavors = async () => {
    try {
        const res = await Client.get('/endeavors')
        return res.data
    } catch (error) {
        throw error
    }
}