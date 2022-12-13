const {MongoClient} = require('mongodb');


async function main(){
   
    const uri = "mongodb+srv://JDKA:JDKA@cluster0.c811qja.mongodb.net/?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  clientTickets(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);