import { Client, Databases, ID, Query, Account } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("psiconutricion");

const databases = new Databases(client);
const account = new Account(client);

export function sendToChat(message) {
  return databases.createDocument("chat", "messages", ID.unique(), {
    text: message,
    createdAt: Date.now(),
    username: "Anonymous",
  });
}

export function getChat() {
  return databases.listDocuments("chat", "messages", [
    Query.orderDesc("createdAt"),
    Query.limit(25),
  ]);
}

export function getNews() {
  return databases.listDocuments("chat", "news", [
    Query.orderDesc("$createdAt"),
    Query.limit(25),
  ]);
}

export function getVideos() {
  return databases.listDocuments("chat", "videos", [
    Query.orderDesc("$createdAt"),
    Query.limit(25),
  ]);
}

export function createAccount(email, password, name) {
  return account.create(ID.unique(), email, password, name);
}

export function login(email, password) {
  return account.createEmailSession(email, password);
}

