<body class="bg-black">
<div class="flex flex-col items-center justify-center min-h-screen text-gray-300">
    <div class="bg-black md:w-1/2 p-6">
        <h1 class="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
        <div class="text-left">
            <h2 class="text-2xl font-bold">Visitor and Usage Data:</h2>
            <p class="mb-4">This website does not collect any personal information from you. However, we do collect data about the usage and behavior of visitors, including browser type, geographical location, and the number of users accessing our website. You can find more details below:</p>

            <h2 class="text-2xl font-bold mt-8">No Cookies:</h2>
            <p class="mb-4">This website does not use cookies to collect personal information from visitors. This website is solely for hobby purposes and will not be misused.</p>

            <h2 class="text-2xl font-bold">Hosted by Vercel:</h2>
            <p class="mb-4">Our website is hosted by Vercel. We collect data about browser type and Operating System, from which country people are accessing our website, and the number of users visiting our website. You can find more details in the "Vercel picture" below.</p>

            <h2 class="text-2xl font-bold">Login System:</h2>
            <p class="mb-4">We collect usernames, passwords, and email addresses for the login systems. This information is stored securely and used only for the intended purposes of the login system.</p>

            <br><br><br>
            <h2 class="text-2xl font-bold">If you still don't believe me...</h2>
            <p class="text-center mt-8">Here is an actual screenshot of my analytics dashboard.</p> <br><br><br>
            <div>
                <img class="mx-auto my-8" src="media/Vercel.png" alt="">
            </div>
        </div>
        <p class="text-center mt-8">This Privacy Policy may be updated from time to time. Please check it regularly for any changes. By using our website, you agree to the terms of this Privacy Policy.</p>
        <p class="text-center mt-8 py-5">If you have any questions or concerns about this Privacy Policy, please contact us at yihang.apply@outlook.de.</p>
        <div class="flex justify-center items-center">
            <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-100">
                <a href="https://yakuza-lin.vercel.app">Here you go back</a>
            </button>
        </div>
    </div>
</div>

</body>

<script lang="ts">
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

</script>

<!-- on:contextmenu={(e) => e.preventDefault() } -->
<svelte:window on:mousemove={handleMouseMove} on:mouseout={handleMouseLeave}  />
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