import { Employee } from './employee';
import { Bill } from './bill';

export class MockData {
    employee: Employee[] = [
        {
            "_id": "5d43fd7ed098c465767ce78b",
            "isActive": false,
            "balance": "$2,696.38",
            "age": 21,
            "name": {
                "first": "Eliza",
                "last": "Charles"
            },
            "company": "COMDOM",
            "email": "eliza.charles@comdom.info",
            "phone": "+36 (867) 512-3458",
            "address": "6891 Railroad Avenue, Tuttle, New Jersey, 2029",
            "registered": "Saturday, December 24, 2016 12:27 AM"
        },
        {
            "_id": "5d43fd7ee10fd273e3ae9403",
            "isActive": false,
            "balance": "$2,316.49",
            "age": 33,
            "name": {
                "first": "Strong",
                "last": "Kennedy"
            },
            "company": "ZANILLA",
            "email": "strong.kennedy@zanilla.net",
            "phone": "+36 (978) 530-2127",
            "address": "4839 Fuller Place, Hoagland, District Of Columbia, 3094",
            "registered": "Monday, January 6, 2014 7:13 AM"
        },
        {
            "_id": "5d43fd7e927d9490b700efe5",
            "isActive": false,
            "balance": "$2,738.09",
            "age": 33,
            "name": {
                "first": "Dixon",
                "last": "Wiley"
            },
            "company": "INSURON",
            "email": "dixon.wiley@insuron.io",
            "phone": "+36 (810) 440-3730",
            "address": "5324 Maple Street, Nogal, Delaware, 6091",
            "registered": "Sunday, April 16, 2017 12:02 AM"
        },
        {
            "_id": "5d43fd7ee5b489cdab435663",
            "isActive": false,
            "balance": "$1,002.53",
            "age": 33,
            "name": {
                "first": "Madeline",
                "last": "Whitney"
            },
            "company": "TECHTRIX",
            "email": "madeline.whitney@techtrix.biz",
            "phone": "+36 (957) 577-3760",
            "address": "5774 Franklin Avenue, Floriston, South Dakota, 9038",
            "registered": "Thursday, November 24, 2016 3:53 PM"
        },
        {
            "_id": "5d43fd7ee559f7ef4fa14dcc",
            "isActive": false,
            "balance": "$3,601.07",
            "age": 31,
            "name": {
                "first": "Morrison",
                "last": "Sparks"
            },
            "company": "MULTRON",
            "email": "morrison.sparks@multron.biz",
            "phone": "+36 (996) 567-2102",
            "address": "8899 Empire Boulevard, Delco, Iowa, 8006",
            "registered": "Tuesday, October 2, 2018 9:37 AM"
        }
    ];

    bills: Bill[] = [
        {
            "_id": "5d4400991747e3c21f3107fd",
            "paid": true,
            "amount": 94535,
            "customer": "MANGELICA",
            "created": "Tuesday, February 14, 2017 10:40 AM"
        },
        {
            "_id": "5d4400996e10b1dde4cf2031",
            "paid": true,
            "amount": 182066,
            "customer": "QUAREX",
            "created": "Thursday, November 26, 2015 9:19 AM"
        },
        {
            "_id": "5d4400992c90fa163ca51166",
            "paid": true,
            "amount": 91523,
            "customer": "QUINEX",
            "created": "Monday, October 8, 2018 8:44 PM"
        },
        {
            "_id": "5d440099142899112a4fe496",
            "paid": true,
            "amount": 77266,
            "customer": "HOMELUX",
            "created": "Wednesday, July 2, 2014 9:48 AM"
        },
        {
            "_id": "5d4400997b69d1b9e435091d",
            "paid": true,
            "amount": 25976,
            "customer": "ELPRO",
            "created": "Monday, July 20, 2015 12:38 AM"
        }
    ];
}




// Employee generator.
// https://next.json-generator.com
/*
[
  {
    'repeat(5, 10)': {
      _id: '{{objectId()}}',
      isActive: '{{bool()}}',
      balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      age: '{{integer(20, 40)}}',
      name: {
        first: '{{firstName()}}',
        last: '{{surname()}}'
      },
      company: '{{company().toUpperCase()}}',
      email(tags) {
        return `${this.name.first}.${this.name.last}@${this.company}${tags.domainZone()}`.toLowerCase();
      },
      phone: '+36 {{phone()}}',
      address: '{{integer(1001, 9000)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
      registered: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}'
    }
  }
]
*/

// Bills
/*
[
  {
    'repeat(5)': {
      _id: '{{objectId()}}',
      paid: '{{bool()}}',
      amount: '{{integer(20000, 200000)}}',
      customer: '{{company().toUpperCase()}}',
      created:'{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
    }
  }
]
*/
