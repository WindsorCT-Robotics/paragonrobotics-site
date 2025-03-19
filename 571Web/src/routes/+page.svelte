<script>
  import Navbar from './assets/Navbar.svelte';
  import Article2025Update1 from './assets/Article2025Update1.svelte';
  import Article2025Update2 from './assets/Article2025Update2.svelte';
</script>

<div id="bg" class="bg-zinc-800 text-white min-h-screen">
  <Navbar />

  <div class="p-8 mt-20">
    <div class="grid gap-6 md:grid-cols-3">
      <Article2025Update2 />
      <Article2025Update1 />
    </div>
  </div>  
</div>
