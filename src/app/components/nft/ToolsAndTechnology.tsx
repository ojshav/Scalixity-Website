"use client";

import Image from 'next/image'

type TechItem = { name: string; logo?: string }
type Technologies = Record<string, (TechItem | string)[]>

const technologies: Technologies = {
  "NFT Standards": [
    { name: "ERC-721", logo: "/images/tech/erc721.webp" },
    { name: "ERC-1155", logo: "/images/tech/erc1155.webp" },
    { name: "BEP-721", logo: "/images/tech/bep721.webp" }
  ],
  "Blockchain Platforms": [
    { name: "Ethereum", logo: "/images/tech/ethereum.webp" },
    { name: "Polygon", logo: "/images/tech/polygon.webp" },
    { name: "Binance Smart Chain", logo: "/images/tech/bert.svg" }
  ],
  "Smart Contract Development": [
    { name: "Solidity", logo: "/images/tech/solidity.webp" },
    { name: "Rust", logo: "/images/tech/rust.webp" },
    { name: "Vyper", logo: "/images/tech/vyper.webp" }
  ],
  "Marketplaces & Integration": [
    { name: "OpenSea", logo: "/images/tech/opensea.webp" },
    { name: "Rarible", logo: "/images/tech/rarible.webp" },
    { name: "SuperRare", logo: "/images/tech/superrare.webp" }
  ],
  "Wallets & Payments": [
    { name: "MetaMask", logo: "/images/tech/metamask.webp" },
    { name: "Trust Wallet", logo: "/images/tech/trustwallet.webp" },
    { name: "WalletConnect", logo: "/images/tech/walletconnect.webp" }
  ],
  "Testing & Security": [
    { name: "Truffle", logo: "/images/tech/truffle.webp" },
    { name: "Hardhat", logo: "/images/tech/hardhat.webp" },
    { name: "MythX", logo: "/images/tech/mythx.webp" }
  ],
  "IPFS & Storage": [
    { name: "IPFS", logo: "/images/tech/ipfs.webp" },
    { name: "Pinata", logo: "/images/tech/pinata.webp" },
    { name: "Arweave", logo: "/images/tech/arweave.webp" }
  ],
  "Project Management": [
    "Jira",
    "Trello",
    "Asana"
  ]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-black uppercase tracking-wider">TOOL & TECHNOLOGY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Tech Stack We Use for NFT Development
          </h2>
          <p className="text-black mt-4">
            Our NFT developers recommend the most reliable technology stack to build secure, scalable, and innovative NFT solutions.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 3).map(([category, items], index) => (
              <div key={index} className="border border-black rounded-lg p-6 bg-[#F3F1EB]">
                <h3 className="text-black font-semibold mb-6">{category}</h3>
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
                          <span className="text-black text-sm text-center">{item.name}</span>
                        </div>
                      ) : null
                    )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(3).map(([category, items], index) => (
              <div key={index} className="border border-black rounded-lg p-6 bg-[#F3F1EB]">
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {typeof items === "object" &&
                    items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#F3F1EB] text-black rounded-full text-sm"
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
