var map = L.map('map').setView([19.284076, -99.1355524], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVpc2pvc2U1IiwiYSI6ImNsMDc0dDVtMjAza3gzanM4d3J0ZnMzbzgifQ.NfkxFbGmErrf6AayBjmuXg'
}).addTo(map);



//Adding a marker
L.marker([19.284076, -99.1355524], title = 'test').addTo(map);

//AJAX añadir las bicis

$.ajax({
    dayaType: "json",
    url: "api/bicicletas",
    success: function (result) {
        console.log(result)
        result.bicicletas.forEach(function (bici) {
            L.marker([bici.lat, bici.lon], { title: bici.id }).addTo(map);

        })
    }

})


// bicicleta_list = function (req, res) {
//     Bicicleta.all()
//         .then((data) => {
//             console.log(bicicletas)
//             let bicicletas = data;
//             for (i in bicicletas) {
//                 L.marker([bicicletas[i].lat, bicicletas[i].lon], { title: bici.id }).addTo(map);
//             }

//         })

// }