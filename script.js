class BankAccount {
            constructor(accountNumber, accountHolder, balance = 0) {
                this.accountNumber = accountNumber;
                this.accountHolder = accountHolder;
                this.balance = balance;
            }

            deposit(amount) {
                this.balance += amount;
                return `$${amount} deposited. Current balance: $${this.balance}`;
            }

            withdraw(amount) {
                if (amount > this.balance) {
                    return "Insufficient funds";
                } else {
                    this.balance -= amount;
                    return `$${amount} withdrawn. Current balance: $${this.balance}`;
                }
            }

            checkBalance() {
                return `Account balance for ${this.accountHolder}: $${this.balance}`;
            }
        }

        const accounts = new Map();

        function createAccount() {
            const accountHolder = document.getElementById('accountHolder').value;
            const initialBalance = parseFloat(document.getElementById('initialBalance').value);
            const accountNumber = Math.floor(Math.random() * 1000000);
            const newAccount = new BankAccount(accountNumber, accountHolder, initialBalance);
            accounts.set(accountNumber, newAccount);
            document.getElementById('output').innerText = `Account created. Account Number: ${accountNumber}`;
        }

        function deposit() {
            const accountNumber = parseInt(document.getElementById('accountNumber').value);
            const amount = parseFloat(document.getElementById('amount').value);
            const account = accounts.get(accountNumber);
            if (account) {
                document.getElementById('output').innerText = account.deposit(amount);
            } else {
                document.getElementById('output').innerText = "Account not found";
            }
        }

        function withdraw() {
            const accountNumber = parseInt(document.getElementById('accountNumber').value);
            const amount = parseFloat(document.getElementById('amount').value);
            const account = accounts.get(accountNumber);
            if (account) {
                document.getElementById('output').innerText = account.withdraw(amount);
            } else {
                document.getElementById('output').innerText = "Account not found";
            }
        }

        function checkBalance() {
            const accountNumber = parseInt(document.getElementById('accountNumber').value);
            const account = accounts.get(accountNumber);
            if (account) {
                document.getElementById('output').innerText = account.checkBalance();
            } else {
                document.getElementById('output').innerText = "Account not found";
            }
        }