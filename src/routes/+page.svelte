<script lang="ts">
    import HeaderBar from "./HeaderBar.svelte";
    import Tools from "./Tools.svelte";
    //vercel
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });

    let isActive: boolean = true;
    let value: string = "";
    let cursorTop: number = 0;
    let cursorLeft: number = 0;

    function handleMouseMove(_e: MouseEvent) {
        isActive = true;
        cursorTop = _e.clientY + window.scrollY;
        cursorLeft = _e.clientX - 25 + window.scrollX;
        _e.preventDefault();
    }
    function handleMouseLeave(_e: MouseEvent) {
        isActive = false;
    }
    if (typeof window !== 'undefined') {
        window.document.onkeydown = function (e) {
            if (e.key === 'F12') {
                e.preventDefault();
            }
        };
    }
</script>

<!-- on:contextmenu={(e) => e.preventDefault() } -->
<svelte:window on:mousemove={handleMouseMove} on:mouseout={handleMouseLeave} on:contextmenu={(e) => e.preventDefault() }  />
{#if isActive}
    <span class="custom-cursor" style:top={cursorTop + 'px'} style:left={cursorLeft + 'px'} style:opacity={0.8}>
        {value || "🎃"}
    </span>
{/if}

<style>
    :global(.custom-cursor) {
        font-size: 36px;
        position: absolute;
        user-select: none;
        width: 0;
        height: 0;
        pointer-events: none;
        line-height: 0;
    }
    :global(body) {
        cursor: none;
    }
</style>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@YourTwitterHandle">
    <meta name="twitter:title" content="Yakuza Lin">
    <meta name="twitter:description" content="Yakuza is a software engineer who is passionate about building websites and games. In addition he likes playing and watch anime related things, some of which are r18 stuff :D">
    <meta name="twitter:image" content="https://japan-box.de/cdn/shop/articles/Kopie_von_japan_box_-_2022-07-25T111138.074_1000x.png?v=1658740306">

    <!-- Open Graph Protocol -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Yakuza Lin">
    <meta property="og:description" content="Yakuza is a software engineer who is passionate about building websites and games. In addition he likes playing and watch anime related things, some of which are r18 stuff :D">
    <meta property="og:image" content="https://japan-box.de/cdn/shop/articles/Kopie_von_japan_box_-_2022-07-25T111138.074_1000x.png?v=1658740306">
    <meta property="og:url" content="https://yakuza-lin.vercel.app">

</head>

<svg class="absolute h-full w-full z-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <pattern id="karomuster" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 0 1600" fill="none" stroke="gray" stroke-width="0.3"></path>
            <path d="M 200 0 L 200 1600" fill="none" stroke="gray" stroke-width="0.3"></path>
            <path d="M 0 0 L 1600 0" fill="none" stroke="gray" stroke-width="0.3"></path>
            <path d="M 0 200 L 1600 200" fill="none" stroke="gray" stroke-width="0.3"></path>
        </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#karomuster)"></rect>
</svg>
<!--Beginning of the Code-->
<main class="bg-black flex flex-col">
    <HeaderBar/>
    <!--Homepage first Site-->
    <div id="home" class="flex flex-col pb-[15rem] lg:pb-[40rem] text-white">
        <div class="pl-6 lg:pl-16 pt-[13rem] lg:pt-[27rem]">
            <div class="max-w-5xl">
                <h1 class="font-black text-3xl lg:text-6xl">Full Stack Software <br>Developer👋</h1>
            </div>
            <div class="max-w-5xl mt-6 lg:mt-8">
                <p class="font-light text-lg lg:text-3xl mb-4 lg:mb-5">
                    Hey, I'm Yakuza, I'm a Student. I create dumb and non-functional Websites <br>Glad to see you.
                </p>

            </div>
        </div>
    </div>

    <!--Introduction of me-->

    <div id="about-me" class="text-white flex flex-col lg:pb-40">
        <div class="pl-6 lg:pl-14">
            <h1 class="font-black text-2xl md:text-4xl lg:text-6xl">
                ASIAN AND TECH? <br> Hell, Yeah!
            </h1>
            <p class="font-light text-sm lg:text-3xl pt-3">
                Hello You! My journey into software development began in 2023 when I finally built my own website. As I pieced together buttons, images, and text with HTML &amp; CSS, I discovered my passion for coding. Since then,
                I've had the privilege of working on diverse projects such as creating my own server on a Raspberry Pi 5 and creating a Multiplayer Game for my viewers and myself :)
                <br><br>
                With every line of code I write, I feel the thrill of crafting something tangible in the virtual world. The joy of seeing my creations coming to life and the endless possibilities of technology keep me inspired.
                <br><br>
                BUT will there be more? Yes! Of course, I plan to make my own schedule and a chat system but more in the future so... Stay tuned !
            </p>
        </div>
    </div>


   <div id ="skills">
    <Tools />
   </div>
</main>








