const fetch = require ('node-fetch')

const httpclient = {
    get:    async(url)=>{
        const {data} = await fetch.get(url)
        return data
    },
    post:   async(url, body)=>{},
    put:    async(url, body)=>{},
    delete: async(url)=>{}
}

module.exports = {
    httpclient
}

