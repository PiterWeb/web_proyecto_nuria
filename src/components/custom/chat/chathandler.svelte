<script>
  import ChatBubble from "./chatbuble.svelte";

  import { getChat } from "@utils/appwrite";
</script>

{#await getChat()}
  <p class="text-center">Cargando...</p>
{:then chat}

  {#if chat.documents.length === 0}
    <p class="text-center">Todavía no hay publicaciones</p>
  {/if}

  {#each chat.documents as doc}
    <ChatBubble
      username={doc.username}
      timestamp={doc.$createdAt}
      content={doc.text} />
  {/each}
{:catch error}
  <p>{error.message}</p>
{/await}
