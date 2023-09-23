

async function fethProfileData () {
    const url = ('https://raw.githubusercontent.com/IKRO277/PortfolioIKRO277/main/data/profile.json')
    const fetching = fetch(url)
    return await fetching.json()
}