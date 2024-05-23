import {loadUsersByPage} from "../use-cases/load-users-by-page.js";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    loadUsersByPage( state.currentPage+1)
}

const loadPrePage = async() => {
    throw new Error("No implementado")
}

const onUsersChange = () => {
    throw new Error("No implementado")
}

const reloadPage = async() => {
    throw new Error("No implementado")
}


export default {
    loadNextPage,
    loadPrePage,
    onUsersChange,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}