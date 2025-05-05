const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const req = await axios.post("https://yoga-pose-guide.onrender.com/login", { email, password });
    alert(req.data.response);
    if (req.data.loginStatus) {
      localStorage.setItem("userEmail", email);
      if (req.data.role === "buyer") {
        navigate("/buyer-home");
      } else if (req.data.role === "artist") {
        navigate("/artist-home");
      }
    } else {
      navigate("/login");
    }
  } catch (err) {
    console.log(err);
  }
};

export default Login;