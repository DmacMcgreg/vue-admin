<template>
    <div>
        <div class="tile is-ancestor">
            
            <div class="tile is-parent is-12">
                <article class="tile is-child box">
                    
                    <h1 class="title">Kabbalah Prediction</h1>
                    
                    <label class="label">First, Middle and Last Names</label>
                    <p class="control">
                        <input class="input" v-model="userName" type="text" placeholder="Juan Pablo Victor Calderon">
                    </p>
                    
                    <div class="control">
                        <div class="">
                            <label class="label">Date of Birth</label>
                        </div>
                        
                        <div class="control columns">
                            
                            <div class="column is-1">
                                <input class="input dateOfBirth__input" placeholder="16" v-model="dateOfBirth.month">
                            </div>
                            <div class="column is-1">
                                <input class="input dateOfBirth__input" placeholder="02" v-model="dateOfBirth.day">
                            </div>
                            <div class="column is-2">
                                <input class="input dateOfBirth__input dateOfBirth__input--year"
                                       placeholder="1962"
                                       v-model="dateOfBirth.year">
                            </div>
                        </div>
                    </div>
                    
                    
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
            
        </div>
        
        
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <h4 class="title">Fundamental Tonic</h4>
                    <div class="subtitle">{{fundamentalTonic}}</div>
                </div>
            </div>
    
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <h4 class="title">Inner Urgency</h4>
                    <div class="subtitle">{{innerUrgency}}</div>
                </div>
            </div>
        </div>
        
        <div class="tile is-ancestor">
            <div class="tile is-vertical">
                <div class="tile">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <h4 class="title">Important Years</h4>
                            <table class="table is-narrow">
                                <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Value</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="year in importantYears">
                                        <td>{{year.year}}</td>
                                        <td>{{year.value}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <h4 class="title">Daily Tonic</h4>
                            <table class="table is-narrow">
                                <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Tonic</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="tonic in dailyTonics">
                                    <td>{{tonic.day}}</td>
                                    <td>{{tonic.value}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { Tarot } from '../../../models/tarot'
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
                this.fundamentalTonic = this.Tarot.calculateFundamentalTonic(this.innerUrgency, this.userName);
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
