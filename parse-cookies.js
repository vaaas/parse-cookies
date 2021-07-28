'use strict'
module.exports = function parse_cookies(req)
	{ const cookie = req.headers.cookie
	if (cookie)
		req.cookies = Object.fromEntries(cookie.trim().split(';').map(x => x.trim().split('=')))
	else
		req.cookies = [] }
