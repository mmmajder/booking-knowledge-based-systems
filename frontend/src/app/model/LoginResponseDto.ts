export class UserTokenState {
  accessToken: string = "";
  expiresIn: number = 10000;
}

export class LoginResponseDto {
  token!: Token;
  userRole!: string;
}


class Token {
  accessToken!: string;
  expiresAt!: number;
}
