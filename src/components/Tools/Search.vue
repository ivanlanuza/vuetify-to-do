<template>
    <v-text-field
        :value="$store.state.searchEntry"
        @input="$store.commit('setSearch', $event)"
        @focus="searchClosed=false"
        @blur="searchClosed=true"
        :disabled="$store.state.sorting"
        placeholder="Search"
        class="mt-1 expanding-search"
        :class="{ 'closed' : searchClosed && !$store.state.searchEntry }"
        filled
        dense
        clearable
        prepend-inner-icon="mdi-magnify"
    ></v-text-field>  
</template>

<script>
export default {
    data() {
        return {
            searchClosed: true
        }
    }
}
</script>

<style>
    .expanding-search .v-input__control .v-input__slot::before, .v-input__slot::after {
        border-style: none !important;
    }
    .expanding-search {
        transition: max-width 0.5s !important;
        flex: none !important;
        width: 280px !important;
        
    }
    .closed {
        max-width: 45px !important;
    }

    .closed .v-input__slot {
        background: transparent !important;
        cursor: pointer !important;
    }

    .expanding-search .v-input__control {
        height: 40px !important
    }
</style>