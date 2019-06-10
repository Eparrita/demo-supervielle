import API from './Config';

const ApiService = {

    getItems: (url) => new Promise(
        (resolve, reject) => {
            API.get(url)
                .then(resp => resp.data)
                .then(data => resolve(data))
                .catch(err => reject(err))
        }
    )
}

export default ApiService;