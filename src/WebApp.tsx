import React from 'react'

import {
    getDefaultWallets,
    RainbowKitProvider,
    ConnectButton,
    Theme,
    darkTheme
} from '@rainbow-me/rainbowkit'
import {
chain,
configureChains,
createClient,
WagmiConfig,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
    [chain.mainnet],
    [
      alchemyProvider({ apiKey: "Hh8fdQZL2nYcS0fYVKslLvSoIZM7Ml9L" }),
      publicProvider()
    ]
);
  
const { connectors } = getDefaultWallets({
    appName: 'neon runners',
    chains
})
  
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

import logo from './images/logo.png'

import MintView from './MintView'

const WebApp = () => {
    return(
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <div>
                    <img src={logo} className="mx-auto mt-[-72]" alt="neon runners logo" />

                    <div className="flex flex-col mt-[-128] mx-auto w-max">
                        <div className="w-max text-center mx-auto text-6xl mb-12">
                            [&quot;<a className="text-blue-500" href="https://twitter.com/NEONRUNNERSnft" target="_new">TWITTER</a>&quot;,<br />
                            &quot;<a className="text-blue-500" href="https://twitter.com/fumeiji" target="_new">ART_BY_FUMEIJI</a>&quot;,<br />
                            &quot;<a className="text-blue-500" href="https://ens0.me" target="_new">TECH_BY_ENS0</a>&quot;]<br />
                        </div>

                        <div className="w-max text-center mx-auto">
                            <ConnectButton chainStatus="icon" accountStatus="address" />
                        </div>
                        
                        <div className="w-max mx-auto">
                            <MintView />
                        </div>

                        <div className="mx-auto mt-12">
                            <ul className="list-none text-2xl mb-12">
                                <li>[&quot;<a className="text-blue-500" href="https://opensea.io/collection/neon-runners" target="_new">OpenSea</a>&quot;,</li>
                                <li>&quot;<a className="text-blue-500" href="https://etherscan.io/address/0x82f2b7599ecd534c3e2ccf160f2f090bc483f5aa" target="_new">Etherscan</a>&quot;]</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default WebApp