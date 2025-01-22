var bookifyUserApi = "https://retoolapi.dev/btlKGc/BookifyUser";
var movieApi = "https://retoolapi.dev/6z1OKW/BookifyMovie";

// to check whether the user is logged in or not and make login & logout btn visible.
document.addEventListener('DOMContentLoaded', () => {
    let userName = sessionStorage.getItem('userName') || '';
    if(userName == ""){
      document.getElementById('loginbtn').style.display = 'block';
      document.getElementById('logoutbtn').style.display = 'none';
    }
    else{
      document.getElementById('logoutbtn').style.display = 'block';
      document.getElementById('loginbtn').style.display = 'none';
    }
});

  function checkSession(){
    let userName = sessionStorage.getItem('userName') || '';
    if(userName == ''){
        alert('please login to view profile');
        window.location.href = "login.html";
    }
  }

    // User name, password validation
    function validateUser() {
        let email = document.getElementById('mail').value || '';
        let uName = document.getElementById('username')?.value || '';
        let pass = document.getElementById('password')?.value || '';
        let conPass = document.getElementById('confirmPassword')?.value || '';
        let mobile = document.getElementById('mobile').value || '';

        if (uName && pass && pass === conPass) {
            console.log('User validated!');
        } else {
            console.log('Validation failed.');
        }

        window.location.href = 'index.html';
    }

    function registerUser(requestBody) {
        
        let request = {
            method : "POST",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(requestBody)
        }

        fetch(bookifyUserApi, request)
        .then(response => response.json())
        .then(responseData => {
            alert('User registered successfully...');
            window.location.href = "login.html";
        })
        
    }

    var movies = [];
    getMovieData();
    function getMovieData(){
      fetch(movieApi)
      .then(response => response.json())
      .then(responseData => {
        movies = responseData;
        // generateMovieDetails(movies)
      })
      .catch(error => console.error("Error fetching movie data:", error));
    }
    console.log(movies);
    
    // var availableSeats;
    // var soldSeats;
    // var noOfSeats;
    // function checkMovieSession(){
    //     let msession = sessionStorage.getItem('movieId') || '';
    //     console.log("movie session: " +msession);
    //     for(let idx=0; idx<movies.length; idx++){
    //         console.log("inside for: " +movies[idx]);
    //     }
    //     // for (let id of movies) {
    //     //     console.log("inside for");
            
    //     //     if(id == msession){
    //     //         console.log("id is equal to session");
                
    //     //         availableSeats = id.available;
    //     //         soldSeats = id.sold;
    //     //         noOfSeats = id.noOfSeats;
    //     //     }
    //     // }
    //     // console.log("available, sold, noOfseats", availableSeats, +" " +soldSeats, +" " + noOfSeats);
        
    // }
    // checkMovieSession();


    // const selectedSeat = new Map();
    // document.addEventListener('DOMContentLoaded', () => {
    //     // Booking page functionality (Map)
        
    //     const seats = document.querySelectorAll('.seats');
    //     console.log("Seats found:", seats);
    //     const movieIdElements = document.querySelectorAll('.movie-id');
    //     seats.forEach((seat) => {
    //         seat.addEventListener('click', (event) => {
    //             bookingBtn = document.getElementById('bookBtn');
    //             bookingBtn.style.visibility = 'visible';
    //             // const clickedSeat = event.currentTarget;
    //             // const seatId = clickedSeat.id;
    //             // console.log("Clicked seat ID:", seatId);
    //             const clickedSeat = event.target;
    //             if (clickedSeat.tagName === 'BUTTON' && clickedSeat.classList.contains('seatbtn')) {
    //                 const seatId = clickedSeat.id;
    //                  // Get seat ID
                
    //             // let seatId = seat.id;
    //             console.log(seat);
    //             console.log(seat.id);
    //             console.log("Clicked seat ID: "+seatId);
    //             if(seat.style.backgroundColor === 'green'){
    //                 seat.style.backgroundColor = 'white';
    //                 selectedSeat.delete(seatId);
    //                 console.log("Map after deselection : " + [...selectedSeat.entries()]);
    //             }
    //             else{
    //                 seat.style.backgroundColor = 'green';
    //                 let movieId = null;
    //                 movieIdElements.forEach((movieElement) => {
    //                     if (seat.closest('.card').contains(movieElement)) {
    //                         movieId = movieElement.value;
    //                     }
    //                 });
    //                 selectedSeat.set(seatId);
    //                 console.log("Map after selection: ", [...selectedSeat.entries()]);
    //             }
    //             if(selectedSeat.size == 0){
    //                 console.log("size is zero");
                    
    //                 bookingBtn.style.visibility = 'hidden';
    //             }
    //         }
    //         });
    //     });    

    // });

    function bookTickets(){
    }



    // selectedSeat.forEach((disabledSeat) => {
    //     disabledSeat.addEventListener('DOMContentLoaded', () => {
    //         disabledSeat.style.pointerEvents = 'none';
    //         console.log("disabled");
    //     });
    // });



    function returnPage(){
        alert("Booked tickets successful!y...");
        window.location.href = 'index.html';
    }

    function showTickets(){

    }

    function logout(){
        const shouldLogout = confirm('do you want to logout?');
        if(shouldLogout){
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('userName');
            window.location.href = "index.html";
        }
    }
    // Booking page functionality
    // const selectedSeat = new Set();
    // const seats = document.querySelectorAll('.seats');
    // seats.forEach((seat) => {
    //     seat.addEventListener('click', () => {
    //         let seatId = seat.id;
    //         console.log(seatId);
    //         if(seat.style.backgroundColor === 'green') {
    //             seat.style.backgroundColor = 'white';
    //             selectedSeat.delete(seatId)
    //             console.log("set after disselection : " + [...selectedSeat]);
    //         }
    //         else {
    //             seat.style.backgroundColor = 'green';
    //             selectedSeat.add(seatId);
    //             console.log("set after selection : " + [...selectedSeat]);
    //         }
    //     });
    // });