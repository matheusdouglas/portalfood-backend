import { Request, Response } from "express";
import { ListUserService } from "../../services/user/ListUserService";

class ListByUserController {
  async handle(req: Request, res: Response) {
    const listByUserService = new ListUserService();
    const userList = await listByUserService.execute();
    res.json(userList);
  }
}

export { ListByUserController };
