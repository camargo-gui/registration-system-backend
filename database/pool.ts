import mysql2 from 'mysql2/promise'

export const pool = mysql2.createPool({
    host: 'seu_host',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco_de_dados',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  