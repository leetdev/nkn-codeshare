declare const self: DedicatedWorkerGlobalScope

export const subscribeDuration = 130000 // ~1 month

export const tls = self.location?.protocol === 'https:'

const SEED_ADDRESSES = tls
  ? ['https://mainnet-rpc-node-0001.nkn.org/mainnet/api/wallet']
  : [
    'http://mainnet-seed-0001.nkn.org:30003',
    'http://mainnet-seed-0002.nkn.org:30003',
    'http://mainnet-seed-0003.nkn.org:30003',
    'http://mainnet-seed-0004.nkn.org:30003',
    'http://mainnet-seed-0005.nkn.org:30003',
    'http://mainnet-seed-0006.nkn.org:30003',
    'http://mainnet-seed-0007.nkn.org:30003',
    'http://mainnet-seed-0008.nkn.org:30003',
    'http://mainnet-seed-0009.nkn.org:30003',
    'http://mainnet-seed-0010.nkn.org:30003',
    'http://mainnet-seed-0011.nkn.org:30003',
    'http://mainnet-seed-0012.nkn.org:30003',
    'http://mainnet-seed-0013.nkn.org:30003',
    'http://mainnet-seed-0014.nkn.org:30003',
    'http://mainnet-seed-0015.nkn.org:30003',
    'http://mainnet-seed-0016.nkn.org:30003',
    'http://mainnet-seed-0017.nkn.org:30003',
    'http://mainnet-seed-0018.nkn.org:30003',
    'http://mainnet-seed-0019.nkn.org:30003',
    'http://mainnet-seed-0020.nkn.org:30003',
    'http://mainnet-seed-0021.nkn.org:30003',
    'http://mainnet-seed-0022.nkn.org:30003',
    'http://mainnet-seed-0023.nkn.org:30003',
    'http://mainnet-seed-0024.nkn.org:30003',
    'http://mainnet-seed-0025.nkn.org:30003',
    'http://mainnet-seed-0026.nkn.org:30003',
    'http://mainnet-seed-0027.nkn.org:30003',
    'http://mainnet-seed-0028.nkn.org:30003',
    'http://mainnet-seed-0029.nkn.org:30003',
    'http://mainnet-seed-0030.nkn.org:30003',
    'http://mainnet-seed-0031.nkn.org:30003',
    'http://mainnet-seed-0032.nkn.org:30003',
    'http://mainnet-seed-0033.nkn.org:30003',
    'http://mainnet-seed-0034.nkn.org:30003',
    'http://mainnet-seed-0035.nkn.org:30003',
    'http://mainnet-seed-0036.nkn.org:30003',
    'http://mainnet-seed-0037.nkn.org:30003',
    'http://mainnet-seed-0038.nkn.org:30003',
    'http://mainnet-seed-0039.nkn.org:30003',
    'http://mainnet-seed-0040.nkn.org:30003',
    'http://mainnet-seed-0041.nkn.org:30003',
    'http://mainnet-seed-0042.nkn.org:30003',
    'http://mainnet-seed-0043.nkn.org:30003',
    'http://mainnet-seed-0044.nkn.org:30003',
  ]
const getRandomSeed = () => SEED_ADDRESSES[Math.floor(Math.random() * SEED_ADDRESSES.length)]
export const rpcServerAddr = getRandomSeed()
