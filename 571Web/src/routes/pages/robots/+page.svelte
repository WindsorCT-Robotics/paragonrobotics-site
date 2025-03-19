<script>
    import Navbar from '../../assets/Navbar.svelte';
    import Robot23 from '../../assets/robots/23r.svelte';
    import Robot24 from '../../assets/robots/24r.svelte';
  </script>
  
  <div id="bg" class="bg-zinc-800 text-white min-h-screen">
    <Navbar />
  
    <div class="p-8 mt-20">
      <div class="grid gap-6 md:grid-cols-3">
        <Robot24 />
        <Robot23 />
      </div>
    </div>  
  </div>
  