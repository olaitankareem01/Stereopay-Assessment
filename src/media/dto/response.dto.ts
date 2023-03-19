export class ResponseDto {
    constructor(public status: 'success' | 'error', public message: string, public data?: any) {}
  }
  