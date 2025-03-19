<script lang="ts">
    let formUrl = 'https://forms.gle/f1QwBEhH9h3v8NVUA';
    export let className: string = "";
	import { P } from 'flowbite-svelte';
</script>
<div>
    <div class="outline-2 outline-white p-4 bg-zinc-900 rounded-lg shadow-lg border border-gray-700 {className}">
        <h1 class="text-2xl font-bold">Contact Us</h1> 
            <div class="text-xl">
                <P>Please feel free to contact us directly at <a href="mailto: teamparagon571@att.net"> teamparagon571@att.net</a>.
            </P>

            <iframe src={formUrl} title="Contact Form" class="w-full h-96 border-none"></iframe>
            </div>
    </div>
</div>
