var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
	transports: [
		new winston.transports.File({
			level: 'info',
			filename: '/var/log/nodejs/all.log',
			handleExceptions: false,
			json: true,
			maxsize: 5242880, // 5MB
			maxFiles: 5,
			colorize: false
		}),
		new winston.transports.Console({
			level: 'debug',
			handleExceptions: true,
			json: false,
			colorize: true
		})
	],
	exceptionHandlers: [
		new winston.transports.File(
			{ filename: '/var/log/nodejs/error.log' }
		)
	],
	exitOnError: false
});

module.exports = logger;