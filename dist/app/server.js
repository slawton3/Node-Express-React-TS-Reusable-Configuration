"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    constructor(app) {
        this.app = app;
        this.app.get("/api", (req, res) => {
            res.send("Test");
        });
    }
    start(port) {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`));
    }
}
exports.Server = Server;
