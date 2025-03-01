<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import logo from '$lib/images/logo.png';
</script>

<div id="content-wrapper" class="flex flex-col min-h-screen">
    <div id="bg" class="shadow-sm">
        <div id="topbar"></div>
        <div id="logo-cont" class="flex justify-center items-center p-4 mt-16" style="height: calc(100vh - 4rem)"> 
            <h1 id="maintext">
                <img alt="Team Logo" src={logo} class="max-h-full">
                Paragon Robotics
            </h1>
        </div>
    </div>
</div>
