const sendAuthResponse = async (res, statusCode, message, data) => {
    return (
        res.status(statusCode).json({
            status: "success" | "error", message: "error", data: { }
        })
    )
}
const login = async (req, res) => {
  try {
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const refresh_Token = jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    
    sendAuthResponse.status(200).json({
      message: "login succesfully",
      "this is token ": token,
      "this is refresh token : ": refresh_Token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password: hashedPassword });

    sendAuthResponse.status(201).json({ message: "user created", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const me = async (req, res) => {
  try {
    const user = await User.findByPk(req.authUser.id, { attributes: { exclude: ['password'] } });
    sendAuthResponse.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
