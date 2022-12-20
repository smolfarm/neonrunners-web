/**
 * 
 *                   _        ___                   
 *                  | |      / __)                  
 *   ___ ____   ___ | |    _| |__ _____  ____ ____  
 *  /___)    \ / _ \| |   (_   __|____ |/ ___)    \ 
 * |___ | | | | |_| | |     | |  / ___ | |   | | | |
 * (___/|_|_|_|\___/ \_)    |_|  \_____|_|   |_|_|_|
 * 
 * 
 * React component at the top level of the neon runners web app.
 * 
 */

import React from 'react'

import {
    getDefaultWallets,
    RainbowKitProvider,
    ConnectButton
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

                    <div className="flex flex-col mt-[-128] mx-auto w-full">
                        <div className="w-full text-center mx-auto text-3xl lg:text-6xl mt-16 md:mt-6 lg:mt-2 mb-12">
                            [&quot;<a className="text-blue-500" href="https://twitter.com/NEONRUNNERSnft" target="_new">TWITTER</a>&quot;,<br />
                            &quot;<a className="text-blue-500" href="https://twitter.com/fumeiji" target="_new">ART_BY_FUMEIJI</a>&quot;,<br />
                            &quot;<a className="text-blue-500" href="https://ens0.me" target="_new">TECH_BY_ENS0</a>&quot;]<br />
                        </div>

                        <div className="w-max text-center mx-auto">
                            <ConnectButton chainStatus="icon" accountStatus="address" />
                        </div>
                        
                        <div className="w-full mx-auto">
                            <MintView />
                        </div>

                        <div className="mx-auto mt-12">
                            <ul className="list-none text-2xl mb-12">
                                <li>[&quot;<a className="text-blue-500" href="https://opensea.io/collection/neon-runners" target="_new">OpenSea</a>&quot;,</li>
                                <li>&nbsp;&quot;<a className="text-blue-500" href="https://discord.gg/6nzuDZ3aT6" target="_new">Discord</a>&quot;,</li>
                                <li>&nbsp;&quot;<a className="text-blue-500" href="https://etherscan.io/address/0x82f2b7599ecd534c3e2ccf160f2f090bc483f5aa" target="_new">Etherscan</a>&quot;]</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default WebApp