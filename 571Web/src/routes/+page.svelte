<script>
  import Navbar from './assets/Navbar.svelte';
  import Article from './assets/Article.svelte';
</script>

<Navbar />

<div id="bg" class="bg-zinc-800 text-white min-h-screen p-8 flex">
  <div class="w-full sm:w-1/4 p-14">
    <div class="grid gap-6">
      <Article className="col-span-1" />
      <Article className="col-span-1" />
      <Article className="col-span-1" />
      <Article className="col-span-1" />
      <Article className="col-span-1" />
      <Article className="col-span-1" />
    </div>
  </div>  

  <div class="flex-grow p-4">
  </div>
</div>