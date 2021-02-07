
import server from './app.js';

import configs from './config/config.js';
import dbConfig from './database/dbConfig.js';

dbConfig.sync()
    .then(() => {
        console.log('Db runs...');
    })
    .catch((error) => {
        console.log(`An error occurred connecting to the database. ${error}`);
    });

const port = configs.PORT_APP;

server.listen(port, () => {
    console.log(`Server Run At port: ${port}`);
});