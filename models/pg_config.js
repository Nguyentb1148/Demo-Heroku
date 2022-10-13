const Pool= require('pg').Pool;
const pg_conn = new Pool({
    user: 'vepudqlapdjotp',
    host: 'ec2-52-205-61-230.compute-1.amazonaws.com',
    database: 'd5h2tpdh8l1jid',
    password: '915a031614e47696f77c338fd566defeaeedd6115a1142aacb0dfd1c81ed8a0b',
    port: 5432,
    ssl:{
            rejectUnauthorized:false,
    },
  })

module.exports= pg_conn;