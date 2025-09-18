import Image from 'next/image'

const technologies = {
  "Hardware Platforms": [
    { name: "Raspberry Pi", logo: "/images/tech/raspberry-pi.svg" },
    { name: "Arduino", logo: "/images/tech/arduino.svg" },
    { name: "ESP32", logo: "/images/tech/esp32.svg" }
  ],
  "Cloud Platforms": [
    { name: "AWS IoT", logo: "/images/tech/aws-iot.svg" },
    { name: "Azure IoT", logo: "/images/tech/azure-iot.svg" },
    { name: "Google Cloud IoT", logo: "/images/tech/google-cloud.svg" }
  ],
  "Protocols & Connectivity": [
    { name: "MQTT", logo: "/images/tech/mqtt.svg" },
    { name: "CoAP", logo: "/images/tech/coap.svg" },
    { name: "Bluetooth", logo: "/images/tech/bluetooth.svg" }
  ]
}

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">Our IoT Tech Stack</h2>
        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
              <h3 className="text-xl font-bold text-black mb-6">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="mb-2"
                    />
                    <span className="text-black text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
