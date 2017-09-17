/**
 *
 */

'use strict';

module.exports = {

	meta: {
		description: 'This is a fucking test plugin. Get over it.'
	},

	rules: {

		foo: {
			meta: {
				docs: {
					recommended: true,
					type: 'warning',
					description: 'blahblah'
				},
				schema: []
			},
			create: function (context) {
				function inspectProgram (emitted) {
					if (emitted.exit) { return; }
					console.log ('[DEBUG] The rule test/foo executed successfully.');
				}

				return {
					Program: inspectProgram
				};
			}
		},

		bar: {
			meta: {
				docs: {
					recommended: true,
					type: 'warning',
					description: 'blahblah'
				},
				schema: []
			},
			create: function (context) {
				function inspectProgram (emitted) {
					if (emitted.exit) { return; }
					console.log ('[DEBUG] The rule test/bar executed successfully.');
				}

				return {
					Program: inspectProgram
				};
			}
		}

	}

};