{
  /* --Access Modifiers-- */
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    public getBalance() {
      return this._balance;
    }
  }
  const goribManusherBankAccount = new BankAccount(
    333,
    "Abul Jokhon Gorib Hoi",
    20
  );
  goribManusherBankAccount.addDeposit(10);
  const mybalance = goribManusherBankAccount.getBalance();
  console.log(mybalance);
}
