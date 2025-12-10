function requireLogin(req, res, next) {
    if (!req.session.userId) {
        req.session.error = "Please login first.";
        return res.redirect("/login");
    }
    next();
}

module.exports = { requireLogin };
