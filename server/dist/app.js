"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const hpp_1 = __importDefault(require("hpp"));
const expenseRouter_1 = require("./routes/expenseRouter");
const app = (0, express_1.default)();
// Set security HTTP headers
app.use((0, helmet_1.default)());
// Body parser, reading data from body into req.body
app.use(express_1.default.json({ limit: '10kb' }));
// Data sanitization against XSS
app.use((0, xss_clean_1.default)());
// Prevent parameter pollution
app.use((0, hpp_1.default)({
    whitelist: [
        'duration',
        'ratingsQuantity',
        'ratingsAverage',
        'maxGroupSize',
        'difficulty',
        'price'
    ]
}));
// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
// Limit requests from same API
const limiter = (0, express_rate_limit_1.default)({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);
app.use('/api/v1/expenses', expenseRouter_1.expensesRouter);
exports.default = app;
