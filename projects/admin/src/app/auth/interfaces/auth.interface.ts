export interface IAuthMethod {
    createForm: () => void;
    form: () => any;
    getError: (key: string) => string;
    onSubmit: () => void;
}
