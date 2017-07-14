<template>
    <div>
        <div class="tile is-ancestor is-12" v-for="constellation_row in constellations">
        
            <div class="tile is-parent is-4" v-for="constellation in constellation_row">
                <article class="tile is-child box">
                    <h1 class="title">{{ constellation.name }}</h1>
                    <p>
                        {{constellation.date_text}}
                    </p>
                </article>
            </div>
    
        </div>

    </div>
</template>

<script>
    export default {
        props : {
            constellations: Array
        },
        computed : {
        
        }
    }
</script>

<style>
</style>