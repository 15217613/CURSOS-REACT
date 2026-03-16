export class ShareValueChildren {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        if (value.length < 1) {
            return new Error('Value must be a string');
        }
        this.value = value;
    }
}

export const shareValueChildren = new ShareValueChildren('');