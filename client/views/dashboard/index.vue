<template>
    <div>
        <div class="tile is-ancestor">
            
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                    
                    <h1 class="title">Kabbalah Prediction</h1>
                    
                    <label class="label">First, Middle and Last Names</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Juan Pablo Victor Calderon">
                    </p>
                    
                    <label class="label">Date of Birth</label>
                    <p class="control has-icon has-icon-right">
                        <input class="input dateOfBirth__input" placeholder="16" v-model="dateOfBirth.month">
                        <input class="input dateOfBirth__input" placeholder="02" v-model="dateOfBirth.day">
                        <input class="input dateOfBirth__input dateOfBirth__input--year"
                               placeholder="1962"
                               v-model="dateOfBirth.year">
                    </p>
                    
                    <p class="control">
                        <label class="checkbox">
                            <input type="checkbox">
                            Remember me
                        </label>
                    </p>
                    
                    <p class="control">
                        <button class="button is-primary" @click="calculate">Submit</button>
                    </p>
                
                </article>
            </div>
            
            
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Enter your Date of Birth In the Correct Format (mm-dd-yyyy)</p>
                    <p class="subtitle">
                        <input class="dateOfBirth__input" placeholder="16" v-model="dateOfBirth.month">
                        <input class="dateOfBirth__input" placeholder="02" v-model="dateOfBirth.day">
                        <input class="dateOfBirth__input dateOfBirth__input--year"
                               placeholder="1962"
                               v-model="dateOfBirth.year">
                    </p>
                </article>
                
                <h3></h3>
                <div class="dateOfBirth">
                
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Two</p>
                    <p class="subtitle">Subtitle</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Three</p>
                    <p class="subtitle">Subtitle</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Four</p>
                    <p class="subtitle">Subtitle</p>
                </article>
            </div>
        </div>
        
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-9">
                <div class="tile">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">Seven</p>
                            <p class="subtitle">Subtitle</p>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-8 is-parent">
                        <article class="tile is-child box">
                            <p class="title">Eight</p>
                            <p class="subtitle">Subtitle</p>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile">
                    <div class="tile is-8 is-parent">
                        <article class="tile is-child box">
                            <p class="title">Nine</p>
                            <p class="subtitle">Subtitle</p>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">Ten</p>
                            <p class="subtitle">Subtitle</p>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <div class="content">
                        <p class="title">Eleven</p>
                        <p class="subtitle">Subtitle</p>
                        <div class="content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                            <p>
                                Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>

    import { Tarot } from '../../models/tarot'
    export default {
        components: {},

        data () {
            return {
                dateOfBirth     : {
                    month: "02",
                    day  : "16",
                    year : "1962"
                },
                userName        : 'Juan Pablo Victor Calderón',
                importantYears  : [],
                innerUrgency    : '',
                fundamentalTonic: '',
                dailyTonics     : [],
                Tarot           : new Tarot()
            }
        },

        methods: {
            calculate() {
                this.importantYears   = this.Tarot.calculateImportantYears(this.dateOfBirth);
                this.innerUrgency     = this.Tarot.calculateInnerUrgency(this.dateOfBirth);
                this.fundamentalTonic = this.Tarot.calculateFundamentalTonic(this.innerUrgency);
                this.dailyTonics      = this.Tarot.calculateDailyTonic(this.fundamentalTonic);
            }
        },

        computed: {
            chartData () {
                return {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ]
                }
            }
        },

        mounted () {

        }

    }
</script>

<style lang="scss" scoped>
</style>
