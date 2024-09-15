// this variable holds all of the NFTs
const nfts = []

// this function creates a new NFT and pushes it to the nfts array
function mintNFT(name, taste, sauce, side) {
    const newNft = {
        name: name,
        taste: taste,
        sauce: sauce,
        side: side
    }
    nfts.push(newNft)
}


// this function lists each NFT in the nfts array
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        const nft = nfts[i]
        console.log(`NFT #${i + 1}:`)
        console.log(`Name: ${nft.name}`)
        console.log(`Taste: ${nft.taste}`)
        console.log(`Sauce: ${nft.sauce}`)
        console.log(`Side: ${nft.side}\n`)
    }
}

// this function prints the number of NFTs in the nfts array
function getTotalSupply() {
    console.log(nfts.length)
}

// functions invocation
mintNFT('Burger', 'Savory', 'Ketchup', 'Fries')
mintNFT('Cheesecake', 'Sweet', 'Strawberry Jam', 'Ice cream')
mintNFT('Fried chicken', 'Salty', 'Ranch', 'Nuggets')

listNFTs()

getTotalSupply()