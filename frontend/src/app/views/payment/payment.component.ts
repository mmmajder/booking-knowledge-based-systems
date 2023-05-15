import {Component, Inject, OnInit} from '@angular/core';
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {User} from "../../model/User";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit {
  public payPalConfig ?: IPayPalConfig;
  defaultCardNumber!: string;
  tokens: string = "0.0";
  validTokenValue: boolean;
  user: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PaymentComponent>) {
    this.validTokenValue = false
    this.user = data.user
  }

  ngOnInit(): void {
    this.defaultCardNumber = "1234123412341234"
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: () => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        payer: {
          email_address: 'sb-qq2m924846107@personal.example.com',
          name: {
            given_name: "Milan",
            surname: "Ajder",
          },
          address: {
            address_line_1: "2211 N First Street",
            address_line_2: "Building 17",
            admin_area_2: "San Jose",
            admin_area_1: "CA",
            postal_code: "95131",
            country_code: "US"
          },
          payer_id: "QYR5Z8XDVJNXQ",
        },
        advanced: {
          commit: 'true',
          extraQueryParams: [
            {
              name: 'intent',
              value: 'authorize'
            }
          ]
        },
        funding_instruments: [
          {
            credit_card: {
              number: '5555555555554444',
              type: 'mastercard',
              expire_month: '12',
              expire_year: '2025',
              cvv2: '123',
              first_name: 'John',
              last_name: 'Doe',
            }
          }
        ],
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.tokens,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.tokens
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: this.tokens,
                },
              }
            ]
          }
        ]
      },
      // advanced: {
      //   commit: 'true',
      // },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then();
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        // this.customerService.addTokens(this.user.email, +this.tokens).subscribe(tokens => {
        //   this.store.dispatch([new SetTokens(tokens)])
        // })
        this.dialogRef.close()
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: async (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  updateValidation() {
    this.validTokenValue = !isNaN(Number(this.tokens));
  }
}
