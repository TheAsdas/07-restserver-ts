"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    rol: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)("Role", schema);
//# sourceMappingURL=Role.js.map