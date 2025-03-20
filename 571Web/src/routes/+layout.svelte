<script lang="ts">
	import './app.css';
	import { browser } from '$app/environment';
  
	// Directly access props
	export let children: any;
  </script>
  
  {#if browser}
	<slot></slot>
  {/if}
  