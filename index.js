
const __10087_2019__ = require('./src/10087-2019');

exports.ishin = (hin, standard) => {
	switch (standard) {
		case undefined:
		case '10087:2019':
			return __10087_2019__.ishin(hin);
	}
	throw Error("Unsupported ISO Standard '" + standard + "'");
}
