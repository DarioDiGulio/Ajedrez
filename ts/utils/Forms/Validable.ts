class Validable {
    static REG_EX_TEXT = /^[A-Za-z0-9-\s]*$/;
    static REG_EX_PASS = /^[A-Za-z0-9]*$/;
    static REG_EX_NUMBER = /^[0-9]*$/;
    static REG_EX_TEXTAREA = /^[A-Za-z0-9]*$/;
    static REG_EX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    

    public static text(text: string): boolean {
        return this.REG_EX_TEXT.test(text);
    }

    public static password(password: string): boolean {
        return this.REG_EX_PASS.test(password);
    }

    public static number(number: string | number): boolean{
        return this.REG_EX_NUMBER.test(number as string);
    }

    public static textArea(content: string): boolean {
        return this.REG_EX_TEXTAREA.test(content);
    }

    public static email(email: string): boolean {
        return this.REG_EX_EMAIL.test(email);
    }
}
