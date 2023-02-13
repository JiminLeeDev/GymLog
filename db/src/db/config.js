import { createConnection } from "mysql";

const connection = createConnection({
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: "GymLog",
  dateStrings: "date",
});

function handleDisconnect() {
  connection.connect(function(err) {            
    if(err) {                            
      setTimeout(handleDisconnect, 2000); 
    }                                   
  });                                 
                                         
  connection.on('error', function(err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      return handleDisconnect();                      
    } else {                                    
      throw err;                              
    }
  });
}

handleDisconnect();

export default connection;
