// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
// var dateTime = time+' / '+date;
// var data = { date_and_time : dateTime }

// var responseData = '';

fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
.then((response) => response.json())
.then((date) => {
    data = {date_time : date.datetime.replace("T" , " ").split('.').splice(0 , 1).join()}
    fetch('/userRequest' , {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json' },
        body : JSON.stringify(data)
    }).then( response => {
        return response.json()
    })
    
})

