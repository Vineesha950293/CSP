const app = require('./Requires');

const port = process.env.PORT || 5013;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});