var md = require('markdown-it')();

module.exports = [ 'center', {

  validate: function(params) {
      return /^center/.test(params.trim())
  },

  render: function (tokens, idx) {
    //var m = tokens[idx].info.trim().match(/^fold\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="center">';

    } else {
      // closing tag
      return '</div>';
    }
  }
}
]

