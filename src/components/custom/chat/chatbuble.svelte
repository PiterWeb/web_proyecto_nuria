<script>

  export let username, timestamp, content;

  let date = new Date(timestamp).toLocaleDateString();

</script>

<div class="flex flex-col items-center justify-center">
  <div
    class="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-8 bg-black rounded-lg shadow">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center">
        <div class="flex flex-col mx-2">
          <span class="font-bold text-gray-200">
            {username}</span
          >
          <p class="text-sm text-gray-300 mb-6 mt-2">{content}</p>
          <span class="text-sm text-gray-300">
            {date}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
