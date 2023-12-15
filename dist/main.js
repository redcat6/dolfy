"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./pipes/validation.pipe");
async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
        origin: [process.env.FRONTEND_URL],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });
    app.use(cookieParser());
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    await app.listen(PORT, () => {
        console.log(`Server is starting on port: ${PORT}`);
        console.log(`origin is: ${process.env.FRONTEND_URL}`);
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Strategy Simulator Dolfy')
        .setDescription('smart marketing strategy learning')
        .setVersion('1.0')
        .addTag('dolfy')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/docs', app, document);
}
start();
//# sourceMappingURL=main.js.map