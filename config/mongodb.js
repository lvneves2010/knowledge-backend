const mongoose = require( 'mongoose' )

// conexão local
// mongoose.connect( 'mongodb://localhost/knowledge_stats', { useNewUrlParser: true } )
//     .catch(e => {
//         const msg = 'Erro!! não foi possível conectar com o MongoDB!!'
//         console.log( '\x1b[41m%s\x1b[37m', msg, '\x1b[0m' )
//     } ) 


// modelo do cluster
// mongodb+srv://lvneves2010:<password>@cluster0-m9sca.mongodb.net/test?retryWrites=true&w=majority    


// conexão no mongo atlas
mongoose.connect('mongodb+srv://lvneves2010:Gustavo0801@cluster0-m9sca.mongodb.net/knowledge?retryWrites=true&w=majority', { useNewUrlParser: true } )
 .then(() =>  console.log('connection succesful'))
 .catch((err) => console.error(err));