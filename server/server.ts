import dotenv from 'dotenv';

process.on('uncaughtException', (err: Error) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' });
import  app from './app';

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Api running on port http://localhost:${port}...`);
});

process.on('unhandledRejection', (err: Error)  => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
