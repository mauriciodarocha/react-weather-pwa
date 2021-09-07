if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then((response) => console.log('Success: ', response.scope))
            .catch((err) => console.log('Failure: ', err));
    })
}