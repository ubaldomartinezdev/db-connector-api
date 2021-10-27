const axios = require("axios").default;

async function collectionInfo () {
    const repos = [
        {
            url: 'https://api.momentranks.com/v1/ethereum/rankings?nft=&limit=1900'
        }
    ]

    const promises = repos.map(async repo => {
        const response = await axios({
            method: 'GET',
            url: repo.url,
            headers: {
                Accept: 'application/json'
            }
        })

        return {
            _id: response.data._id,
            verified: response.data.verified,
            name: response.data.name,
            slug: response.data.slug
        }
    })

    // wait until all promises resolve
    const results = await Promise.all(promises)
    console.log(results);
    // const insertCollection = 'INSERT INTO mr_collections(id_::text, verified::text, name::text, slug::text)'
    // await db.query(insertCollection, [])
}