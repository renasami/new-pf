<main>
    <Header>
    <h1>
       {$_('about.page_title')}
    </h1>
    
    </Header>
</main>
<script lang="ts">
    import Header from "../components/layouts/Header.svelte"
    import { dictionary, locale, _ } from "svelte-i18n"
    import { get } from 'svelte/store'
    import {ja,en, language} from "../store"
    console.log()
    dictionary.set({
      "ja":{...get(ja)},  
      "en":{...get(en)}
    })
    locale.set(get(language))
</script>