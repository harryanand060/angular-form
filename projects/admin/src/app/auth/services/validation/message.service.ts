export class MessageService {

  constructor() { }

  public getErrorMessage(form: any, key: string) {
    for (let value of Object.values(this.validation_messages[key])) {
      if (form[key].hasError(value['type'])) { return value['message'] }
    }
  }

  private validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter valid email Id' },
      { type: 'user_exists', message: 'Email Id already registred' },
      { type: 'not_found', message: 'Email Id not registred' }
    ],
    'device': [
      { type: 'required', message: 'email or mobile is required' },
      { type: 'pattern', message: 'Enter valid email or mobile number' },
      { type: 'not_found', message: 'user not registred' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'confirmPassword', message: 'Password not matched' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
    ],
    'mobile': [
      { type: 'required', message: 'Mobile is required' },
      { type: 'pattern', message: 'Enter valid mobile number' },
      { type: 'user_exists', message: 'Mobile already registred' },
      { type: 'not_found', message: 'Mobile not registred' }
    ]
  }
}
