import { Client, Databases } from 'appwrite';
export const PROJECT_ID = '67f8a264001a8b3250ed';
export const DATABASE_ID = '67f8a3e4003592c87430';
export const COLLECTION_ID_MASSAGES = '67f8a3f9002a4857de6e';


const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('67f8a264001a8b3250ed'); // Your project ID
export const databases= new Databases(client);


export default client;