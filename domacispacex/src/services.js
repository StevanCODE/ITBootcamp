import axios from "axios"

export const getPastLaunches = () => {
    return axios.get("https://api.spacexdata.com/v3/launches/past")
}


export const getInfo = () => {
    return axios.get("https://api.spacexdata.com/v3/info")
}



export const getPastLaunchesByYear = (id) => {
    return axios.get(`https://api.spacexdata.com/v3/launches/past?launch_year=${id}`)
}


