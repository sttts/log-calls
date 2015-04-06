module.exports.annotate = function (prefix, namespace, key, logger) {
  var orig = namespace[key];
  namespace[key] = function () {
    var s = 'nedb.' + key + '(';
    for (var i = 0; i < arguments.length; i++) {
      if (i > 0) { s += ', '; }
      var arg = arguments[i];
      if (typeof arg === 'function') {
        s += '..fn..';
      } else {
        try {
          s += JSON.stringify(arg);
        }
        catch (err) {
          s += arg.toString()
        }
      }
    }
    s += ')';
    logger(s);
    return orig.apply(this, arguments);
  }
};

module.exports.annotate_all = function (prefix, namespace, logger) {
  logger = logger || console.log;
  prefix = prefix ? (prefix + '.') : '';
  for (var key in namespace) {
    if (namespace.hasOwnProperty(key) && (typeof (namespace[key]) === 'function')) {
      module.exports.annotate(prefix, namespace, key, logger);
    }
  }
};
