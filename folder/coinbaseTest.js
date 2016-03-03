//change   

sadklsadkljsa
ndsasd
asdlnksadklnsadklnd

var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': '64MX1pTiMMFZEzaf',
  'apiSecret': 'tgFKEDlvO3T2umfidDtBeZVoH1FKlQsF',
  'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
  'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
});

// client.getAccounts({}, function(err, accounts) {
//   accounts.forEach(function(acct) {
//     console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
//     acct.getTransactions(null, function(err, txns) {
//       txns.forEach(function(txn) {
//         console.log('txn: ' + txn.id);
//       });
//     });
//   });
// });

// client.createAccount({'name': 'New Wallet'}, function(err, acct) {
//   console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
// });

// client.getAccount('primary', function(err, primaryAccount) {
//   // Generate a new bitcoin address for the account from previous steps:
//   account.createAddress(null, function(err, address) {
//     // Send coins to the new account from your primary account:
//     primaryAccount.sendMoney({'to': address.address,
//                               'amount': '0.01',
//                               'currency': 'BTC',
//                               'description': 'For being awesome!'}, function(err, tx) {
//        console.log(tx);
//     });
//   });
// });

var address = null;

client.getAccount('primary', function(err, account) {
  console.log(account.name);
  account.createAddress(function(err, addr) {
    console.log(addr);
    address = addr;
  });
});