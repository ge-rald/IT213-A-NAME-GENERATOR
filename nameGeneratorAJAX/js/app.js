document.querySelector('#generate-names').addEventListener('submit', loadNames);




// Execute the function to query the API
function loadNames(e) {
    e.preventDefault();



    //read the values from the form and create the variable
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;



    
    // build the url
    let url = 'https://randomuser.me/api/?';


    // read the origin and append to the url
    if(origin !== ''){
        url += `region=${origin}$`;

                
        }
        // read the genre and append to the url
        if(genre !== ''){
            url += `gender=${genre}&`;

        }

        // read the amount and append to the url
        if(amount !== ''){
        url += `results=${amount}&`;

        }

        //ajax call
        const xhr = new XMLHttpRequest();

        //open the connection
        xhr.open('GET', url, true );

        // get api
        fetch(url)
        .then(res => res.json())
        .then(data => {

        let names = data.results;

        // insert into html

        let html = '<h2><center>Generated Names</center></h2>';
        html += '<ul class="list">';
        names.forEach(function(name){
            html += `
                <li>${name.name.first}</li>
                `;
            });
            html += '</ul>';
            document.querySelector('#result').innerHTML = html;
        });
        }


