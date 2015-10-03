import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      [
        'Element',
        'Density',
        {
          role: 'style',
        },
      ],
      [
        'Copper',
        8.94,
        '#b87333',
      ],
      [
        'Silver',
        10.49,
        'silver',
      ],
      [
        'Gold',
        19.30,
        'gold',
      ],
      [
        'Platinum',
        21.45,
        'color: #e5e4e2',
      ],
    ];
  },

});
