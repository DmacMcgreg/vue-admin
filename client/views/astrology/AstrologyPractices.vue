<template>
    <div>
        <h1>Welcome to Astrology</h1>
    
        <constellation-card :constellations="constellation_list"></constellation-card>
    
    </div>
    
</template>

<script>
    import constellations from './constellations'
    import ConstellationCard from './ConstellationCard.vue'
    export default {
        data () {
            return {
                constellations
            }
        },
        components: {
            ConstellationCard
        },
        computed : {
            constellation_list() {
                let constellations_structure = [
                    [],
                    [],
                    [],
                    []
                ]
                let index = 0
                
                return Object.keys(this.constellations).reduce( (carry, constellation_name) => {
                    let row = carry[index]
                    let constellation = this.constellations[constellation_name]
                    if(row.length < 4) {
                        row.push(constellation)
                    } else {
                        carry[++index].push(constellation)
                    }
                    return carry
                }, constellations_structure)
            }
        }
    }
</script>

<style>
</style>