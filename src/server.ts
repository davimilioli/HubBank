import Express from 'express';
import dotenv from 'dotenv';
import routers from './routers';
dotenv.config()
const server = Express();

const PORT = process.env.PORT || 3000;

server.use(Express.urlencoded({ extended: true }));
server.use(Express.json());
server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use('/assets', Express.static(__dirname + '/views/assets'));
server.use(routers);

server.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
})