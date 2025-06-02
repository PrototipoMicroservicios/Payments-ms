import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payments-session')
  createPaymentsSession(){
    return 'createPaymentsSession';
  }

  @Get('success')
  success(){
    return{
      ok: true,
      message: 'Payment successful'
    }
  }

  
  @Get('cancel')
  cancel(){
    return{
      ok: false,
      message: 'Payment cancelled'
    }
  }

}
