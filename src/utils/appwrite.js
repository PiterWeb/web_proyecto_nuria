import { Client, Databases, ID, Query, Account, Role } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("psiconutricion");

const databases = new Databases(client);
const account = new Account(client);

export async function sendToChat(message) {

  const user = await account.get();

  // if (!user.emailVerification) return

  return databases.createDocument("chat", "messages", ID.unique(), {
    text: message,
    username: user.name,
  });
}

export function getChat() {
  return databases.listDocuments("chat", "messages", [
    Query.orderDesc("$createdAt"),
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
  return account.create(name, email, password, name);
}

export function login(email, password) {
  return account.createEmailSession(email, password);
}

export function logout() {
  return account.deleteSession("current");
}

export function getActiveSession() {
  return account.get()
}
