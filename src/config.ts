export const isProduction = process.env.NODE_ENV === 'production'

//TODO получить или сделать сертификат
export const baseUrl = isProduction ? 'https://cors-anywhere.herokuapp.com/http://212.75.210.71/' : 'http://localhost:8084/';

export const vk_developer_id = 151079225
