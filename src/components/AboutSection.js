// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto  gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          

          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">Hoot hoot!</h2>
            <p className="font-simpfxo text-base mb-4">
            $OWL: The night-owl of tokens that’s too cool for traditional degen nests, flying high on Solana's speedy blockchain!
            </p>
            <h3 className="font-courier-bold text-xl font-bold">who needs sleep?</h3>
            <ul className="font-simpfxo text-base space-y-2">
  
  <li>• Flapping to the moon on degen's money rocket fuel, because who needs sleep when there are gains to be made?</li>
  
  <li>• Trust me bro, The Owl is cool af</li>

  <li>• Public PreSale on Pump.Sol as it's the most FUN HOOOOT HOOOOT!</li>
  
</ul>

            <div className="space-y-2 mb-4">

              {/* NFT Address and additional content can be added here */}
            </div>
            <img src="https://i.ibb.co/9g4BThD/side.gif" alt="Wen Logo" className="mx-auto mb-4"  />
          </div>
        </div>
      </div>
    );
  }
  