const express = reauire('express');
const app = express();
app.get('/',(request,response) =>{
    response.send('Es ce que j'/'ai reussi le test?');
});
app.listen(30001);