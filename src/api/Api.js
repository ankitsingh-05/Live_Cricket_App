const API_KEY = "2ec38308-7195-4730-b422-22ad5690631f"

export const getMatch = () => {
    const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}`

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("ERROR : ", error))
}
