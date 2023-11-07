<script lang="ts">
    import { onMount } from 'svelte';

    let technologies = [
        "FRONT-END DEVELOPMENT",
        "BACK-END DEVELOPMENT",
        "DATABASE MANAGEMENT",
        "SERVERS",
        "VERSION CONTROL",
        "IDE",
        "OTHER TECHNOLOGIES",
    ];

    let technologyImages = [
        [
            { src: "media/TypeScript.png", alt: "TypeScript" },
            { src: "media/HTML.png", alt: "HTML" },
            { src: "media/JavaScript.png", alt: "JavaScript" },
            { src: "media/React.png", alt: "React" },
            { src: "media/Next.png", alt: "Next" },
            { src: "media/svelte.png", alt: "svelte"},
            { src: "media/CSS.png", alt: "CSS" },


        ],
        [
            { src: "media/php.png", alt: "PHP" },
            { src: "media/JavaScript.png", alt: "JavaScript" },
            { src: "media/csharp.png", alt: "C#" },
        ],
        [
            { src: "media/MySQL.png", alt: "MySQL" },
            { src: "media/MicrosoftSQLServer.png", alt: "Microsoft SQL Server" },
            { src: "media/MongoDB.png", alt: "MongoDB" },

        ],
        [
            { src: "media/Vercels.png", alt: "Vercel" },
            { src: "media/Apache.png", alt: "Apache" },
            { src: "media/GitHub.png", alt: "GitHub" },
        ],
        [
            { src: "media/GitHub.png", alt: "GitHub" },
            { src: "media/Git.png", alt: "Git" },
        ],
        [
            { src: "media/VSCode.png", alt: "VSCode" },
            { src: "media/IntelliJ.png", alt: "IntelliJ" },
            { src: "media/vss.png", alt: "VSS" },
        ],
        [{ src: "media/NPM.png", alt: "NPM" }],
    ];

    let marginLeft = 40;

    onMount(() => {
        const updateMargin = () => {
            const screenWidth = window.innerWidth;
            const baseWidth = 1200;
            const increment = (screenWidth - baseWidth) / 30;
            marginLeft = 40 + increment;

        };
        window.addEventListener('resize', () => {
            updateMargin();

        });

        // Initial call to update margin
        updateMargin();
    });

    $: style = `--margin-left: ${marginLeft}rem;`;


</script>

<style>
    .border-black {
        transition: border-color 0.3s, transform 0.3s, box-shadow 0.5s;
        box-shadow: 0 0 10px rgb(0, 128, 255); /* Leuchteffekt mit angepasster Opacity */

    }

    .border-black:hover {
        border-color: #0080ff; /* Hellblauer Border beim Hovern */
        animation: bounce 0.5s;
        box-shadow: 0 0 20px rgb(0, 128, 255); /* Verstärkter Leuchteffekt beim Hover mit angepasster Opacity */
    }

    @keyframes bounce {
        50% {
            transform: scale(1.1) translateY(3%);
        }
    }
    @media (min-width: 1200px) {
        .big-screens {
            margin-left: var(--margin-left);
        }
    }



</style>

<div id="Tools" class="px-6 py-16 lg:pl-14">
    <div class="flex-col text-white ">
        <h1 class=" text-3xl font-black lg:text-6xl">
            What Tools <br> I am <br> Working With!
        </h1>
        <p class=" text-xl md:text-2xl leading-1 py-3 lg:text-2xl lg:w-1/2">
            Building a good digital experience requires an even better tool-set of technologies. These are some of the technologies I have worked with.
        </p>
    </div>
</div>

<div class="pr-5 lg:pl-14 pl-5 big-screens big-screen:mt-[-18rem] big-screen:w-[30rem] md:w-[30rem] lg:w-[30rem] " style={style}> <!-- big screen(s) is a variable for ny media css-->
    <div class="grid grid-cols-1">
        {#each technologies as tech, index (index)}
            <div class="mb-4 inline-block border-2 border-black rounded-md p-4">
                <h2 class="p-2 inline-block text-white ">{tech}</h2>
                <div class="flex flex-row flex-wrap gap-x-2 gap-y-2">
                    {#each technologyImages[index] as image}
                        <img src={image.src} alt={image.alt} class="w-auto">
                    {/each}
                </div>
            </div>
            {#if index !== technologies.length - 1}
                <div class="md:hidden" style="height: 0.1rem;"></div>
            {/if}
        {/each}
    </div>
</div>
