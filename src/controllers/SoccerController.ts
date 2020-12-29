import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { SearchTeams } from '../api';

@Controller('api/soccer')
export class SoccerController {
  @Get()
  private getTeams(request: Request, response: Response) {
    const result = SearchTeams('real_m');

    return response.status(200).send({
      result,
    });
  }
}
