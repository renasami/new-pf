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
    import * as en from "../i18n/en-US.json" 
    import * as ja from "../i18n/ja.json" 
    dictionary.set({
        "en": {...en},
        "ja": {...ja}
    })
    locale.set('en');
</script>