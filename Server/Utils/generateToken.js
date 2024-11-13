import jwt from 'jsonwebtoken';

const generateTokenandSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_KEY, {
		expiresIn: '15d',
	});
	res.cookie('jwt', token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in mm
		httpOnly: true,
		path: '/',
	});
};

export default generateTokenandSetCookie;
