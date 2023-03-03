(async function loadJson(url) {
    let response = await fetch(url)

    if (response.status == 200) {
        return await response.json()
    }

    throw new Error(response.status)
})('asdasd').catch(console.log); 


    