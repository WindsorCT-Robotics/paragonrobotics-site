<script>
    import { writable } from 'svelte/store';
    import logo from './images/logo.png';

    export let navItems = [
        { name: 'Home', link: '/' },
        //{ name: 'About', link: '/pages/about' },
        { name: 'Robots', link: '/pages/robots' }, 
        { name: 'Contact', link: '/pages/contact' } 
    ];

    export let selectedNavItem = writable(navItems[0].name);
    export let menuOpen = writable(false);

    /**
	 * @param {{ name: any; link?: string; }} item
	 */
    function selectNavItem(item) {
        selectedNavItem.set(item.name);
        menuOpen.set(false);
    }
</script>

<nav id="nav" class="shadow-xl p-4 fixed w-full top-0 left-0 z-40 bg-gray-900 text-white">
    <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
            <img src="{logo}" alt="Logo" class="w-12 h-12 object-contain">
            <h1 class="text-2xl text-amber-50">Paragon Robotics</h1>
        </div>

        <button class="md:hidden" on:click={() => menuOpen.update(n => !n)}>
            ☰
        </button>

        <ul class="hidden md:flex gap-8 text-lg">
            {#each navItems as item}
                <li>
                    <a class="cursor-pointer p-2"
                       class:selected={$selectedNavItem === item.name}
                       href={item.link}
                       on:click={() => selectNavItem(item)}>
                        {item.name}
                    </a>
                </li>
            {/each}
        </ul>
    </div>

    {#if $menuOpen}
        <ul class="md:hidden flex flex-col items-center bg-red-700 text-lg p-4">
            {#each navItems as item}
                <li>
                    <a class="cursor-pointer p-2 w-full text-center"
                       href={item.link}
                       on:click={() => selectNavItem(item)}>
                        {item.name}
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</nav>

<style>
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>