import axios from "axios";

const getOrganizations = async (username: string) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}/orgs`)
    const orgsData: Array<object> = data;

    return orgsData;
}

export default getOrganizations;