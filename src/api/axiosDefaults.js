import axios from "axios";

axios.defaults.baseURL = 'https://8000-zahraraha-drfrepo-fgqhxi88bs3.ws-us97.gitpod.io'
axios.defaults.headers.post['Content-Type'] = 'maltipart/form-data'
axios.defaults.withCredentials = true