require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain hospital hunt case flock timber'; 
let testAccounts = [
"0xcdfe06b6b8fa6a351f5144bcbb3cc6ad1b73fc1ce8e8a9e6250bd8b8fd4fd32c",
"0x5e22b905860402d8ecd64e830b3a51d70ca7795e92e3d769e4b3133e42be3d68",
"0xef328a38dbc6c761fb63a862807aa4fdf31e4dfddb57aef07b9ba5a243235c96",
"0xde1b4ed10710e9eb2afdd4face39cf32e6707909b996814e098112f2d789cac1",
"0xf2d84f131b59cb9f552bcd83ccad329a11f88c162a7c15a5b8c33dbf78739a85",
"0xc5790c27c011ffbca3af529caf4ef35306ceda0cc1f1abbe936f70104296a7af",
"0xe2d97c90d862e281944891ffe040239c5c9c4cf83702bc7807cd141456fe40bd",
"0x97fd653fe0dce376754fb7caea80164277a3a8fcd218a3cee9582e7b4fa09f3e",
"0xa074a1ada1d67001cc3e67065d17320fa9007424749b3b6d417c363c6bca5f4b",
"0xab65b44f554b567d50b4e4a4eaeb86b9316822c23dd2f928490a3dfc3befc1ae"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


