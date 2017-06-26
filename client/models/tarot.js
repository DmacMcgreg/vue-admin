/**
 * Created by dave_ on 6/26/2017.
 */
import moment from 'moment'

export class Tarot {
    addUpDate ( date_of_birth ) {
        let value = Object.keys(date_of_birth)
                          .reduce(( result, objectKey, index ) => {
                              result += this.reduceNumber(date_of_birth[ objectKey ])
                              return result
                          }, 0)

        return value;
    }
    reduceNumber ( yearString, rollover ) {
        var yearStr = yearString + "";

        let result = yearStr.split('')
                            .reduce(( carry, char, index ) => {
                                carry += parseInt(char)
                                return carry
                            }, 0)

        if ( result > 22 && rollover ) {
            result = this.reduceNumber(result);
        }

        return result;
    }

    calculateImportantYears ( date_of_birth ) {

        let year    = date_of_birth.year, //'1993'
            newYear = year,
            oldYear = year

        let importantYears = [];
        let index          = 0;
        let age            = 0;
        let numberOfYears  = 10;

        importantYears = [ ...Array(numberOfYears).keys() ]
            .reduce(( carry, indexValue, index, array ) => {
                oldYear = newYear
                newYear = this.reduceNumber(oldYear) + parseInt(oldYear);

                var roy = this.reduceNumber(oldYear, true);

                var important = {
                    year : oldYear,
                    value: roy,
                    order: indexValue
                };
                carry.push(important)
                return carry
            }, [])

        return importantYears;
    }

    calculateInnerUrgency ( date_of_birth ) {
        let innerUrgency = 0
        let urgency      = 0;

        urgency = this.addUpDate(date_of_birth);

        if ( urgency.length > 1 || urgency > 22 ) {
            var u        = "" + urgency;
            var f        = parseInt(u.charAt(0));
            var s        = parseInt(u.charAt(1));
            innerUrgency = f + s;
        } else {
            innerUrgency = urgency
        }

        return innerUrgency

    }

    calculateFundamentalTonic ( urgency, userName ) {
        var tonic = userName.trim().replace(/ /g, '').length + urgency + "";

        tonic = parseInt(tonic.charAt(0)) + parseInt(tonic.charAt(1));

        return tonic
    }

    calculateDailyTonic ( fundTonic ) {
        let dailyTonics = [];
        let numberOfDays = 30

        dailyTonics = [ ...Array(numberOfDays).keys() ]
            .reduce((carry, order) => {
                let day   = moment().add(order, 'days').format('l');
                let value = this.addUpDate(day.split('/')) + fundTonic + "";
                if ( value > 22 ) {
                    value = this.reduceNumber(value);
                }

                carry[ order ] = {
                    day,
                    value,
                    order
                }
                return carry
            }, [])

        return dailyTonics;
    }
}
