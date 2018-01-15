import { Get, Controller, Res, Param, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {

    @Get('/info')
    info( @Res() res) {
        var info = { version: 1.0, date: "january 2018" };
        return res.status(HttpStatus.OK).send(info);
    }

    @Get('/echo/:message')
    echo( @Param() params) {
        return params.message;
    }
}
