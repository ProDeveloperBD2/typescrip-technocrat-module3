{
  /* --Getter and Setter-- */
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    /* setter */
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    /* getter */
    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }
  const goribManusherBankAccount = new BankAccount(
    333,
    "Abul Jokhon Gorib Hoi",
    40
  );
  goribManusherBankAccount.deposit = 20;
  const mybalance = goribManusherBankAccount.balance;
  console.log(mybalance);
}
