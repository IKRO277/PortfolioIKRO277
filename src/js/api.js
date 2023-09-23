

async function fetchProfileData () {
    const url = 'https://raw.githubusercontent.com/IKRO277/PortfolioIKRO277/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}