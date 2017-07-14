/**
 * Created by dave_ on 7/3/2017.
 */

class Constellation {

    constructor ({name, date_text, date_state, date_end, practice}){
        this.name = name
        this.date_text = date_text
    }
}

export default {
    aries : new Constellation({
        name: 'Aries',
        date_text: '21st March - 19th April',
    }),
    taurus : new Constellation({
        name: 'Taurus',
        date_text: '20th April - 19th May',
    }),
    gemini : new Constellation({
        name: 'Gemini',
        date_text: '20th May - 20th June',
    }),
    cancer : new Constellation({
        name: 'Cancer',
        date_text: '21st June - 22nd July',
    }),

    leo : new Constellation({
        name: 'Leo',
        date_text: '23rd July - 22nd August',
    }),
    virgo : new Constellation({
        name: 'Virgo',
        date_text: '23rd August - 22nd September',
    }),
    libra : new Constellation({
        name: 'Libra',
        date_text: '23rd September - 22nd October',
    }),
    scorpio : new Constellation({
        name: 'Scorpio',
        date_text: '23rd October - 22nd November',
    }),
    sagittarius : new Constellation({
        name: 'Sagittarius',
        date_text: '23rd November - 21st December',
    }),
    capricorn : new Constellation({
        name: 'Capricorn',
        date_text: '22nd December - 19th January',
    }),
    pisces : new Constellation({
        name: 'Pisces',
        date_text: '18th February - 20th March',
    }),
    aquarius : new Constellation({
        name: 'Aquarius',
        date_text: '20th January - 17th February',
    })


}