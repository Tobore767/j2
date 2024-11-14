

const sampleData = [
    {id:1, name: 'item 1', description: 'Description for item 1'},
    {id:2, name: 'item 2', description: 'Description for item 2'},
    {id:3, name: 'item 3', description: 'Description for item 3'}
]

async function fetchData() {
    console.log('Fetching data .............')
    return await new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(sampleData)
            console.log('data successfully fetched', sampleData)
        }, 4000)
    })
}

fetchData();

async function displayData() {
    const datalist = document.getElementById('data-list')
    try{
        const data = await fetchData()
        const listitems = data.map(item => `<li>${item.name}:<li>${item.name}: 
            ${item.description}</li>`).join('');
        datalist.innerHTML = listitems;
    } catch (error) {
        console.log(error)
    }
}

displayData()