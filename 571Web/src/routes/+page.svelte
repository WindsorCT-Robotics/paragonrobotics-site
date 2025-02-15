<script>

    let user = $state("Enter your email in this box");
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

<div id="content-wrapper" class="flex flex-col min-h-screen">
    <div id="topbar" class="shadow-xl">
        <h1 id="toptext"><center>Paragon Robotics</center></h1>
    </div>

    <div id="topbar2">   
        <center>
        <h1> 571 </h1>
        </center>
    </div>

    <div id="article-grid">
        <div>
            <center>
            <div id="title-header"><h2>2025 Season Update</h2><h4>a</h4></div>
            </center>
        </div>
        <div>
            <center>
            <div id="title-header"><h2>Community Can Drive</h2><h4>a</h4></div>
            </center>
        </div>
    </div>


    <Footer id="footer">
        <div class="sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="/" by="Flowbite™" year={2022} />
        <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
         <FooterLink href="/">About</FooterLink>
            <FooterLink href="/">Privacy Policy</FooterLink>
            <FooterLink href="/">Licensing</FooterLink>
            <FooterLink href="/">Contact</FooterLink>
        </FooterLinkGroup>
        </div>
    </Footer>
</div>