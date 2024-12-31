///////////////////  SHOP DATABASE  /////////////// 

let url = "https://striveschool-api.herokuapp.com/api/product/";



fetch(url, {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzczZWFiM2ZmMzlkMjAwMTVjMzY0YzciLCJpYXQiOjE3MzU2NTA2NjgsImV4cCI6MTczNjg2MDI2OH0.O_zww2RpIGAOd94eFhJDXTyooeI7U4dqSr61z9t7ozU"
    }
    })

.then(dataRow => dataRow.json())
.then(dataRefined => console.log(dataRefined))
.catch(err => console.log("Something when wrong " + err))