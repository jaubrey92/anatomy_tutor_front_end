import Client from './api'

export const GetCards = async () => {
  try {
    const res = await Client.get('/cards')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetRegions = async () => {
  try {
    const res = await Client.get('/regions')
    return res.data
  } catch (error) {
    throw error
  }
}
