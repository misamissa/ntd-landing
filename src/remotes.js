import axios from 'axios'

export const BACKEND = axios.create({
  baseURL: 'http://localhost:3000'
})
