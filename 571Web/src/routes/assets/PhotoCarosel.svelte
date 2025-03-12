<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const images = [
    { src: '/imagrey.png', alt: 'Imagrey Image' },
    { src: '/build2.png', alt: 'Building Image' },
    { src: '/team-571.png', alt: 'Team Image' },
    { src: '/programming.png', alt: 'Programming Image' }
  ];

  let currentIndex = writable(0);

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex.update(n => (n + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  /**
	 * @param {number} index
	 */
  function goToSlide(index) {
    currentIndex.set(index);
  }

  /**
	 * @param {KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement; }} event
	 * @param {number} index
	 */
  function handleKey(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
      goToSlide(index);
    }
  }
</script>

<div class="carousel">
  {#each images as { src, alt }, index}
    <div
      class="slide {index === $currentIndex ? 'active' : ''}"
      role="button"
      tabindex="0"
      on:click={() => goToSlide(index)}
      on:keydown={(event) => handleKey(event, index)}
      aria-label={`Slide ${index + 1}`}
    >
      <img src={src} alt={alt} />
    </div>
  {/each}
</div>

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s;
  }
  .slide.active {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>