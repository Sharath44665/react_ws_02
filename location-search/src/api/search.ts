import { Place } from "./place"

interface searchResponse {
    features: {
        geometry: {
            coordinates: number[]
        },
        properties: {
            place_id: number,
            display_name: string,
        }
    }
}

const search = async (term: string) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&limit=1`)
    const data: searchResponse = await res.json()

    // console.log(data)
    const places: Place[] = data.features.map((feature) => {
        return {
            id: feature.properties.place_id,
            name: feature.properties.display_name,
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1]
        }
    })
    return places;
}


export { search }