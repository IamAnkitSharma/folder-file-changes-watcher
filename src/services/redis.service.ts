import * as redis from 'redis';

const redisHost = process.env.REDIS_HOST || 'localhost';
const redisPort = process.env.REDIS_PORT || 6379;

export const redisOptions = {
    url: `redis://${redisHost}:${redisPort}`,
    retry_strategy: () => 1000,
};

const client = redis.createClient(redisOptions);

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on('error', (error: any) => {
    console.error(`Error while connecting to redis: ${JSON.stringify(error)}`);
});

client.connect();

export const publishMessageToRedis = (channel: string, message: string) => {
    client.publish(channel, message);
}

export default client;
