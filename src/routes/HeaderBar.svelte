<script lang="ts">

    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

</script>
<div class="flex justify-center h-10 bg-blend-darken z-20 ">
    <div class="text-white space-x-8">
        <a href="#" class="cursor-pointer" on:click={() => scrollToSection('about-me')}>
            About
        </a>
        <a href="#" on:click={()=> scrollToSection('home')}>
            Home
        </a>
        <a href="#" on:click={()=> scrollToSection('skills')}>
            Skills
        </a>
        <a href="/policy" class="text-pink-500">Policy</a>
    </div>

</div>


