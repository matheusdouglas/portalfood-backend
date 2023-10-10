import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload {
  sub: string;
  is_admin: boolean; // Alterado para 'is_admin'
}

export function isAthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    // Validar o token
    const { sub, is_admin } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

    // Verificar se o usuário é um administrador
    if (!is_admin) {
      // Se não for um administrador, negue o acesso
      return res.status(403).json({ message: 'Acesso negado' });
    }

    // Recuperar o ID do usuário e colocá-lo dentro de uma variável 'user_id' dentro do req
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
