'use strict'
module.exports = function parse_cookies(req)
{	const cookie = req.headers.cookie
	req.cookies = cookie ? Object.fromEntries(cookie.trim().split(';').map(x => x.trim().split('='))) : [] 
	return req }
