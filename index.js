const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res)=>{
    let data = req.body.data;

    let output = {
        'is_success': true,
        'user_id': 'garvit_chaurasiya_25072002',
        'email': 'garvit1146@chitkara.edu.in',
        'roll_number': [],
        'odd_numbers': [],
        'even_numbers': [],
        'alphabets': []
    }

    for(var i = 0; i<data.length; i++){
        var x = data[i];
        if(x[0]>='1' && x[0]<='9'){
            var num = x - 0;
            if(num % 2 == 0){
                output.even_numbers.push(x);
            }
            else{
                output.odd_numbers.push(x);
            }
        }
        else{
            output.alphabets.push(x.toUpperCase());
        }
    }

    res.send(output);

})

app.listen(5000, ()=>{
    console.log("Listing on port 5000");
})