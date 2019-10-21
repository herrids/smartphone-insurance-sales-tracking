import fonoapi  from "fonoapi-nodejs"

class SalesToolService {
  getSmartphones () {
    fonoapi.token = "7d62f8dd014e3d7d09dfb74f1ea88d32beeb3e49e7927ceb"
    return new Promise(resolve => {
      fonoapi.getLatest((queryString, data) => {
        resolve(data)
      }, 20)
    })
  }
}

export default new SalesToolService();