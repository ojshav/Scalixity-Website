"use client"

import Image from 'next/image'

type TechItem = { name: string; logo?: string }
type Technologies = Record<string, (TechItem | string)[]>

const technologies: Technologies = {
  "NFT Standards": [
    { name: "ERC-721", logo: "/tech/erc721.svg" },
    { name: "ERC-1155", logo: "/tech/erc1155.svg" },
    { name: "BEP-721", logo: "/tech/bep721.svg" }
  ],
  "Blockchain Platforms": [
    { name: "Ethereum", logo: "/tech/ethereum.svg" },
    { name: "Polygon", logo: "/tech/polygon.svg" },
    { name: "Binance Smart Chain", logo: "/tech/bsc.svg" }
  ],
  "Smart Contract Development": [
    { name: "Solidity", logo: "/tech/solidity.svg" },
    { name: "Rust", logo: "/tech/rust.svg" },
    { name: "Vyper", logo: "/tech/vyper.svg" }
  ],
  "Marketplaces & Integration": [
    { name: "OpenSea", logo: "/tech/opensea.svg" },
    { name: "Rarible", logo: "/tech/rarible.svg" },
    { name: "SuperRare", logo: "/tech/superrare.svg" }
  ],
  "Wallets & Payments": [
    { name: "MetaMask", logo: "/tech/metamask.svg" },
    { name: "Trust Wallet", logo: "/tech/trustwallet.svg" },
    { name: "WalletConnect", logo: "/tech/walletconnect.svg" }
  ],
  "Testing & Security": [
    { name: "Truffle", logo: "/tech/truffle.svg" },
    { name: "Hardhat", logo: "/tech/hardhat.svg" },
    { name: "MythX", logo: "/tech/mythx.svg" }
  ],
  "IPFS & Storage": [
    { name: "IPFS", logo: "/tech/ipfs.svg" },
    { name: "Pinata", logo: "/tech/pinata.svg" },
    { name: "Arweave", logo: "/tech/arweave.svg" }
  ],
  "Project Management": [
    "Jira",
    "Trello",
    "Asana"
  ]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wider">TOOL & TECHNOLOGY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Tech Stack We Use for NFT Development
          </h2>
          <p className="text-gray-400 mt-4">
            Our NFT developers recommend the most reliable technology stack to build secure, scalable, and innovative NFT solutions.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 3).map(([category, items], index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-6">{category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Array.isArray(items) &&
                    items.map((item, idx) =>
                      typeof item === "object" ? (
                        <div key={idx} className="flex flex-col items-center">
                          <Image
                            src={item.logo!}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="mb-2"
                          />
                          <span className="text-gray-400 text-sm text-center">{item.name}</span>
                        </div>
                      ) : null
                    )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(3).map(([category, items], index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {typeof items === "object" &&
                    items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#1A1B26] text-gray-400 rounded-full text-sm"
                      >
                        {typeof item === "string" ? item : item.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolsAndTechnology;
